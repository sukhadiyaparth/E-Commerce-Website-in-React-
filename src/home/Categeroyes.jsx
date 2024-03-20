import React, { useState } from 'react'
import Raitting from '../components/Raitting';
import { Link } from 'react-router-dom';
const title = "Our Products";

const ProductData = [
{
imgUrl: 'src/assets/images/categoryTab/01.jpg',
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: ' ₹10,800 ',
id: 1,
},
{
imgUrl: 'src/assets/images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '₹5000',
id: 2,
},
{
imgUrl: 'src/assets/images/categoryTab/03.jpg',
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '₹70,000',
id: 3,
},
{
imgUrl: 'src/assets/images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '₹6000',
id: 4,
},
{
imgUrl: 'src/assets/images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '₹11,000',
id: 5,
},
{
imgUrl: 'src/assets/images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '₹20,000',
id: 6,
},
{
imgUrl: 'src/assets/images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '₹100,000',
id: 7,
},
{
imgUrl: 'src/assets/images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '₹9000',
id: 8,
},
{
    imgUrl: 'src/assets/images/categoryTab/28.jpg',
    cate: 'Phones',
    title: 'Samsung S24',
    author: 'assets/images/course/author/02.jpg',
    brand: 'Samsung  ',
    price: '₹110,000',
    id: 9,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/29.jpg',
        cate: 'Phones',
        title: 'Oppo Reno',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Samsung  ',
        price: '₹2000',
        id: 10,
        },
        {
            imgUrl: 'src/assets/images/categoryTab/30.jpg',
            cate: 'Beauty',
            title: 'Sugar Vivid Lipstick',
            author: 'assets/images/course/author/02.jpg',
            brand: 'Sugar  ',
            price: '₹9000',
            id: 11,
            },
            {
                imgUrl: 'src/assets/images/categoryTab/31.png',
                cate: 'Beauty',
                title: 'MyGlamm Lit Lip',
                author: 'assets/images/course/author/02.jpg',
                brand: 'MyGlamm',
                price: '₹9000',
                id: 11,
                }
]
function Categeroyes() {
    const[items,setitems] = useState(ProductData)
    const FilterItems = (catItem)=>{
const updatedata = ProductData.filter((data)=>{ return data.cate===catItem})
setitems( updatedata)
    }
    
    
  return (
    <div className='course-section style-3 padding-tb'>

<div className="container">
    <div className="section-header">
        <h2 className='title'>{title}</h2>
        <div className='course-filter-group'>
            <ul className="lab-ul">
                <li onClick={()=>setitems(ProductData)}>All</li>
                <li onClick={()=>FilterItems("Bags")}>Bags</li>
                <li onClick={()=>FilterItems("Shoes")}>Shoes</li>
                <li onClick={()=>FilterItems("Phones")}>Phones</li>
                <li onClick={()=>FilterItems("Beauty")}>Beauty</li>
            </ul>
        </div>
    </div>
    <div className="section-wrapper">
        <div className='row g-4 justify-content-center row-cols-xl-4  row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
            {
                items.map((products,s)=>(
                    <div key={s} className="col">
                        <div className="course inner">
                            <div className="course-thumb">
                                <img src={products.imgUrl} alt="" />
                                <div className="course-category">
                                    <div className="course-cate">
                                        <a href="#">{products.cate}</a>
                                    </div>
                                    <div className="course-review">
                                        <Raitting></Raitting>
                                    </div>
                                </div>
                            </div>

                        <div className="course-content">
                            <Link to={`/shop/${products.id}`}><h6>{products.title}</h6></Link>
                            <div className="course-footer">
                              
                                <div className="course-price">
                                    {products.price}
                                </div>
                            </div>
                        </div>
                        </div>
                
                    </div>
                ))
            }
        </div>
    </div>
</div>
    </div>
  )
}

export default Categeroyes