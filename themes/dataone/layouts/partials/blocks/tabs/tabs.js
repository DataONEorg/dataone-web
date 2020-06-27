{{- $site := . -}}
{{- $p := $site.Params.prefix -}}
{{- $bn := print $p "tabs" -}}

// modified from: https://codepen.io/ffoodd/pen/jONMKrq,
// originally from: https://github.com/nico3333fr/van11y-accessible-tab-panel-aria
const defaults = {
	tabs : {
		class  : '.tabs',
		role   : '',
	},
	list : {
		class  : '.tabs__tablist',
		role   : 'tablist',
	},
	item : {
		class  : '.tabs__tab',
		role   : 'presentation',
	},
	link : {
		class  : '.{{ $p }}button--tab',
		role   : 'tab',
	},
	panel : {
		class  : '.tabs__panel',
		role   : 'tabpanel',
	},
	annotation : {
		class  : '.tabs__annotation'
	}
};

const interactive = {
    nodes: [ 'TEXTAREA', 'SELECT', 'OPTION', 'INPUT' ],
    types: [ 'checkbox', 'radio', 'button', 'submit', 'image', 'file' ],
};

class Events {

	/**
	 * Trigger handler methods for events
   *
	 * @param {Object} event
	 */
	handleEvent( event ) {

		this[ `on${event.type}` ]( event );

	}

	/**
	 * Handle select events
	 *
	 * @param {Boolean} bind
	 */
	addEvents() {

		this.list.removeEventListener( 'click', this )
		this.list.addEventListener( 'keydown', this )
		this.list.addEventListener( 'click', this )
		this.list.addEventListener( 'keydown', this );

	}

	/**
	 * Check if we can handle click on non interactive element
   *
	 * @param {Object} event
   * @return {Boolean}
	 */
	canClick( event ) {

		const { nodeName, type } = event.target;

		if (
			interactive.nodes.includes( nodeName ) ||
			interactive.types.includes( type )
		) {
      return false;
		}

		return true;

	}

	/**
	 * Handle click event to select tab
   *
	 * @param {Object} event
	 */
	onclick( event ) {

		const link  = event.target.closest( this.options.link.class );
		const index = link && this.links.indexOf( link );

		if ( ! this.canClick( event ) ) {
			return;
		}

		if ( link && index > -1 ) {

			event.preventDefault();
			this.select( index );

		}

	}

	/**
	 * Handle keydown event to select tab
   *
	 * @param {Object} event
	 */
	onkeydown( event ) {

		const isVertical = this.orientation === 'vertical';
		const { keyCode, ctrlKey } = event;
		const prev = isVertical ? 38 : 37;
		const next = isVertical ? 40 : 39;
		let index;

		switch ( keyCode ) {
			// End.
			case 35:
				index = -1;
				break;
			// Home.
			case 36:
				index = 0;
				break;
			// Left (horizontal) or Up (vertical).
			case prev:
				index = this.index - 1;
				break;
			// Right (horizontal) or Down (vertical).
			case next:
				index = this.index + 1;
				break;
		}

		if ( index !== undefined ) {

			event.preventDefault();
			this.select( index );

		}
  }
}

class Markup extends Events {

	/**
	 * Query tabs nodes
	 */
	query() {

		const { tabs, list, item, link, panel, annotation } = this.options;

		this.list   = this.element.querySelector( list.class );
		this.items  = this.list && [ ...this.list.querySelectorAll( item.class ) ];
		this.links  = this.list && [ ...this.list.querySelectorAll( link.class ) ];
		this.panels = [ ...this.element.children ].filter( el => el.matches( panel.class ) );
		this.annotations = [ ...this.element.children ].filter( el => el.matches( annotation.class ) );

	}

	/**
	 * Set tabs attributes
	 */
	setTabs() {

		this.setAtts( this.list, 'list' );
		this.setAtts( this.element, 'tabs' );
    this.list.setAttribute( 'aria-orientation', this.orientation || 'horizontal' );
		this.items.forEach( el => this.setAtts( el, 'item' ) );
		this.links.forEach( ( el, i ) => this.setLink( el, i ) );
		this.panels.forEach( ( el, i ) => this.setPanel( el, i ) );
		this.annotations.forEach( ( el, i ) => this.setAnnotation( el, i ) );

	}

	/**
	 * Set link attributes
	 */
	setLink( el, i ) {

		const ref = el.getAttribute( 'href' ).replace( '#', '' );
		const selected = el.hasAttribute( 'data-selected' );

		el.setAttribute( 'aria-selected','false' );
		el.setAttribute( 'aria-controls', ref );
		el.setAttribute( 'tabindex', '-1' );
		el.setAttribute( 'id', `label_${ref}` );

		this.setIndex( el, i, ref );
		this.setAtts( el, 'link' );

	}

	/**
	 * Set index from link
	 */
	setIndex( el, i, ref ) {

		const selected = el.hasAttribute( 'data-selected' );

		if ( this.index === undefined && selected ) {
			this.index = i;
		}

		if ( ref === this.urlHash ) {
			this.index = i;
		}

	}

	/**
	 * Set panel attributes
	 */
	setPanel( el, i ) {

		el.setAttribute( 'aria-labelledby', `label_${el.id}` );
		el.setAttribute( 'aria-describedby', `anno_${el.id}` );
		el.setAttribute('aria-hidden', 'true');
		this.setHeader( el, i );
		this.setAtts( el, 'panel' );

	}
	
	/**
	 * Set annotation attributes
	 */
	setAnnotation( el, i ) {
		if(el){
			el.setAttribute( 'id', `anno_${ this.panels[i].id }` );
			el.setAttribute('aria-hidden', 'true');
		}
	}

	/**
	 * Set panel header
	 */
	setHeader( el, i ) {

		let header = this.hxExists && el.querySelector( this.hxExists );

		if ( this.hxLevel && ! header ) {

			header = document.createElement( this.hxLevel );
			header.setAttribute( 'tabindex', 0 );
			header.textContent = this.links[ i ].textContent;
			header.className = this.hxClass || 'invisible';

			el.insertBefore( header, el.firstChild );

		}

		header && header.setAttribute( 'tabindex', 0 );

	}

	/**
	 * update link attributes
	 */
	updateLink( el, selected ) {

		el.setAttribute( 'aria-selected', selected ? 'true' : 'false' );
		el.setAttribute( 'tabindex', selected ? '0' : '-1' );

	}

	/**
	 * update panel attributes
	 */
	updatePanel( el, selected ) {
		el.setAttribute( 'aria-hidden', selected ? 'false' : 'true' );
	}

	/**
	 * update annotation attributes
	 */
	updateAnnotation( el, selected ) {
		if(el){
			el.setAttribute( 'aria-hidden', selected ? 'false' : 'true' );
		}
	}

	/**
	 * set HTML attributes
	 */
	setAtts( el, type ) {

		const { role, suffix } = this.options[ type ];

		role && el.setAttribute( 'role', role );

	}
}

class Tabs extends Markup {

    /**
	 * Constructor
	 *
	 * @param {Object} element
	 * @param {Object} options
	 */
	constructor( element, options = {} ) {

		super();

		this.element  = element;
		this.options  = { ...defaults, ...options };
		this.urlHash  = window.location.hash.replace( '#', '' );

		// !! HTML initialization !!
		// Should be changed by one [data-a11ytabs-options] attr with JSON string (e.g.: {hxClass: 'name', hxLevel: 'h2',...} ).
		// It will be easier to maintain and to override JS default options.
		this.prefix      = element.getAttribute( 'data-tabs-prefix-class' ) || "tabs";
		this.hxLevel     = element.getAttribute( 'data-hx' );
		this.hxClass     = element.getAttribute( 'data-tabs-generated-hx-class' );
		this.hxExists    = element.getAttribute( 'data-existing-hx' );
    this.orientation = element.getAttribute( 'data-orientation' );

	}

	/**
	 * Initialize instance
	 */
	init() {

		this.query();

		if ( ! this.check() ) {
			return;
		}

		this.setTabs();
    this.hasAnchor();
		this.addEvents();
		this.toggle( this.index, true );

	}

	/**
	 * Make sure we can safely initialize
	 *
	 * @return {Boolean}
	 */
	check() {

		if ( ! this.list ) {
			return !! console.error( 'The HTML markup of the tablist is not valid.' );
		}

		if ( this.items.length !== this.panels.length ) {
			return !! console.error( 'The number of tabs do not correspond to the number of panels.' );
		}

		return true;

	}
  
  /**
	 * Check if hash anchor present in panel content
	 */
	hasAnchor() {

		const { panel } = this.options;
		const anchor = this.urlHash && this.element.querySelector( `${panel.class} #${this.urlHash}` );
		const index = anchor && this.panels.indexOf( anchor.closest( panel.class ) );

		if ( index > 0 ) {
      
			this.index = index;
			// We wait tabs to be repainted to focus on anchor.
			requestAnimationFrame( () => anchor.focus() );
      
		}

	}

	/**
	 * Select tab item and reveal tab panel
	 *
	 * @param {Integer} index Zero-based index
	 */
	select( index ) {

		index = this.modulo( this.items.length, index || 0 );

		if ( this.index === index ) {
			return;
		}

		this.toggle( this.index, false );
		this.toggle( index, true );
		this.focus( index );
		this.state( index );

		this.index = index;

	}

	/**
	 * Toggle tab link and panel attributes
	 *
	 * @param {Integer} index    Zero-based index
	 * @param {Boolean} selected State of tab and panel
	 */
	toggle( index = 0, selected ) {
		this.updatePanel( this.panels[ index ], selected );
		this.updateAnnotation( this.annotations[ index ], selected);
		this.updateLink( this.links[ index ], selected );

	}

	/**
	 * Focus link on select
	 *
	 * @param {Integer} index Zero-based index
	 */
	focus( index ) {

		this.links[ index ].focus();

	}

	/**
	 * Update url hash on tab selection
	 *
	 * @param {Integer} index Zero-based index
	 */
	state( index ) {

		const { pathname, search } = window.location;
		const controls = this.links[ index ].getAttribute( 'aria-controls' );

		controls && history.pushState && history.pushState( null, null, `${pathname+search}#${controls}` )

	}

	/**
	 * Modulo calculation
	 *
	 * @param {Integer} length
	 * @param {Integer} index
	 */
	modulo( length, index ) {

		return ( length + ( index % length ) ) % length;

	}
}

document.addEventListener( 'DOMContentLoaded', () => {

    const tabs = document.querySelectorAll( '.tabs' );
    tabs && tabs.forEach( el => new Tabs( el ).init() )

} );
