import React from 'react'
import './Slider.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

// importação da estilização do swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { SliderProducts } from '../../data/products'

const Slider = () => {
  return (
    <div>
      <div className="s-container">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1
            }
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={true}
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={1}
          loopFillGroupWithBlank={true}
          loop={true}
          >
            {SliderProducts.map((slide, index) => (
              <SwiperSlide>
                <div className="left-s">
                  <div className="name">
                    <span>
                      {slide.name}
                    </span>
                    <span>
                      {slide.detail}
                    </span>
                  </div>

                  <span>R$ {slide.price}</span>

                  <div>Compre agora</div>

                </div>

                <img src={slide.img} alt="product" className="img-p" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
