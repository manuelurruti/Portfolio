import React from 'react'
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';
import Carousel from 'react-grid-carousel'
import "./Card.css"

export const Card  = () => {

    return (
 <> 
 <h1 className='d-flex justify-content-center p-3 parraf'>My proyects!</h1>
              <Carousel cols={3} rows={1} gap={1} loop>
            
              <Carousel.Item>
              <a href="https://perfumall-mv7u.onrender.com/" target='a_blank'><img width="95%" className='photo' src="../../image4.png" /></a>
                <h3 className='parraf'>Perfumall</h3>
                <p className='parraf'>e-commerce of perfumes.</p>
                <p className='parraf'>Fullstack</p>
  

              </Carousel.Item>
              <Carousel.Item>
              <a href="https://dashboard-tmwc.onrender.com" target='a_blank'><img width="95%" className='photo' src="../../image2.png" /></a>
                <h3 className='parraf'>Dashboard of Perfumall</h3>
               
              </Carousel.Item>
              <Carousel.Item>
              <a href="https://github.com/manuelurruti/API-perfumall" target='a_blank' className='letter'> <img width="95%" className='photo' src="../../api.png" /></a>
              <h3 className='parraf'>API of Perfumall.</h3>
             

              </Carousel.Item>
              <Carousel.Item>
              <img width="95%" className='photo' src="../../anime.png" />
              <h3  className='parraf'>Anime!</h3>
             

              </Carousel.Item>
            
              <Carousel.Item>
              <a href="https://veganprxjxt.onrender.com/" target='a_blank'><img width="95%" className='photo' src="../../image3.png" /></a>
              <h3 className='parraf'>Vegan proyect</h3>
              <p className='parraf'>Full stack</p>
              <p className='parraf'>In progress...</p>



              </Carousel.Item>
              <Carousel.Item>
              <a href="https://super-biscotti-2b2162.netlify.app/" target='a_blank'><img width="95%" className='photo' src="../../image1.png" /></a>
              <h3 className='parraf'>League of legends app</h3>

              </Carousel.Item>
              <Carousel.Item>
              <a href="https://wheaterapp-efdp.onrender.com/" target='a_blank'><img width="95%" className='photo' src="../../image5.png" /></a>
                <h3 className='parraf'>Weather app</h3>
               
                
              </Carousel.Item>
              <Carousel.Item>
              <a href="https://films-1ct6.onrender.com/" target='a_blank'><img width="95%" className='photo' src="../../image6.png" /></a>
              <h3 className='parraf'>Films</h3>

              </Carousel.Item>
            
            
              <Carousel.Item>
              <a href="https://rikandmortyx.onrender.com/" target='a_blank'><img width="95%" className='photo' src="../../rick.png" /></a>
              <h3 className='parraf'>Rick & Morty</h3>


              </Carousel.Item>
              {/* ... */}
              
            </Carousel>
            </>
          )
        }


