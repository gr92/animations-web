class ButtonNight extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	static get styles() {
		return /* css */ `
    :host {}
    .container {
      padding: 1rem;
      border-radius: 1rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) inset;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
       background-color: black;
       cursor: pointer;
       border: none;
       padding: 16px 32px;
       color: white;
       font-size: 24px;
       font-weight: bold;
       position: relative;
       border-radius: 12px;
    }
    button:before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       z-index: -1;
       width: 100%;
       height: 100%;
       background: linear-gradient(45deg, red, blue, deeppink, blue, red, blue, deeppink, blue);
       background-size: 800%;
       border-radius: 10px;
       filter: blur(8px);
       animation: glowing 20s linear infinite;
    }
    @keyframes glowing {
       0% { background-position: 0% 0; }
       20% { border-radius: 2px; }
       50% { background-position: 400% 0; }
       100% { background-position: 0 0; }
    }
    `
	}

	connectedCallback() {
		this.render()
	}

	render() {
		this.shadowRoot.innerHTML = /* html */ `
      <style>${ButtonNight.styles}</style>
      <div class="container">
        <button>button night</button>
      </div>
    `
	}
}

customElements.define('button-night', ButtonNight)
