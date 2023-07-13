import './style.css'
import TypeWriter from './TypeWriter'


const typrwriter = new TypeWriter(
  document.querySelector(".whitespace") as HTMLDivElement,
  {
    loop: true, typingSpeed: 100,
    deletingSpeed: 100
  }
);

typrwriter
  .typeString("Hello..👋")
  .pauseFor(1000)
  .typeString("\n\nIam Osama 🥷")
  .pauseFor(1000)
  .deleteChars(13)
  .typeString("\n\nHow are you..?")
  .pauseFor(150)
  .deleteAll(50)
  .typeString("I hope you are doing well 😍")
  .pauseFor(1000)
  .typeString("\n\nThis is just a typing animation..💁‍♂️")
  .pauseFor(1000)
  .typeString("\n\nsee you 👋")
  .pauseFor(1000)
  .deleteAll(10)
  .start()
  