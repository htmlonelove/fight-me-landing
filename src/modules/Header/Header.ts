const headerNode = document.querySelector('.header')

const langNode = headerNode?.querySelector('[data-header="lang"]')
const langToggleNode = langNode?.querySelector('[data-header="lang-toggle"]')
const langDropDownNode = langNode?.querySelector(
  '[data-header="lang-dropdown"]'
)

const handleLangDropDownToggle = () => {
  if (langDropDownNode) {
    langDropDownNode.classList.toggle('is-active')
    const isActive = langDropDownNode.classList.contains('is-active')

    if (isActive) {
      window.addEventListener('click', handleLangOutsideClickClick)
    } else {
      window.removeEventListener('click', handleLangOutsideClickClick)
    }
  }
}

const handleLangOutsideClickClick = (evt) => {
  const isNotLangNode = !evt.target.closest('[data-header="lang"]')
  if (isNotLangNode) {
    handleLangDropDownToggle()
  }
}

const addListeners = () => {
  langToggleNode?.addEventListener('click', handleLangDropDownToggle)
}

export const initHeader = () => {
  addListeners()
}
