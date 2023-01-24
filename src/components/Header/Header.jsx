import React from 'react'
import css from './Header.module.css'

import Logo from '../../assets/logo.png'

import { CgShoppingBag } from 'react-icons/cg'

const Header = () => {
  return (
    <div className={css.container}>

      <div className={css.logo}>
        <img src={Logo} alt="Website logo" />
        <span>Amazon</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Coleções</li>
            <li>Marcas</li>
            <li>Lançamentos</li>
            <li>Promoções</li>
            <li>PT-BR</li>
          </ul>
        </div>

        <input type="text" className={css.search} placeholder="Buscar"/>

        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  )
}

export default Header
