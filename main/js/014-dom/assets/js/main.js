function changeMode() {
  changeClasses()
  changeText()
}

function changeClasses() {
  button.classList.toggle(darkModeClass)
  body.classList.toggle  (darkModeClass)
  footer.classList.toggle(darkModeClass)
  title.classList.toggle (darkModeClass)
}

function changeText() {
  const lightMode = 'Light mode'
  const darkMode = 'Dark mode'

  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode
    title.innerHTML = darkMode + ' ON'
    return
  }

  button.innerHTML = darkMode;
	title.innerHTML = lightMode + ' ON';

}

const darkModeClass = 'dark-mode'
const body   = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const title  = document.getElementById('page-title')
const button = document.getElementById('mode-selector')

button.addEventListener('click', changeMode)
