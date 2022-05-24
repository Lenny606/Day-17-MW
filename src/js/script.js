import { ProgressBar } from './ProgressBar';

document.addEventListener('DOMContentLoaded', () => {
  // @TODO no.1 create new instance of ProgressBar and append it body element.
  //    you shouldn't pass the whole progress bar to appendChild method, but only specific property
  //    explore class ProgressBar and find out which property it is.
      const target = document.querySelector("body")
      
      const bar = new ProgressBar(5,5,20)
      target.appendChild(bar.element)
      
      const bar2 = new ProgressBar(10,25,100)
      target.appendChild(bar2.element)

      const bar3 = new ProgressBar(1,1,1)
      target.appendChild(bar3.element)
     
      

  // @TODO no.2 fix missing icon on plus button
});
