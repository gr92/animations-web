class EffectWave extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	static get styles() {
		return /* css */ `
    :host {}
    .container {
      background-color: #181818;
      border-radius: 1rem;
      padding: 5px 1rem;
    }
    h2 {
      display: inline-block;
      font-size: 6rem;
      position: relative;
      margin: 0;
      color: black;
      text-shadow:
        -1px -1px 0 white,
        1px -1px 0 white,
        -1px 1px 0 white,
        1px 1px 0 white;
    }
    .wave {
      position: absolute;
      left: 0;
      top: 0;
      color: #09f;
      text-shadow: none;
      animation: wave 3s ease-in-out infinite;
    }

    @keyframes wave {
      0%, 100% {
        clip-path: polygon(
          0% 47%, 10% 48%, 33% 54%, 54% 60%,70% 61%,
          84% 59%, 100% 52%, 100% 100%, 0% 100%
        )
      }

      50% {
        clip-path: polygon(
          0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%,
          84% 45%, 100% 46%, 100% 100%, 0% 100%
        )
      }
    }
    `
	}

	connectedCallback() {
		this.render()
	}

	render() {
		this.shadowRoot.innerHTML = /* html */ `
      <style>${EffectWave.styles}</style>
      <div class="container">
        <h2>
          Wave
          <span class="wave">Wave</span>
        </h2>
      </div>
    `
	}
}

customElements.define('effect-wave', EffectWave)
