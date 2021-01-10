import React from 'react'
import {Btns} from '../../btns'
import './style.scss'

const Reviews = () => {
     const reviews =[
          {
          id:1,
          img:'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
          p: 'I can take care of your pitch'
     },
     {
          id:2,
          img:'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
          p: 'I can take care of your pitch'
     },
     {
          id:3,
          img:'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
          p: 'I can take care of your pitch'
     },
     {
          id:4,
          img:'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
          p: 'I can take care of your pitch'
     },
     {
          id:5,
          img:'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
          p: 'I can take care of your pitch'
     }
]
     return (
          <div className="reviews">
               <div className="reviews__wrapper">
                    <h2 className="reviews__title">Need a super hero?</h2>
                    <p classname="reviews__description">Do you require some help for your project: Conception workshop,
                    prototyping, marketing strategy, landing page, Ux/UI?</p>
                    <Btns />
               </div>
               {reviews.map((item,index) => {
                    return(
                         <div className="reviews__absolut">
                         <img src={item.img} className="reviews__logo" />
                         <p className="reviews__descriptio">{item.p}</p>
                         </div>
                    )
               })}
          </div>
     )
}

export default Reviews

