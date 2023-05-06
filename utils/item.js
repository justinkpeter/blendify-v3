import { gsap } from 'gsap';

/**
 * Class representing a Grid Item
 */
 export class Item {
    // DOM elements
	DOM = {
		// main element (.gallery__item)
		el: null,
        // image element (.gallery__item-img)
        image: null,
        // image inner element (gallery__item-imginner)
        imageInner: null,
        // item link (.item__view-more)
        link: null,
        // item meta (.item__meta)
        meta: null,
        // item link (.gallery__item-title)
        title: null,
        // item link (.gallery__item-number)
        desc: null,
	}
    
    /**
	 * Constructor.
	 * @param {Element} DOM_el - main element (.gallery__item)
     * @param {Preview} previewEl - the Preview element
	 */
	constructor(DOM_el, previewEl) {
		this.DOM.el = DOM_el;
        this.preview = previewEl;
        this.DOM.image = this.DOM.el.querySelector('.gallery__item-img');
        this.DOM.imageInner = this.DOM.el.querySelector('.gallery__item-imginner');
        this.DOM.link = this.DOM.image;
        this.DOM.meta = this.DOM.el.querySelector('.item__meta');
        this.DOM.title = this.DOM.el.querySelector('.gallery__item-title');
        this.DOM.desc = this.DOM.el.querySelector('.gallery__item-number');

        this.DOM.link.addEventListener('mouseenter', () => {
            gsap.killTweensOf(this.DOM.imageInner);
            gsap.to(this.DOM.imageInner, {
                duration: 2,
                ease: 'power4',
                scale: 1.2
            });
        });
        this.DOM.link.addEventListener('mouseleave', () => {
            gsap.killTweensOf(this.DOM.imageInner);
            gsap.to(this.DOM.imageInner, {
                duration: 0.7,
                ease: 'expo',
                scale: 1
            });
        });
	}
}