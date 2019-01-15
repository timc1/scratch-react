import { square } from '../../utils'

export default function Test() {
  const squared = square(3)
  const el = document.createElement('h1')
  el.innerText = squared
  return el
}
