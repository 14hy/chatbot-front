import {html, render} from '../../node_modules/lit-html/lit-html.js'
import './chat-window-menu.js'

class ChatWindowHeader extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
		
		this.eventClickAlarm = this.onClickAlarm.bind(this)
		this.eventClickMenu = this.onClickMenu.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.submenu-search`).addEventListener(`click`, this.onClickSubmenuSearch, true)
		this.shadowRoot.querySelector(`.menu-button`).addEventListener(`click`, this.eventClickMenu, true)
		this.shadowRoot.querySelector(`.menu-alarm`).addEventListener(`click`, this.eventClickAlarm, true)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.submenu-search`).removeEventListener(`click`, this.onClickSubmenuSearch, true)
		this.shadowRoot.querySelector(`.menu-button`).removeEventListener(`click`, this.eventClickMenu, true)
		this.shadowRoot.querySelector(`.menu-alarm`).removeEventListener(`click`, this.eventClickAlarm, true)
	}

	onClickSubmenuPicture() {
		alert(i18next.t(`NO_IMPLEMENT`))
	}

	onClickSubmenuSearch() {
		alert(i18next.t(`NO_IMPLEMENT`))
	}

	onClickMenu() {
		const chatMenu = this.shadowRoot.querySelector(`chat-window-menu`)
		if(chatMenu.menuState === `hide`) {
			chatMenu.show()
		} else {
			chatMenu.hide()
		}
	}

	onClickAlarm() {
		this.toggleAlarmIcon()
	}

	toggleAlarmIcon() {
		const alarmButton = this.shadowRoot.querySelector(`.menu-alarm`)
		if(alarmButton.classList.contains(`on`)) {
			alarmButton.classList.remove(`on`)
			alarmButton.innerHTML = `
			<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M633.82 458.1l-90.62-70.05c.19-1.38.8-2.66.8-4.06.05-7.55-2.61-15.27-8.61-21.71-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-40.33 8.38-74.66 31.07-97.59 62.57L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.35 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.02-2.81-22.45zM157.23 251.54c-8.61 67.96-36.41 93.33-52.62 110.75-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h241.92L157.23 251.54zM320 512c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z"></path></svg>
			`
			return
		}
		alarmButton.classList.add(`on`)
		alarmButton.innerHTML = `
		<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
		`
	}

	render() {
		return html`
			${style}
			<main>
				<div class='bot-profile'>
					<span class='bot-profile-img'></span>
				</div>
				<div class='name-submenu'>
					<div class='name'>${i18next.t(`BOT_NAME`)}</div>
					<div class='submenu'>
						<button class='submenu-search'>
							<svg height='14' width='14' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
						</button>						
					</div>
				</div>
				<div class='menu'>
					<button class='menu-alarm on' title='${i18next.t(`MENU_ALARM_TITLE`)}'>
						<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
					</button>					
					<button class='menu-button' title='${i18next.t(`MENU_TITLE`)}'>
						<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
						<chat-window-menu></chat-window-menu>
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

	.bot-profile {
		position: relative;
		padding: 15px;
	}
	
	.bot-profile-img {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 25px;
		background-image: url('/src/images/hi-lion.png');
		background-repeat: no-repeat;
    	background-position: center;
    	background-size: contain;
	}

	.name-submenu {
		display:grid;
		grid-template-rows: 1fr 1fr;
	}

	.name {
		padding-top: 20px;
		font-size: 12px;
		font-weight: bold;
		color: #4A4C4E;
	}

	.submenu > button {
		vertical-align: middle;	
		padding-left: 2px;
		cursor: pointer;
		border: 0;
		background-color: transparent;
		padding: 10px;
	}

	.submenu > button:first-child {
		padding-left: 0;
	}

	.submenu-search svg {
		color: #65717C;
	}

	.submenu svg:hover, .menu svg:hover {
		color: black;
	}

	.menu {
		text-align: center;
	}

	.menu > * {
		vertical-align: middle;	
		cursor: pointer;		
		position:relative;
		top: 50%;
		transform: translateY(-50%);		
	}

	.menu-alarm:not(.on) {
		left: -4px;
	}

	.menu-alarm svg {
		color: #65717C;
	}

	.menu-alarm, .menu-button {
		vertical-align: middle;				
		position:relative;
		top: 50%;
		transform: translateY(-50%);
		z-index: 20;
		border: 0;
		background-color: transparent;
		padding: 0;
	}

	.menu-button > svg {
		color: #65717C;
		cursor: pointer;
	}

	chat-window-menu {
		display: none;			
		position: absolute;
		top: 24px;
		right: -10px;
	}
</style>
`

customElements.define(`chat-window-header`, ChatWindowHeader)
