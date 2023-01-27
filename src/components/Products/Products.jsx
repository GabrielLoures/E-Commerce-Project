import React from 'react'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import css from './Products.module.css'

import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'

const Products = () => {

  const [parent] = useAutoAnimate()
  const [MenuProducts, SetMenuProducts] = useState(ProductsData)

  const filterProduct = (type) => {
    SetMenuProducts(ProductsData.filter((product) => product.type === type))
  }

  return (
    <div className={css.container}>

      <img src={Plane} alt="Aviãozinho de papel voando" />
      <h1>Nosso Principais Produtos</h1>

      <div className={css.products}>

        <ul className={css.menu}>
          <li onClick={() => SetMenuProducts(ProductsData)}>Todos</li>
          <li onClick={() => filterProduct("skin care")}>Skin Care</li>
          <li onClick={() => filterProduct("conditioner")}>Condicionadores</li>
          <li onClick={() => filterProduct("foundation")}>Maquiagem</li>
        </ul>

        <div className={css.list} ref={parent}>
          {
            MenuProducts.map((product, index) => (
              <div className={css.product}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>R$ {product.price}</span>
                  <div>Compre Agora</div>
                </div>

                <img src={product.img} alt="Imagem do produto" className="img-p"/>
              </div>
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Products
