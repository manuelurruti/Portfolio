import React from 'react'
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';
import Carousel from 'react-grid-carousel'
import "./Card.css"
import { Link } from 'react-router-dom';

export const Card  = () => {

    return (

              <Carousel cols={3} rows={1} gap={1} loop>
            
              <Carousel.Item>
              <Link to={"https://dashboard-tmwc.onrender.com"}><img width="95%" className='photo' src="../../image4.png" /></Link>
                <h3 className='parraf'>Perfumall</h3>
                <p className='parraf'>e-commerce of perfumes.</p>
                <p className='parraf'>Fullstack</p>
  

              </Carousel.Item>
              <Carousel.Item>
            <img width="95%" className='photo' src="../../image2.png" />
                <h3 className='parraf'>Dashboard of Perfumall</h3>
               
              </Carousel.Item>
              <Carousel.Item>
             <img width="95%" className='photo' src="../../api.png" />
              <h3 className='parraf'>API of Perfumall.</h3>
             

              </Carousel.Item>
              <Carousel.Item>
              <img width="95%" className='photo' src="../../anime.png" />
              <h3  className='parraf'>Anime!</h3>
             

              </Carousel.Item>
            
              <Carousel.Item>
             <img width="95%" className='photo' src="../../image3.png" />
              <h3 className='parraf'>Vegan proyect</h3>
              <p className='parraf'>Full stack</p>
              <p className='parraf'>In progress...</p>



              </Carousel.Item>
              <Carousel.Item>
             <img width="95%" className='photo' src="../../image1.png" />
              <h3 className='parraf'>League of legends app</h3>

              </Carousel.Item>
              <Carousel.Item>
             <img width="95%" className='photo' src="../../image5.png" />
                <h3 className='parraf'>Weather app</h3>
               
                
              </Carousel.Item>
              <Carousel.Item>
              <img width="95%" className='photo' src="../../image6.png" />
              <h3 className='parraf'>Films</h3>

              </Carousel.Item>
            
            
              <Carousel.Item>
              <img width="95%" className='photo' src="../../rick.png" />
              <h3 className='parraf'>Rick & Morty</h3>


              </Carousel.Item>
              {/* ... */}
              
            </Carousel>
         
          )
        }


