import React, { useEffect, useState } from 'react'
import Pageheader from '../components/Pageheader'
import { Link } from 'react-router-dom'
import delImgUrl from '../assets/images/shop/del.png'
import CheckoutPage from './CheckoutPage'
function CartPage() {
    const[cartItem,setcartItem] = useState([])
useEffect(()=>{
    const storedCartItem = JSON.parse(localStorage.getItem("cart")) ||[]

    setcartItem(storedCartItem)
},[])
const calculateTotalPrice = (item)=>(
    item.price * item.q1
)
const handelIncrease = (item)=>{
    item.q1+=1
    setcartItem([...cartItem])
    
    localStorage.setItem('cart', JSON.stringify(cartItem))
}
const handeldecrease = (item)=>{
    if(item.q1>1){
    item.q1 -=1
    setcartItem([...cartItem])
    
    localStorage.setItem('cart', JSON.stringify(cartItem))}
}
const handelRemoveItem = (item)=>{
const updateCart = cartItem.filter((data )=> data.id !==item.id)
setcartItem(updateCart)
updatelocalStorage(updateCart)

}

const updatelocalStorage = (cart)=>{
    localStorage.setItem("cart" ,JSON.stringify(cart))
}
const cartSubtotal = cartItem.reduce((total,item)=>{
    return total + calculateTotalPrice(item)
},0) ;
const orderTotal = cartSubtotal
  return (
    <div>
        <Pageheader title={"Cart Page"} />
        <div className="shop-cart padding-tb">
        <div className="container">
            <div className="section-wrapper">
                <div className="cart-top">
                    <table>
                        <thead>
                            <tr>
                                <th className="cat-product">Product</th>
                                <th className="cat-price">Price</th>
                                <th className="cat-quantity">Quantity</th>
                                <th className="cat-toprice">Total</th>
                                <th className="cat-edit">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItem.map((item,index)=>(
                                    <tr key={index}>
                                    <td className="product-item cat-product">
                                        <div className="p-thumb">
                                         <Link to={`/shop/${item.id}`}><img src={item.img} alt="" /></Link>
                                        </div>
                                        <div className="p-content">
                                        <Link to={`/shop/${item.id}`}>{item.name}</Link>
                                        </div>
                                    </td>
                                    <td className='cat-price'>
                                    ₹{item.price}
                                    </td>
                                    <td className="cat-quantity">
                                        <div className="cart-plus-minus">
                                            <div className="dec qtybutton" onClick={()=> handeldecrease(item)}>-</div>
                                            <input type="text" name="" id="" className='cart-plus-minus-box' value={item.q1} />
                                            <div className="inc qtybutton" onClick={()=> handelIncrease(item)}>+</div>
                                        </div>
                                        
                                    </td>
                                    <td className="cat-price">  ₹{calculateTotalPrice(item)}</td>
                                    <td className="cat-edit">
                                        <a href="#" onClick={()=>handelRemoveItem(item)}>
                                            <img src={delImgUrl} alt="" />
                                        </a>
                                    </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="cart-bottom ">
                    <div className="cart-checkout-box justify-content-center">
                        <form action="" className="cart-checkout">
                            <input type="submit" value="Update Cart" />
                            <div><CheckoutPage/></div>
                        </form>
                    </div>
                    <div className="shipping-box">
                        <div className='cart-overview text-center'>
                            <h3>Cart Total</h3>
                            <ul className="lab-ul">
                                <li className="d-flex justify-content-center">
                                    <h3 className='text-success'> total= </h3>
                                    <h3 className='text-warning'>  ₹{ cartSubtotal  }</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CartPage