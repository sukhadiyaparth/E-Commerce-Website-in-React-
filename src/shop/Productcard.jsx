import React from 'react'
import { Link } from 'react-router-dom';
import Ratting from '../components/Raitting'
function Productcard({products,gridlist}) {
  return (
    <div className={`shop-product-wrap row justify-content-center ${gridlist?"grid":"list"} `}>

        {
            products.map((data,i)=>
            <div key={i} className='col-lg-4 col-md-6 col-12 '>
        <div className="product-item">
            <div className="product-thumb">
             <div className="pro-thumb">
                <img src={data.img} alt="" />
             </div>
            


            <div className="product-action-link">
                <Link to={`/shop/${data.id}`}>
                    <i className="icofont-eye"></i>
                </Link>
                <a href="#">
                    <i className="icofont-heart"></i>
                </a>
                <Link to='/cart-page'><i className="icofont-cart"></i></Link>
            </div>
            </div>
            <div className="product-content">
            <h5>
                <Link to={`/shop/${data.id}`}>{data.name}</Link>
            </h5>
              <p className='productRating'>
                <Ratting/>
                </p>  

                <h6>
                ₹ {data.price}
                </h6>
            </div>
            
        </div>

        <div className="product-list-item">
            <div className="product-thumb">
             <div className="pro-thumb">
                <img src={data?.img} alt="" />
             </div>
            


            <div className="product-action-link">
                <Link to={`/shop/${data.id}`}>
                    <i className="icofont-eye"></i>
                </Link>
                <a href="#">
                    <i className="icofont-heart"></i>
                </a>
                <Link to='/cart-page'><i className="icofont-cart"></i></Link>
            </div>
            </div>
            <div className="product-content">
            <h5>
                <Link to={`/shop/${data.id}`}>{data.name}</Link>
            </h5>
              <p className='productRating'>
                <Ratting/>
                </p>  

                <h6>
                ₹ {data.price}
                </h6>
            </div>
            
        </div>

        </div>
            )
        }
    </div>
  )
}

export default Productcard