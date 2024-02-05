import './App.css'
import iluHero from '/src/images/illustration-hero.svg'
import notesImg from '/src/images/icon-music.svg'

function App() {
  const data = {
    title: 'Order Summary',
    description: 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!',
  }

  return (
    <main>
      <img src={iluHero} alt="hero"className='hero-image' />
      <section className="order">
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="plan-wrap">
        <div className="anual-wrap">
          <div className="logo">
          <img src={notesImg} alt="logo" className='logo-icon'/>
        </div>
        <div className="plan">
          <p className="anual">Annual Plan</p>
          <p className="price">
            $59.99/year
          </p>
        </div> 
        </div>
       
        <div className="change">
          <a href="http://" target="_blank" rel="noopener noreferrer">Change</a>
        </div>
      </div>

      <button>Proceed to Payment</button>

      <a className='btn-secondary'>Cancel Order</a>
      </section>
    </main>
  )
}

export default App
