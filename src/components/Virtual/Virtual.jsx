import React from 'react'
import ReactCompareImage from 'react-compare-image'

import css from './Virtual.module.css'
import Shade from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'


const Virtual = () => {
  return (
    <div>
      <div className={css.Virtual}>

        <div className={css.left}>
          <span>Teste Virtual</span>
          <span>Nunca compre a máscara errada de novo!</span>
          <span>Teste agora!</span>
          <img src={Shade} alt="Imagem de um pintado azul" />
        </div>

        <div className={css.right}>

          <ReactCompareImage leftImage={Before} rightImage={After} />
          
        </div>

      </div>
    </div>
  )
}

export default Virtual
