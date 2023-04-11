class PortalStrange extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	static get styles() {
		return /* css */ `
    :host {}
    .portal {
      margin: auto;
      margin-top: 120px;
      width: 1px;
      height: 1px;
      border: 1px solid white;
      border-radius: 50%;
      box-shadow:
        0px 0px 80px 40px rgba(255, 208, 0, 0.767);
      animation: rotate 1s linear infinite;
    }
    .chispa {
      position: absolute;
      width: 1px;
      height: 100px;
      background: linear-gradient(orange, black);
      margin: auto;
      transform-origin: top left;
      animation: resize 1s ease-in-out infinite;
    }

    @keyframes rotate {
      to { transform: rotate(-360deg); }
    }

    @keyframes resize {
      0% { height: 50px; }
      50% { height: 100px; }
      100% { height: 50px; }
    }
    `
	}

	connectedCallback() {
		this.render()
	}

	addSparks(portal) {
		for (let i = 0; i < 360; i++) {
			let chispa = document.createElement('div')
			chispa.className = 'chispa'

			let chispaTranslation = Math.random() * (120 - 100) + 100
			chispa.style.transform =
				'rotate(' + i * 2 + 'deg) translate(' + chispaTranslation + 'px)'

			portal.appendChild(chispa)
		}
	}

	render() {
		this.shadowRoot.innerHTML = /* html */ `
      <style>${PortalStrange.styles}</style>
      <div class="portal" id="portal"></div>
    `
		const portal = this.shadowRoot.querySelector('#portal')
		this.addSparks(portal)
	}
}

customElements.define('portal-strange', PortalStrange)
