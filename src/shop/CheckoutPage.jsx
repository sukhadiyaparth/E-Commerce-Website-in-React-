import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import '../components/modal.css'
import { useLocation, useNavigate } from 'react-router-dom'
>>>>>>> 744cd42 (Create Contectus Page And Authentication in Contexts)
>>>>>>> 168cd00 (Create Contectus Page And Authentication in Contexts)

function CheckoutPage() {
    const [show,setshow] = useState(false)
    const [ActiveTab , setActiveTab] = useState("visa")

    const handelshow =()=> setshow(true)
    const handelclose =()=> setshow(false)

    const handelchang = (tabId)=>{
        setActiveTab(tabId)
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || "/"

    const handelOrederNow= ()=>{
      alert("Your Order is Placed Successfully!")
      navigate(from,{replace:true})
      localStorage.removeItem("cart")
    }
>>>>>>> 744cd42 (Create Contectus Page And Authentication in Contexts)
>>>>>>> 168cd00 (Create Contectus Page And Authentication in Contexts)
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
<<<<<<< HEAD
              </ul>
=======
<<<<<<< HEAD
              </ul>
=======
              </ul> 
              <div className="tab-content" id='myTabContent'>
                <div className={`tab-pane fade ${ActiveTab === "visa" ? "show active": " "}` }
                id='visa'
                role='tabpanel'
                aria-labelledby='visa-tab'
                >
                  <div className="mt-4 mx-4">

                    <div className="text-center">
                      <h5>Credit Card</h5>
                    </div>
                    <div className="form mt-3">
                      <div className="inputbox">
                        <input type="text"  name='name' id='name' className='form-control' required/>
                        <span>CardHolder Name</span>
                      </div>
                      <div className="inputbox">
                        <input type="text" name='number'id='number' className='form-control' min="1" max="999"   required />
                        <span>Card Number</span><i className="fa fa-eye"></i>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input type="text" name='number' id='number'min="1" max="999" className='form-control' required />
                          <span>Expiration Date</span>
                        </div>
                        <div className="inputbox">
                          <input type="text" name='number' id='number'min="1" max="999" className='form-control' required />
                          <span>CVV</span>
                        </div>
                      </div>
                      <div className=" text-center  mt-4 pay">
                          <button onClick={handelOrederNow} className='btn btn-success btn-block'>Order Now</button>
                      </div>
                    </div>
                  </div>

                </div>

                <div className={`tab-pane fade ${ActiveTab === "paypal" ? "show active": " "}` }
                id='paypal'
                role='tabpanel'
                aria-labelledby='paypal-tab'
                >
                  <div className="mt-4 mx-4">

                    <div className="text-center">
                      <h5>PayPal Account Info</h5>
                    </div>
                    <div className="form mt-3">
                      <div className="inputbox">
                        <input type="text"  name='name' id='name' className='form-control' required/>
                        <span>Enter Your Email</span>
                      </div>
                      <div className="inputbox">
                        <input type="text" name='number'id='number' className='form-control' min="1" max="999"   required />
                        <span>Your Name</span>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input type="text" name='number' id='number'min="1" max="999" className='form-control' required />
                          <span>Extra Info</span>
                        </div>
                        <div className="inputbox">
                          <input type="text" name='number' id='number'min="1" max="999" className='form-control' required />
                          <span></span>
                        </div>
                        
                      </div>
                      <div className=" text-center  mt-4 pay">
                          <button onClick={handelOrederNow} className='btn btn-success btn-block'>Add Paypal</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


>>>>>>> 744cd42 (Create Contectus Page And Authentication in Contexts)
>>>>>>> 168cd00 (Create Contectus Page And Authentication in Contexts)
            </div>
          </div>
      </div>
    </div>
    </Modal>
</div>
   
  )
}

export default CheckoutPage