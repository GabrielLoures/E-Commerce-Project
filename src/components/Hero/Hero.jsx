import React from 'react'

import css from './Hero.module.css'

import HeroImage from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

import { motion } from 'framer-motion'

const Hero = () => {

  const transition = {duration: 3, type: "spring"}

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

        {/* Círculo Azul */}
        <motion.div 
          initial={{bottom: "2rem"}}
          whileInView={{bottom: "0rem"}}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>

        {/* Hero Image */}
        <motion.img
          transition={transition}
          initial={{bottom: "-1rem"}}
          whileInView={{bottom: "0rem"}} 
          src={HeroImage} 
          alt="Imagem de uma mulher com chapéu"
          width={600}
        />

        {/* Cart Div Animating */}
        <motion.div
          transition={transition}
          initial={{right: "4%"}}
          whileInView={{right: "2%"}} 
          className={css.cart2}
        >

          <RiShoppingBagFill/>

          <div className={css.signup}>
            <span>Faça seu login</span>

            <div>
              <BsArrowRight/>
            </div>
          </div>

        </motion.div>

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
