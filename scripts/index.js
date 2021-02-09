const $buttonClass = '.footer__newsletter__input__button'
const $input = document.querySelector('.footer__newsletter__input__text')
const $warnMessage = document.querySelector('.warn-message')
const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

document.addEventListener('click', e => {
	if (e.target.matches($buttonClass)) {
		if (!$input.value.match(mailFormat)) {
			$input.classList.add('active')
			$warnMessage.classList.add('active')
		} else {
			$input.classList.remove('active')
			$warnMessage.classList.remove('active')
		}
	}
})
