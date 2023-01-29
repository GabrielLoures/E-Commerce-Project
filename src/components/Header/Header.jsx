import React from 'react'
import { useState } from 'react'
import css from './Header.module.css'

import Logo from '../../assets/logo.png'

import { CgShoppingBag } from 'react-icons/cg'
import { GoThreeBars } from 'react-icons/go'

const Header = () => {

  const [showMenu, setShowMenu] = useState(true)

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu)
  }

  return (
    <div className={css.container}>

      <div className={css.logo}>
        <img src={Logo} alt="Website logo" />
        <span>Amazon</span>
      </div>

      <div className={css.right}>

        <div className={css.sandwichMenu} onClick={toggleMenu}>
          <GoThreeBars />
        </div>

        {/* No style dizemos que, se o showMenu for true, o display será igual do elemento pai (flex no caso), se for falso o display será none */}
        
          <ul className={css.menu}  style={{display: showMenu ? 'inherit' : 'none'}}>
            <li>Coleções</li>
            <li>Marcas</li>
            <li>Lançamentos</li>
            <li>Promoções</li>
            <li>PT-BR</li>
          </ul>
        
        <input type="text" className={css.search} placeholder="Buscar"/>

        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  )
}

export default Header
