import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Search({products,gridlist}) {
    const [searchterm,setsearchterm] = useState()
    const Fillter = products.filter((data)=>(data.name.toLowerCase()?.includes(searchterm?.toLowerCase())))
    console.log(Fillter)
  return (
    <div className='widget widget-search'>
        <form action="" className="search-wrapper mb-3">
            <input type="text" name='search' className='search' placeholder='Search...' defaultValue={searchterm} onChange={(e)=>setsearchterm(e.target.value)} />
            <button type='submit'>
            <i className='icofont-search-2'></i>
            </button>
        </form>
        <div>
            {
                searchterm&& Fillter.map((data)=>(
                    <Link key={data.id} to={`/shop/${data.id}`}>
                        <div className='d-flex gap-3 p-2'>
                            <div>
                     <div className="pro-thumb h-25">
                        <img src={data.img} width={70} className='flex-{grow|sharink}-0' alt="" />
                     </div>
                     </div>
                     <div className="product-content">
                        <p>
                        <Link to={`/shop/${data.id}`}>{data.name}</Link>
                        </p>
                        <h6> ₹ {data.price}</h6>
                     </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Search