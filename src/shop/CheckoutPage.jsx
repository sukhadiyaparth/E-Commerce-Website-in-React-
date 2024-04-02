import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function CheckoutPage() {
    const [show,setshow] = useState(false)
    const [ActiveTab , setActiveTab] = useState("visa")

    const handelshow =()=> setshow(true)
    const handelclose =()=> setshow(false)

    const handelchang = (tabId)=>{
        setActiveTab(tabId)
    }
  return (
 
<div className="modalCard">

    <Button  onClick={handelshow} className='py-2  btn btn-primary'> procced to check out</Button>
    <Modal
    show={show}
    onHide={handelclose}
    animation={false}
    className='modal fade'
    centered
    >
    <div className="modal-dialog">
      <h5 className="px-3 mb-3">Select Your Payment Method</h5>
      <div className="modal-content">
          <div className="modal-body">
            <div className="tabs mt-3">
              <ul className="nav nav-tabs" id='myTab ' role='tablist'>
                <li className="nav-item" role='presentation'>
                  <a href="#visa" className={`nav-link ${ActiveTab==="visa"?"active":" "}`}
                  id='visa-tab'
                  dat-toggle = "tab"
                  role='tab'
                  aria-controls= 'visa'
                  aria-selected ={ActiveTab === "visa"}
                  onClick={()=> handelchang("visa")}
                  >
                    <img src="https://i.imgur.com/sB4jftM.png" alt="" width={'80'}/>
                  </a>

                </li>
                <li className="nav-item" role='presentation'>
                  <a href="#visa" className={`nav-link ${ActiveTab==="paypal"?"active":" "}`}
                  id='paypal-tab'
                  dat-toggle = "tab"
                  role='tab'
                  aria-controls= 'paypal'
                  aria-selected ={ActiveTab === "paypal"}
                  onClick={()=> handelchang("paypal")}
                  >
                    <img src="https://i.imgur.com/yK7EDD1.png" alt="" width={'80'}/>
                  </a>

                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    </Modal>
</div>
   
  )
}

export default CheckoutPage