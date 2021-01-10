import React from 'react'
import logo from '../../img/Logo.svg'
import{ Btns,Btn} from '../../btns'
import './style.scss'

const Header = () => {
     return (
          <div className="container">
               <div className="wrapper flex">
                    <div className="logo">
                         <img className="header__logo" src={logo}></img>
                    </div>
                    <div className="header__nav">
                         <div className="header__navigation">
                         <ul className="header__item">
                              <li className="header__list">
                                   <a className="header__link">Product</a>
                              </li>
                              <li className="header__list">
                                    <a className="header__link"> Customers</a>
                               </li>
                               <li className="header__list">
                                    <a className="header__link">Pricng</a>
                               </li>
                               <li className="header__list">
                                    <a className="header__link">Resources</a>
                               </li>
                               </ul>
                               </div>
                               <Btn />
                               <Btns />  
               
                    </div>
               </div>
          </div>
     )
}

export default Header;

