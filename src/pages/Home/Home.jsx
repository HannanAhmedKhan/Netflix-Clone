import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/titlecards'
import Footer from '../../components/Footer/footer'



const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
      <div className= "hero_caption">
        <img src={hero_title} alt="" className='caption-img'/>
       <p>Dicovering his ties to a ancient order, a young man living in modren Istanbul
        embarks in a quest to save the city from immortal enemy.  </p>
     <div className='hero-btns' >
<button className='btn'><img src={play_icon} alt="" />Play</button>
<button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
     </div>
<TitleCards/>
      </div>
      </div>  
      <div className="more-cards">
  <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
  <TitleCards title={"Only on Netflix"} category={"popular"} />
  <TitleCards title={"Upcoming"} category={"upcoming"} />
  <TitleCards title={"Top Picks For You"} category={"now_playing"} />
</div>
      <Footer/>
    </div>
  )
}

export default Home
