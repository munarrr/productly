import React from 'react'
import './style.scss'
import {Btns} from '../../../btns/index'
import img from '../../../img/hero.png'

const Hero = () => {
     return (
          <div className="hero__wrapper flex">
               <div className="hero__left">
                    <h1 className="hero__title">
                    The Design Thinking superpowers
                    </h1>
                    <p className="hero__description">
                    Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.

                    </p>
                    <Btns />
                     <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8516 8.5302C16.591 8.96518 16.591 10.0346 15.8516 10.4696L2.1954 18.5026C1.44543 18.9437 0.5 18.403 0.5 17.5329V1.46685C0.5 0.596754 1.44543 0.056016 2.1954 0.497171L15.8516 8.5302Z" fill="#FF9900"/>
                    </svg>
                    Watch the Video

               </div>
               <div className="hero__right">
                   <img className="hero__img" src={img}></img>
               </div>
          </div>
     )
}

export default Hero;

