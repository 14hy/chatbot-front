import {html, render} from '../node_modules/lit-html/lit-html.js'
import './components/chat-window-header.js'
import './components/chat-window-body.js'
import './components/chat-window-footer.js'

class ChatWindow extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
	}

	connectedCallback() {
		this.scrollToLast()
	}

	scrollToLast() {
		const chatBody = this.shadowRoot.querySelector(`chat-window-body`)

		chatBody.scrollTop = chatBody.scrollHeight
	}

	render() {
		return html`
			${style}
			<main>
				<chat-window-header></chat-window-header>
				<chat-window-body></chat-window-body>
				<chat-window-footer></chat-window-footer>				
			</main>
		`
	}
}

const style = html`
<style scoped>
	main {
		position: absolute;		
		top: 0;
		left: 0;		
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 80px 1fr 100px;
	}

	chat-window-header {
		background-color: #A9BDCE;
	}

	chat-window-footer {
		background-color: white;		
	}

	chat-window-body {
		background-color: #B2C7D9;
		overflow: scroll;
	}
</style>
`

customElements.define(`chat-window`, ChatWindow)
