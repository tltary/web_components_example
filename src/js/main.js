'use strict';
import {logoSelect} from "./svg";

class PBMenu extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.children,
  		attr    = this.dataset.class,
  		color   = this.dataset.color,
  		menu    = '<div class="menu__flex"><ul class="menu__content">';
  	for (let item of content) {
  		menu += `<li class="menu__item"><a `;
  		if (item.dataset.url != undefined) {
  			menu += `href="${item.dataset.url}"`;
  		};
  		menu += ` >${item.textContent}</a></li>`;
	}
	menu += '</ul></div>';
  	render  +=  `<section class="${attr}">
  					<div class="container">
      					<div class="row">
        					<div class="col-lg-3 col-5">${logoSelect("header")}</div>
        					<div class="col-lg-9 col-7">${menu}</div>
      					</div>
    		   		</div>
    		   	</section>`;
    this.outerHTML = render;
  }
}

class PBFooter extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.children,
  		attr    = this.dataset.class,
  		color   = this.dataset.color,
  		menu    = '<div class="footer__flex"><ul class="footer__content">';
  	for (let item of content) {
  		menu += `<li class="footer__item"><a `;
  		if (item.dataset.url != undefined) {
        menu += `href="${item.dataset.url}"`;
  		};
      menu += ` >${item.textContent}</a></li>`;
	}
	menu += '</ul></div>';
    render  +=  `<section class="${attr}">
            <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-5">${logoSelect("menu")}</div>
                  <div class="col-lg-9 col-7">${menu}</div>
                </div>
              </div>
            </section>`;
    this.outerHTML = render;
  }
}

class PBTitle extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.textContent;
  		render = `<h1 class="title">${content}</h1>`
    this.outerHTML = render;
  }
}

class PBText extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.textContent;
  		render = `<p class="text">${content}</p>`
    this.outerHTML = render;
  }
}

class PBAnnotation extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.textContent;
  		render = `<p class="annotation">${content}</p>`
    this.outerHTML = render;
  }
}

class PBImg extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.textContent,
  		data    = this.dataset.url,
  		width   = '100%',
  		height  = '100%';
  		if (data != undefined) {
  			render = `<img class="img" src="${data}">`;
  		} else {
  			if (this.dataset.height != undefined) {
  				height = this.dataset.height;
  			}
  			render = `<img class="img img--empty" height="${height}">`;
  		}
    this.outerHTML = render;
  }
}

class PBLabel extends HTMLElement {
  connectedCallback() {
    let render = '',
        content = this.textContent;
    render +=   `<label>${content}</label>`;
    this.outerHTML = render;
  }
}

class PBInput extends HTMLElement {
  connectedCallback() {
    let render = '',
        type    = this.dataset.type;
    render +=   `<input type="${type}" placeholder="${type}">`;
    this.outerHTML = render;
  }
}

class PBButton extends HTMLElement {
  connectedCallback() {
    let render = '',
        content = this.textContent,
        type    = this.dataset.type,
        cls     = '';
        cls += 'btn';
        if (!type == false && type != undefined && type != "" && type != null) {
          cls += ' ' + type;
        }
    render +=   `<button class="${cls}">${content}</button>`;
    this.outerHTML = render;
  }
}

class PBCard extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.textContent,
  		img     = "<img class='card__img img img--empty' height='200'>",
  		title   = '<p class="card__title">lorem ipsum</p>',
  		text    = '<p class="card__text">dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet</p>';
  		if (!this.dataset.title == false && this.dataset.title != undefined && this.dataset.title != "" && this.dataset.title != null) {
  			title = `<p class="card__title">${this.dataset.title}</p>`;
  		}
  		if (!this.dataset.text == false && this.dataset.text != undefined && this.dataset.text != "" && this.dataset.text != null) {
  			text = `<p class="card__text">${this.dataset.text}</p>`;
  		}
  		if (!this.dataset.img == false && this.dataset.img != undefined && this.dataset.img != "" && this.dataset.img != null) {
  			img = `<img class="card__img img" src="${this.dataset.img}" height="200">`;
  		}

  		render +=   `<div class="card">
						${img}
						<div class="card__content">
							${title}
							${text}
						</div>
					</div>`;
    this.outerHTML = render;
  }
}

class PBFormBlock extends HTMLElement {
  connectedCallback() {
    let render = '',
      content = this.innerHTML;
      render = `<div class="form__block">${content}</div>`
    this.outerHTML = render;
  }
}

class PBCol extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.innerHTML,
  		col     = this.dataset.col;
  		render = `<div class="col-lg-${col}">${content}</div>`
    this.outerHTML = render;
  }
}

class PBRow extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.innerHTML;
  		render = `<div class="row">${content}</div>`
    this.outerHTML = render;
  }
}

class PBSection extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.innerHTML;
  		render = `<section class="section"><div class="container">${content}</div></section>`;
    this.outerHTML = render;
  }
}

class PBSectionRow extends HTMLElement {
  connectedCallback() {
  	let render = '',
  		content = this.innerHTML;
  		render = `<section class="section"><div class="container"><div class="row">${content}</div></div></section>`;
    this.outerHTML = render;
  }
}

customElements.define('pb-menu', PBMenu);
customElements.define('pb-footer', PBFooter);
customElements.define('pb-title', PBTitle);
customElements.define('pb-text', PBText);
customElements.define('pb-form-block', PBFormBlock);
customElements.define('pb-label', PBLabel);
customElements.define('pb-input', PBInput);
customElements.define('pb-button', PBButton);
customElements.define('pb-annotation', PBAnnotation);
customElements.define('pb-img', PBImg);
customElements.define('pb-card', PBCard);
customElements.define('pb-col', PBCol);
customElements.define('pb-row', PBRow);
customElements.define('pb-section', PBSection);
customElements.define('pb-section-row', PBSectionRow);