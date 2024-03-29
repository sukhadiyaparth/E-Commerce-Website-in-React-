import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProductDisplay({item}) {
    const {name,id,price,seller,ratingsCount,quantity,img}= item

    const [prequantity,setprequantity] = useState(quantity)
    const [coupon,setcoupon] = useState()
    const [size,setsize] = useState('Set Size')
    const [color,setcolor] = useState('Set Color')
    function handelchangesize(e){
        setsize(e.target.value)
    }
    function handelchangecolor(e){
        setcolor(e.target.value)
    }
   function handeldec(){
if(prequantity>1)[
    setprequantity(prequantity-1)
]
   }
   function handelinc(){
    setprequantity(prequantity+1)
   }
   function handelchangesubmit(e){
   e.preventDefault()    
const product = {
    id : id,
    img : img,
    name : name,
    price: price,
    quantity : quantity,
    size : size,
    color : color,
    coupon : coupon

}
   }
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className="raiting">
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <span>{ratingsCount} review</span>
            </p>
            <h4>{price}</h4>
            <h4>{seller}</h4>
        </div>
        <div>
            <form onSubmit={handelchangesubmit}>
                <div className="select-product size">
                    <select value={size} onChange={handelchangesize}>
                        <option value="">Select Size</option>
                        <option value="SM">SM</option>
                        <option value="MD">MD</option>
                        <option value="LG">LG</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                    <i className="icofont-rounded-down"></i>
                </div>
                <div className="select-product  color">
                    <select value={color} onChange={handelchangecolor}>
                    <option value="Select Color">Select Color</option>
                        <option value="Ash">Ash</option>
                        <option value="Red">Red</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                        <option value="Black">Black</option>
                    </select>
                    <i className="icofont-rounded-down"></i>
                </div>
                <div className="cart-plus-minus">
                    <div className="dec qtybutton " onClick={handeldec}>-</div>
                    <input type="text" className="cart-plus-minus-box" name="qtybutton" value={prequantity} onChange={(e)=>setprequantity(parseInt(e.target.value,10))}/>
                    <div className="inc qtybutton " onClick={handelinc}>+</div>
                </div>
                <div className="discount-code mb-2">
                    <input type="text" placeholder='Enter Discount code ' onChange={(e)=>setcoupon(e.target.value)} />
                </div>
                <button type='submit' className='lab-btn'>
                    <span>Add to Cart</span>
                </button>   
                <Link to='/cart-page' className='lab-btn bg-primary'>
                    <span> Check Out </span>
                </Link>   
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay