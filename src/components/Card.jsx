import React from 'react'
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';
import Carousel from 'react-grid-carousel'
import "./Card.css"

export const Card  = () => {

    return (
 

            <Carousel cols={3} rows={1} gap={4} loop>
              <Carousel.Item>
                <img width="95%" src="https://picsum.photos/800/600?random=1" />
              </Carousel.Item>
              <Carousel.Item>
                <img width="95%" src="https://picsum.photos/800/600?random=2" />
              </Carousel.Item>
              <Carousel.Item>
                <img width="95%" src="https://picsum.photos/800/600?random=3" />
              </Carousel.Item>
              <Carousel.Item>
                {/* anything you want to show in the grid */}
              </Carousel.Item>
              {/* ... */}
            </Carousel>
          )
        }


