import test from './test'

export default function printMe() {
  return import(/* webpackChunkName: "testingabc" */ './test')
    .then(({ default: test }) => {
      const el = document.createElement('div')
      const moreEl = test()

      el.appendChild(moreEl)
      return el
    })
    .catch(error => 'An error occurred while loading the component')
}
