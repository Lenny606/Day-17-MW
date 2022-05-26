import { ProgressBar } from './ProgressBar';
const target = document.querySelector("body")
const bars = []
const globalObject = {
  red: 5,
  blue:10,
  green: 25
}
document.addEventListener('DOMContentLoaded', () => {
  // @TODO no.1 create new instance of ProgressBar and append it body element.
  //    you shouldn't pass the whole progress bar to appendChild method, but only specific property
  //    explore class ProgressBar and find out which property it is.


  bars.push(new ProgressBar(5, 10, 255, "red"))
  target.appendChild(bars[bars.length - 1].element)


  bars.push(new ProgressBar(10, 10, 255, "green"))
  target.appendChild((bars[bars.length - 1].element))

  bars.push(new ProgressBar(5,20,255, "blue"))
  target.appendChild((bars[bars.length-1].element))
  // const bar3 = new ProgressBar(1, 10, 255, "blue")
  // target.appendChild(bar3.element)



  // @TODO no.2 fix missing icon on plus button
});

const btn = document.createElement("button")
btn.textContent = "CLICK ON ME TO CHANGE MY BACKGROUND"
btn.addEventListener('click', () => {
  console.log(bars[0].value, bars[1].value, bars[2].value)
  btn.style.backgroundColor = `rgb(${bars[0].value},${bars[1].value},${bars[2].value})`
})
target.appendChild(btn)


