import React from 'react'

function Pageheader({title}) {
  return (
    <div className='pageheader-section'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="pageheader-content text-center">
                        <h2>{title}</h2>
                        <nav className="breadcrumb">
                            
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pageheader