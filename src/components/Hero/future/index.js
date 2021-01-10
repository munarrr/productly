import React from 'react'
import {Btns} from '../../../btns'

const Future = () => {
     const svg = [{
          id:1,
          img:<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="50" rx="19" fill="#7752BE"/>
          </svg>,
          title:'First click tests',
          description:'While most people enjoy casino gambling,'
          
     },
     {
          id:2,
          img:<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="50" rx="19" fill="#7752BE"/>
          </svg>,
          title:'First click tests',
          description:'While most people enjoy casino gambling,'
     },
     {
          id:3,
          img:<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="50" rx="19" fill="#7752BE"/>
          </svg>,
          title:'First click tests',
          description:'While most people enjoy casino gambling,'
     },
     {
          id:4,
          img:<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="50" rx="19" fill="#7752BE"/>
          </svg>,
          title:'First click tests',
          description:'While most people enjoy casino gambling,'
     }  

]
     return (
          <div className="future">
               <div className="future__wrapper">
               <h1 className="future__title">We design tools to unveil your superpowers</h1>
               <div className="future__svg flex">
                    {svg.map((item,index) => {
                         return(
                              <nav className="flex">
                              <ul className="flex">
                                   <li className="future__list">{item.img}
                                   <h3>{item.title}</h3>
                                   <p>{item.description}</p>
                                   </li>
                              </ul>
                              </nav>
                         )
                    })}
               </div>
               <Btns />
               </div>
          </div>
     )
}

export default Future

