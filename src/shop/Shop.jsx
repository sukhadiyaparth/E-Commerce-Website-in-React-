import React, { useState } from 'react'
import Pageheader from '../components/Pageheader'
import Data from '../products.json'
import Productcard from './Productcard'
import Pagination from './Pagination'

function Shop() {
  const [gridlist,setgridlist] = useState(true)
  const [products , setproducts] = useState(Data)
  const [currentpage,setcurrentpage] = useState(1)
  const ProductsperPage = 12;

  const Indexoflastproduct = currentpage *  ProductsperPage
 const Indexoffirstproduct = Indexoflastproduct - ProductsperPage
 const currentproducts = products.slice(Indexoffirstproduct,Indexoflastproduct)

 const paginate = (pagenum)=>{
setcurrentpage(pagenum)
 }
  let title = 'Showing Results'
  return (
    <div>

   <Pageheader title="Shop Page"/>

   <div className="shop-page padding-tb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12">
          <article>
            <div className='shop-title d-flex flex-wrap justify-content-between'>
            <p>{title}</p>
            <div className={`product-view-mode ${gridlist?"gridActive":"listActive"}` }>
              <a  className="grid" onClick={()=>setgridlist(!gridlist)}>
                <i className="icofont-ghost"></i>
              </a>
              <a  className="list" onClick={()=>setgridlist(!gridlist)}>
                <i className="icofont-listine-dots"></i>
              </a>
            </div>
            <Productcard products={products} gridlist={gridlist}/>
            </div>
            <Pagination ProductsperPage={ProductsperPage} total= {products.length} activepage ={currentpage} paginate={paginate}/>
          </article>
        </div>
        <div className="col-lg-4 col-12" >
          right
        </div>
      </div>
    </div>
   </div>
    </div>
  )
}

export default Shop