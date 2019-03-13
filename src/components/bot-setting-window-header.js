import {html, render} from '../../node_modules/lit-html/lit-html.js'
import './bot-setting-menu.js'

class BotSettingHeader extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.eventClickMenu = this.onClickMenu.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.menu-button`).addEventListener(`click`, this.eventClickMenu, true)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.menu-button`).removeEventListener(`click`, this.eventClickMenu, true)
	}

	onClickMenu() {
		const botSettingMenu = this.shadowRoot.querySelector(`bot-setting-menu`)
		if(botSettingMenu.menuState === `hide`) {
			botSettingMenu.show()
		} else {
			botSettingMenu.hide()
		}
	}

	render() {
		return html`
			${style}
			<main>
				<div class='setting-img-wrap'>
					<span class='setting-img'></span>
				</div>
				<div class='title-wrap'>
					<div class='title'>${i18next.t(`BOT_SETTING_TITLE`)}</div>
				</div>
				<div class='menu'>		
					<button class='menu-button' title='메뉴'>
						<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
						<bot-setting-menu></bot-setting-menu>
					</button>
				</div>
			</main>
		`
	}
}

const style = html`
<style scoped>
	* {
		user-select: none;
	}

	main {
		width: 100%;
		height: 100%;
		box-sizing: border-box;		
		display: grid;
		grid-template-columns: 80px 1fr 100px;
		grid-template-rows: 1fr;
	}

	.setting-img-wrap {
		position: relative;
		padding: 15px;	
	}
	
	.setting-img {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 25px;
		background-image: url('/hanyang-chatbot/src/images/bot-setting.svg');
		background-repeat: no-repeat;
    	background-position: center;
    	background-size: contain;
	}

	.title-wrap {
		display:grid;
		grid-template-rows: 1fr 1fr;
	}

	.title {
		padding-top: 20px;
		font-size: 12px;
		font-weight: bold;
		color: #4A4C4E;
	}

	.menu svg:hover {
		color: black;
	}

	.menu {
		text-align: right;
    	padding-right: 15px;
	}

	.menu > svg {
		vertical-align: middle;	
		cursor: pointer;		
		position:relative;
		top: 50%;
		transform: translateY(-50%);
		color: #65717C;
	}	

	.menu-button {
		vertical-align: middle;
		position:relative;
		top: 50%;
		transform: translateY(-50%);
		z-index: 20;
		padding: 0;
		border: 0;
		background-color: transparent;
	}

	.menu-button svg {
		color: #65717C;
		cursor: pointer;
	}

	bot-setting-menu {
		display: none;			
		position: absolute;
		top: 24px;
		right: -10px;
	}
</style>
`

customElements.define(`bot-setting-header`, BotSettingHeader)
