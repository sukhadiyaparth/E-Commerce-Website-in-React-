import React, { useState } from 'react'
import Products from '../products.json'
import { Link } from 'react-router-dom';
import SelectCat from '../components/SelectCat';
 
const title = (
    <h2>Search Your One From  <span>  Thousand </span> Of Products</h2>
)
const dec = "We have the largest Collection of Products"

const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];


function Banner() {
    const [SearchPr,setSearchPr] = useState("")

    const [FilterPr,setFilterPr] = useState(Products)

    const handleInp = (e)=>{
        const searchTr = e.target.value
        setSearchPr(searchTr)   
       const Filtered = Products.filter((data)=> data.name.toLocaleLowerCase().includes(searchTr.toLocaleLowerCase()))

       setFilterPr(Filtered)
    }
  return (
    <div className='banner-section style-4'>
        <div className="container">
            <div className="banner-content">
                {title}
           
            <form >
                <SelectCat select={"all"}/>
                <input type="text" name='search' id='search' placeholder='Search your Products' value={SearchPr}  onChange={handleInp}/>
                <button type='submit'>
                <i class="icofont-search-2"></i>        
                </button>
            </form>
            <p>{dec}</p>
            <ul className='lab-ul'>
                {
                    SearchPr&& FilterPr.map((datapr,i)=>
                        <li key={i}>
                            <Link to={`/shop/${datapr.id}`}>{datapr.name}</Link>
                        </li>
                        )
                }
            </ul>
        </div>

        </div>

    </div>
  )
}

export default Banner