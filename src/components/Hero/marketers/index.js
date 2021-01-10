import React from 'react'
import img4 from '../../../img/hero4.png'

const Marceters = () => {
     return (
          <div className="hero__wrapper flex">
               <div className="hero__left">
                    <h1 className="hero__title">
                    The Design Thinking superpowers
                    </h1>
                    <p className="hero__description">
                    Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.

                    </p>                                   
               </div>
               <div className="hero__right">
                   <img className="hero__img" src={img4}></img>
               </div>
          </div>
     )
}

export default Marceters;


