import React from 'react'
import Header from './Header/Header'
import './Hero.css'
import hero_image from "../assets/hero_image.png"
import heart from "../assets/heart.png"
import hero_image_back from "../assets/hero_image_back.png"
import Calories from "../assets/calories.png"
//for animation and motion 
import {motion} from "framer-motion"

// for number counting in dynamic way
import NumberCounter from "number-counter"


const Hero = () => {

  const transition = {type: 'spring', duration : 3}
  const mobile = window.innerWidth<=786 ? true : false;

  return (
    <div className="hero" id='home'>

      <div className="blur hero-blur"></div>

     <div className="left-h">
          <Header />

          {/* the best ad  */}
          <div className="the-best-ad">
            {/* Here we have done this fro transition */}
                <motion.div
                 initial = {{left: mobile? "155px": "238px"}}
                 whileInView={{left: '8px'}}
                 transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            {/* hero-text */}
            <div className="hero-text">

            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>

            <div>
              <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>

            </div>

            {/* figures */}
            <div className="figures">
              <div>
                <span>
                  {/* here we will use number in countig manner */}
                  <NumberCounter end={148} start={100} delay="4" preFix="+" />
                </span>
                <span>expert coches</span>
                </div>
              <div>
                <span>
                <NumberCounter end={920} start={800} delay="4" preFix="+" />
                </span>
                <span>members joined</span>
              </div>
              <div>
                <span>
                <NumberCounter end={50} start={20} delay="4" preFix="+" />
                </span>
                <span>fitness programs</span>
              </div>
            </div>

            {/* Hero-buttons */}
            <div className="hero-button">

              <button className="btn">Get Started</button>
              <button className="btn">Learn More</button>
            </div>

            
     </div>

        <div className="right-h">
          <button className="btn">Join Now</button>


          <motion.div
            initial={{right:"-1rem"}}
            whileInView={{right: "4rem"}}
            transition={transition}

            className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>

          </motion.div>

          {/* hero-images */}
          <img src={hero_image} alt="" className='hero-image'/>
          <motion.img 
           initial={{right:"11rem"}}
           whileInView={{right:"20rem"}}
           transition={transition}
           src={hero_image_back} alt="" className='hero-image-back'/>

          {/* calories */}
          <motion.div 
            initial = {{right: "37rem"}}
            whileInView={{right:"28rem"}}
            transition={transition}

            className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span><span>220 kcal</span>
            </div>
            
          </motion.div>

        
        </div>
    </div>
  )
}

export default Hero