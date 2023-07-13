import './style.css'
import TypeWriter from './TypeWriter'


const typrwriter = new TypeWriter(document.body, { loop: true });


typrwriter
  .typeString("Hello..")
  .pauseFor(1000)
  .typeString("\n\nfunction")
  .deleteChars(7)
  .typeString("const temp")
  .pauseFor(150)
  .deleteAll(10)
  .typeString("Why is this so hard ?")
  .pauseFor(1000)
  .typeString("\n\nDoes everyone struggle this much ?")
  .pauseFor(1000)
  .typeString("\n\nThere has to be an easier way!")
  .pauseFor(1000)
  .deleteAll(10)
  .start()