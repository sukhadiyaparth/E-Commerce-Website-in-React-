import React from 'react'

function Pagination({ ProductsperPage,total,activepage, paginate}) {
  console.log(total)
  const pageNumber = [];
  for(let i=1;i<=Math.ceil(total/ProductsperPage);i++){
    pageNumber.push(i)
  }
  console.log(pageNumber)
  return (
   <ul className='default-pagination lab-ul'>
    <li>
      <a href="#" onClick={()=>
      {
        if(activepage<pageNumber.length){
          paginate(activepage-1)
        }
      }}>
        <i className="icofont-rounded-left"></i>
      </a>
    </li>

    {
      pageNumber.map((number)=>(
        <li key={number} className={`page-item ${number === activepage ? "bg-warning":" "}`}>
          <button onClick={()=>paginate(number)} className='bg-transparent'>{number}</button>
        </li>
      ))
    }
       <li>
      <a href="#" onClick={()=>
      {
        if(activepage<pageNumber.length){
          paginate(activepage+1)
        }
      }}>
        <i className="icofont-rounded-right"></i>
      </a>
    </li>
   </ul>
  )
}

export default Pagination