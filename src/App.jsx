import './App.css'
import { Course } from './Course'
import 'bulma/css/bulma.css'
import ev1 from '../img/1.png'
import ev2 from '../img/2.png'
import ev3 from '../img/3.png'
import ev4 from '../img/4.png'

function App() {

  return (
      <>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">
            Estate Agent
          </p>
        </div>
      </section>
     <div className="container">
      <div className="section">
      <div className="columns">
        <div className="column">
        <Course 
          image={ev1}
          title="Office For Sale"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia error ut adipisci labore eos fuga distinctio nihil quasi sequi eaque, natus beatae dolor neque dolore a harum numquam expedita"
        />
        </div>
        <div className="column">
        <Course 
          image={ev2}
          title="House For Sale"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia error ut adipisci labore eos fuga distinctio nihil quasi sequi eaque, natus beatae dolor neque dolore a harum numquam expedita"
        />        </div>
        <div className="column">
        <Course 
          image={ev3}
          title="Apartment For Sale"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia error ut adipisci labore eos fuga distinctio nihil quasi sequi eaque, natus beatae dolor neque dolore a harum numquam expedita"
        />        </div>
        <div className="column">
        <Course 
          image={ev4}
          title="Detached House For Sale"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia error ut adipisci labore eos fuga distinctio nihil quasi sequi eaque, natus beatae dolor neque dolore a harum numquam expedita"
        />        </div>
      </div>
      </div>
     </div>
      </>
  )
}

export default App
