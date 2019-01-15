import './shared/style.scss'

function component() {
  let main = document.getElementsByTagName('main')[0]

  const el = document.createElement('h1')
  el.innerHTML = 'hi'
  main.appendChild(el)
}

component()
