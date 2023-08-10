{{- $site := . -}}
{{- $p := $site.Params.prefix -}}
{{- $bn := print $p "member-nodes" -}}
{{/* replace "-" with "_" for JS */}}
{{- $bnjs := replace $bn "-" "_" -}}
{{- $bnjs := print $bnjs -}}

/**
 * {{ $bn }} - Query the production CN for the list of member nodes and
 * build and insert cards into the member node section of the page.
 */ 
(function( {{ $bnjs }}, undefined ) {

  //var block = {{ $bnjs }}; // block namespace

  {{/* TODO: Not DRY because icons, templates, defined in Hugo partials */}}
  const statIcon = `<svg viewBox="0 0 24 24" class="d1_icon">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line></svg>`;
  const homepageIcon = `<svg viewBox="0 0 24 24" class="d1_icon">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
  const successIcon = `<svg viewBox="0 0 24 24" class="d1_icon d1_icon--sz-tiny d1_icon--col-inherit d1_icon--str-thicker">
    <polyline points="20 6 9 17 4 12"></polyline></svg>`;
  const warningIcon = `<svg viewBox="0 0 24 24" class="d1_icon d1_icon--sz-tiny d1_icon--col-inherit d1_icon--str-thicker">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;

  // Make a card for each node
  function makeMemberNodeCard(node) {
    const { name, identifier, logoURL, infoURL, state, operationalStatus } = node
    const figure = makeFigure(logoURL)
    // Don't show pill for contributing nodes
    const hidePillsFor = ['upcoming', 'contributing']
    let pill = '';
    if(!hidePillsFor.includes(operationalStatus)) {
      pill = makePill(state)
    }
    let infoLink = ''
    if(infoURL) {
      infoLink = `<a
        class="{{ $bn }}__link"
        href="${infoURL}"
        title="Member node homepage">
        ${homepageIcon}
      </a>`
    }
    let portalLink = ''
    if(identifier) {
      const portalId = identifier.replace('urn:node:', '')
      portalLink = `<a
        class="{{ $bn }}__link"
        href="https://search.dataone.org/portals/${portalId}"
        title="Member node statistics">
        ${statIcon}
      </a>`
    }
    const template = `<div class="{{ $bn }}__member">
      ${pill}
      ${figure}
      <h4 class="{{ $bn }}__name">${name}</h4>
      <div class="{{ $bn }}__links">
        ${infoLink}
        ${portalLink}
      </div>
    </div>`
    return template
  }

  // For each node card, make a figure with the logo
  function makeFigure(logoURL) {
    if(!logoURL) return '';
    return `<figure class="{{ $bn }}__logo">
      <img
        class="{{ $bn }}__logo-image"
        src="${logoURL}"
        alt="Member node logo"
      />
    </figure>`
  }

  // Make a pill for the node state/status
  function makePill(state) {
    const pillTypes = {
      'up': 'success',
      'down': 'warning',
    }
    const pillIcons = {
      'up': successIcon,
      'down': warningIcon,
    }
    const displayStatuses = {
      'up': 'Active',
      'down': 'Down',
    }
    const displayStatus = displayStatuses[state] || 'Unknown'
    const pillIcon = pillIcons[state] || ''
    const pillType = pillTypes[state] || 'info'
    return `<span class="d1_pill d1_pill--${pillType}">
      <span class="d1_pill__icon">
        ${pillIcon}
      </span>
      Status: ${displayStatus}
    </span>`
  }

  function selectContainer(category){
    const selector = `#section__${category}-repositories > .{{ $bn }}__category-members`;
    return document.querySelector(selector);
  }

  function selectCountEl(category){
    const selector = `#item__section__${category}-repositories .member-nodes__count`;
    return document.querySelector(selector);
  }

  // Get the list of nodes from the DataONE API and build the cards & counts
  function insertCards(){
    D1.listNodes('PROD').then(function(nodes) {

      // Select the containers to insert the node cards
      const currentContainer = selectContainer('current-member');
      const replicationContainer = selectContainer('replication');
      const contributingContainer = selectContainer('contributing');
      const upcomingContainer = selectContainer('upcoming-member');
      const isOnePlusContainer = currentContainer || replicationContainer || contributingContainer || upcomingContainer;

      // Select the containers to insert the node counts
      const currentCountEl = selectCountEl('current-member');
      const replicationCountEl = selectCountEl('replication');
      const contributingCountEl = selectCountEl('contributing');
      const upcomingCountEl = selectCountEl('upcoming-member');

      if(!nodes || !isOnePlusContainer) return;

      // list only member nodes (not coordinating nodes)
      nodes = nodes.filter(node => node.type !== 'cn');

      // sort by name, move nodes that are down to the bottom of the list
      nodes.sort((a, b) => {
        if(a.state === 'down' && b.state !== 'down') return 1;
        if(a.state !== 'down' && b.state === 'down') return -1;
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      })

      // track counts of each type
      let currentCount = 0;
      let contributingCount = 0;
      let replicatorCount = 0;
      let upcomingCount = 0;

      // Build cards and insert into category containers
      nodes.forEach(node => {
        const nodeCard = makeMemberNodeCard(node);
        switch(node.operationalStatus) {
          case 'operational':
            currentContainer.innerHTML += nodeCard
            currentCount++;
            break;
          case 'contributing':
            contributingContainer.innerHTML += nodeCard
            contributingCount++;
            break;
          case 'replicator':
            replicationContainer.innerHTML += nodeCard
            replicatorCount++;
            break;
          case 'upcoming':
            upcomingContainer.innerHTML += nodeCard
            upcomingCount++;
            break;
          default:
            console.log('unknown node type', node)
        }
      })

      // Insert counts into the DOM
      currentCountEl.innerHTML = currentCount;
      contributingCountEl.innerHTML = contributingCount;
      replicationCountEl.innerHTML = replicatorCount;
      upcomingCountEl.innerHTML = upcomingCount;

    })
  }

  
  initialize = function() {
    // Detect if the page is the member node list page
    const classToFind = ".{{ $bn }}__categories";
    const isMemberNodeListPage = document.querySelector(classToFind);
    if(!isMemberNodeListPage) return;
    insertCards();
  };

  // Initialize the block
  try{
    initialize();
  } catch(e) {
    console.log('Error initializing {{ $bn }}', e);
  }

}( window.{{ $bnjs }} = window.{{ $bnjs }} || {} ));