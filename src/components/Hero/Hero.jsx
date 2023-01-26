import React from 'react'

import css from './Hero.module.css'

import HeroImage from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className={css.container}>

      {/* Lado esquerdo */}
      <div className={css.h_sides}>

        <span className={css.text1}>Creme de proteção facial</span>

        <div className={css.text2}>
          <span>Coleções do Momento</span>
          <span>Experimente vivenciar a vida de forma mais leve e confortável</span>
        </div>

      </div>

      {/* Imagem do Meio (círculo azul com imagem sobreposta junto ao carrinho de compras e o link de cadastro) */}
      <div className={css.wrapper}>

        <div className={css.blueCircle}></div>
        <img src={HeroImage} alt="Imagem de uma mulher com chapéu" width={600}/>

        <div className={css.cart2}>
          <RiShoppingBagFill/>

          <div className={css.signup}>
            <span>Faça seu login</span>

            <div>
              <BsArrowRight/>
            </div>
          </div>

        </div>

      </div>

      {/* Lado direito */}
      <div className={css.h_sides}>

        <div className={css.traffic}>
          <span>1.5 Milhões</span>
          <span>Acessos no mês</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <span>Clientes felizes!</span>
        </div>

      </div>

    </div>
  )
}

export default Hero
