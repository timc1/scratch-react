import './shared/style.scss'

function component() {
  let el = document.createElement('button')
  el.innerText = 'click to lazy load'
  el.addEventListener('click', e => {
    import(/* webpackChunkName: 'printme' */ './components/some-component/index').then(
      mod => {
        const printMe = mod.default

        printMe().then(element => {
          document.body.appendChild(element)
        })
      }
    )
  })

  return el
}

if (process.env.NODE_ENV !== 'production') {
  let element = component()
  console.log(element)
  document.body.appendChild(element)

  if (module.hot) {
    module.hot.accept('./components/some-component/index', function() {
      console.log('Accepting the updated printMe module!')
      document.body.removeChild(element)
      element = component()
      document.body.appendChild(element)
    })
  }
}
