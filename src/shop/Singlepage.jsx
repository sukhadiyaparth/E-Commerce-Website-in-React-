import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Pageheader from '../components/Pageheader'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import{Autoplay} from 'swiper/modules'
import ProductDisplay from './ProductDisplay';


function Singlepage() {
  const [product ,setproduct] = useState([])

  const {id} = useParams()
  useEffect(()=>{
    fetch("/src/products.json").then(res=> res.json()).then(data => setproduct(data))
  },[])
 const result = product.filter((data)=>data.id===id)
 
  return (
    <div>
      <Pageheader title={"View Page"}/>
      <div className="shop-single padding-tb aside-bg" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12" >
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12" >
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper className='mySwiper'>
                            {
                              result.map((item,i)=>(
                                <SwiperSlide key={i}>
                                  <div className="single-thumb">
                                  <img src={item?.img} alt="" />
                                  </div>
                                </SwiperSlide>
                              ))
                            }
                          </Swiper>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        {
                          result.map((item)=>(
                            <ProductDisplay id={item.id} item={item}/>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singlepage