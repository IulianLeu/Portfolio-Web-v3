import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import {comments} from './TestimonialItem';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';





const Testimonials = () => {
  return (
      <section id="testimonials">
        <h5>Example of reviews from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className='container testimonials__container'
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>

          {
          comments.map(({id, avatar, ClientName, review}) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{ClientName}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        </Swiper>
      </section>
  )
};

export default Testimonials;
