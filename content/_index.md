---
layout: index
date: 2019-12-04T21:59:31.000+00:00
title: Data Observation Network for Earth
description: Data Observation Network for Earth (DataONE) is the foundation of new
  innovative environmental science through a distributed framework and sustainable
  cyberinfrastructure that meets the needs of science and society for open, persistent,
  robust, and secure access to well-described and easily discovered Earth observational
  data.
header:
  tagline: Making data more <br> discoverable, accessible, & usable
  images:
  - "/uploads/hero_images/owen-beard-1PLgow864Zk-unsplash-compressed.jpg"
  - "/uploads/hero_images/jordan-sanchez-GXV2uVv1DrE-unsplash.jpg"
  - "/uploads/hero_images/ursula-krapf-qIfVW72mAxk-unsplash.jpg"
  - "/uploads/hero_images/joe-pregadio-Vkqyz0hu9h0-unsplash.jpg"
  - "/uploads/hero_images/rick-l-tOZAiC3hZgM-unsplash.jpg"
  - "/uploads/hero_images/rural-explorer-oWS_3i0Y5sI-unsplash.jpg"
  - "/uploads/hero_images/sean-stratton-KzYeP16sQ6Q-unsplash.jpg"
  - "/uploads/hero_images/sven-scheuermeier-saGbrA6s8g0-unsplash.jpg"
  - "/uploads/hero_images/willian-justen-de-vasconcellos-_MMP5j_fCqw-unsplash.jpg"
  - "/uploads/hero_images/chuttersnap-UmncJq4KPcA-unsplash.jpg"
  show_logos: true
  logos_bar:
    template: logos-bar
    title: Our network of data repositories
    use_member_nodes: true
    button:
      template: button
      type: internal page
      color: quaternary
      text: Learn about our network
      internal_link: "/community/network.md"
      external_link: ''
      icon: ''
    logos: []
    use_member_repositories: false
    style: ''
page_sections:
- template: section-highlighted-links
  title: What Brings You to DataONE?
  items:
  - title: Find Data
    icon: search
    description: Search across our network to discover data
    button:
      label: Search the network
      url: https://search.dataone.org/data
  - title: Share your data
    icon: database
    description: Publish, preserve, and share your data with the network
    button:
      label: DataONE products
      url: https://www.dataone.org/services/
  - title: Join the Network
    icon: network
    description: Connect your data to the DataONE federation
    button:
      label: Learn about joining
      url: 
- template: section
  background: wave
  title: The latest updates from DataONE
  blocks:
  - template: tabs
    id: latest-updates
    tabs:
    - title: New Network Member
      annotation: Learn who just joined the DataONE Federation 
      icon: award
      content:
      - template: card
        href: https://seafloor.dataone.org/
        title: New Network Member 
        subtitle: "See what's new!"
        clickable: true
        pill:
          template: pill
          text: Seafloor Data Repository 
          style: primary
        description: Through close collaboration with our team, the Regional Wildlife Science Collaborative (RWSC), Northeast Regional Council (NROC), and the Mid-Atlantic Regional Council on the Ocean (MARCO), our team onboarded the Seafloor Data Repository into the DataONE network earlier in 2025. This addition increases the availability of seafloor datasets from U.S. Atlantic waters within DataONE, supporting the development of more regional scale seafloor habitat data products. This scale of collaboration highlights the value in shared infrastructure and reinforces our excitement for future partnerships to leverage DataONE's services to support repositories with diverse data types and broad scientific scope. For more information, explore the Seafloor Data Repository.
        image:
          template: image
          src: "/uploads/seafloor-background.png"
          alttext: SDR logo
          type: default
          overlay_effect: ''
        tags:
        - Biodiversity 
        - Seafloor Data
        - Collaboration 
        icon: ''
        colorClass: ''
        datetime:
          template: ''
          time: ''
          change_timezone: false
          localize: false
          format: ''
          style: ''
        button:
          template: ''
          type: ''
          color: ''
          text: ''
          external_link: ''
          internal_link: ''
          icon: ''
    - title: Community call
      annotation: Everyone is welcome to join the upcoming community call
      icon: users
      content:
      - template: page-summary
        type: community-call
        auto_select: true
        news: ''
        webinar: ''
        community_call: ''
        job: ''
    - title: Webinar series
      annotation: Join us for the DataONE webinar series
      icon: headphones
      content:
      - template: page-summary
        type: webinar
        auto_select: true
        news: ''
        webinar: ''
        community_call: ''
        job: ''
    - title: Hear it first
      annotation: Subscribe to our mailing list to get the updates directly in your
        inbox
      icon: mail
      content:
      - template: join-form
        precheck_mailing_list: true
        style: card
        mailing_list_only: true
        precheck_hostedrepo: false
        precheck_plus: false
    position: ''
  type: ''
  background_image: ''
  background2: ''
  icon: ''
  small_title: ''
  intro: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon: ''
  id: ''   
- template: section
  background: data-wave-subtle
  blocks:
  - template: section-products-services
    title: "Understanding Our Products and Services"
    free_items:
    - title: Data Portals
      description: A subcollection of datasets your community can customize.
    - title: FAIR Metadata Assessments
      description: Reports analyzing your repository to a science-based scale.
    - title: Metadata Harvesting
      description: We can help harvest, index, and audit your data.
    pro_items:
    - title: Hosted Repository
      description: A dedicated repository solution for your group or institution's data, managed by DataONE infrastructure.
      button:
        label: Learn more about a hosted repository
        url: /hosted-repo/
    - title: Consulting
      description: Receive expert advice on your data curation, management, and more.
    - title: Open Source Tools
      description: Use R, Python, MetaCat, JavaScript, and Java to interact with DataONE.
    button:
      label: See pricing and features
      url: /services/
- template: section
  type: card
  background: data-wave-subtle
  icon: star
  small_title: 
  title: "**Understanding Products & Services from DataONE**"
  blocks:
  - template: columns
    num_cols: 2
    columns:
    - template: feature-detailed
      type: top
      headline: DataONE Plus
      text: Enhanced DataONE products and services in support of your research.
      image:
        src: "/uploads/portals-summary.png"
        template: ''
        alttext: ''
        type: ''
        overlay_effect: ''
      details: []
      button:
        type: internal page
        color: primary
        text: Learn more about DataONE Plus
        internal_link: services/plus.md
        icon: d1-plus-logo
        template: ''
        external_link: ''
      related_page: ''
    - template: feature-detailed
      type: top
      headline: Hosted Repositories
      text: A dedicated repository solution for your group or institution’s data,
        managed by DataONE.
      image:
        src: "/uploads/hosted-repo-summary.png"
        template: ''
        alttext: ''
        type: ''
        overlay_effect: ''
      button:
        type: internal page
        color: primary
        text: Discover DataONE Hosted Repositories
        internal_link: services/hosted-repo.md
        icon: database
        template: ''
        external_link: ''
      related_page: ''
      details: []
    alignment: ''
    layout: ''
  - template: button
    type: internal page
    color: quaternary
    text: See all features
    internal_link: services/_index.md
    external_link: ''
    icon: ''
  background_image: ''
  background2: ''
  intro: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon: ''
  id: ''
- template: section
  type: default
  background: default
  title: About DataONE
  blocks:
  - template: feature-detailed
    headline: The dataone federation
    text: Founded in 2009, DataONE  is a community driven project providing access
      to data across multiple member repositories, supporting enhanced search and
      discovery of Earth and environmental data.
    type: left
    image:
      src: "/uploads/AHM_2019_GroupPhoto.jpg"
      type: tilt-right
      alt: Photo of DataONE Meeting
      template: ''
      alttext: ''
      overlay_effect: ''
    button:
      template: button
      type: internal page
      color: quaternary
      text: Learn more about DataONE
      internal_link: about/about.md
      external_link: ''
      icon: ''
    details: []
    related_page: ''
  - template: feature-detailed
    headline: Donate
    text: Help DataONE provide and maintain a distributed framework and sustainable
      infrastructure that meets the needs of science and society for open, persistent,
      robust, and secure access to well-described and easily discovered Earth observational
      data.
    type: top
    button:
      template: button
      type: donate
      color: quaternary
      text: Make a donation
      external_link: ''
      internal_link: ''
      icon: ''
    related_page: ''
    image:
      template: ''
      src: ''
      alttext: ''
      type: ''
      overlay_effect: ''
    details: []
  background_image: ''
  background2: ''
  icon: ''
  small_title: ''
  intro: ''
  button:
    template: ''
    type: ''
    color: ''
    text: ''
    external_link: ''
    internal_link: ''
    icon: ''
  id: ''

---
