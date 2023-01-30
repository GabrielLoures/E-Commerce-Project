import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import css from './Testimonials.module.css'

import Hero from '../../assets/testimonialHero.png'
import { TestimonialsData } from '../../data/testimonials'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>

      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Mais Vendidos</span>
          <span>Os melhores produtos de beleza em um só lugar. Confira os depoimentos de nossos clientes</span>
        </div>

        <img src={Hero} alt="Imagem de uma mulher" />

        <div className={css.container}>
          <span>100k</span>
          <span>Clientes satisfeitos</span>
        </div>
      </div>

    <div className={css.reviews}>Depoimentos</div>

      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
          breakpoints={{
            856: {
              slidesPerView: 3
            },
            640: {
              slidesPerView: 2
            },
            0: {
              slidesPerView: 1
            }
          }}
        >
          {
            TestimonialsData.map((testimonial, index) =>(
              <SwiperSlide>
                <div className={css.testimonial}>
                  <img src={testimonial.image} alt="Foto do autor do depoimento" />
                  <span>{testimonial.comment}</span>
                  <hr />
                  <span>{testimonial.name}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

    </div>
  )
}

export default Testimonials
