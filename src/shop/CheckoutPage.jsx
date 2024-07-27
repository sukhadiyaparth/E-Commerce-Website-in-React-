import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "../components/modal.css"
import { useLocation, useNavigate } from 'react-router-dom'
function CheckoutPage() {
  const [show, setshow] = useState(false)
  const [ActiveTab, setActiveTab] = useState("visa")

  const handelshow = () => setshow(true)
  const handelclose = () => setshow(false)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
  const handelchang = (tabId) => {
    setActiveTab(tabId)
  }
  const handleOrderConfirm = () =>{
    alert("Your Order is placed successsfully!");
    localStorage.removeItem("cart");
    navigate(from ,{replace:true})
  }
  return (

    <div className="modalCard">

      <Button onClick={handelshow} className='py-2  btn btn-primary'> procced to check out</Button>
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
                    <a href="#visa" className={`nav-link ${ActiveTab === "visa" ? "active" : " "}`}
                      id='visa-tab'
                      dat-toggle="tab"
                      role='tab'
                      aria-controls='visa'
                      aria-selected={ActiveTab === "visa"}
                      onClick={() => handelchang("visa")}
                    >
                      <img src="https://i.imgur.com/sB4jftM.png" alt="" width={'80'} />
                    </a>

                  </li>
                  <li className="nav-item" role='presentation'>
                    <a href="#visa" className={`nav-link ${ActiveTab === "paypal" ? "active" : " "}`}
                      id='paypal-tab'
                      dat-toggle="tab"
                      role='tab'
                      aria-controls='paypal'
                      aria-selected={ActiveTab === "paypal"}
                      onClick={() => handelchang("paypal")}
                    >
                      <img src="https://i.imgur.com/yK7EDD1.png" alt="" width={'80'} />
                    </a>

                  </li>
                </ul>

                {/* tab Contents */}

                <div className="tab-content" id='myTabContent'>
                  {/* Visa Contnet */}

                  <div className={`tab-pane fade ${ActiveTab === "visa" ? "show active" : " "}`}
                    id='visa'
                    role='tabpanel'
                    aria-labelledby='visa-tab'
                  >
                    <div className="mt-4 mx-4">
                      <div className='text-center'>
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input type="text" name='name' id='name' className='form-control' required />
                          <span>Cardholder Name</span>
                        </div>
                        <div className="inputbox">
                          <input type="text" name='number' id='number' className='form-control' min="1" max="999" required />
                          <span>Card Number</span> <i className='fa fa-eye'></i>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input type="text" name='number' id='number' className='form-control' min="1" max="999" required />
                          <span>Expiration Date</span>
                        </div>

                        <div className="inputbox">
                          <input type="text" name='number' id='number' className='form-control' min="1" max="999" required />
                          <span>CVV</span>
                        </div>
                      </div>

                      <div className='px-5 pay'>
                      <button className='btn btn-success  btn-block' onClick={handleOrderConfirm}>Order Now </button>
                      </div>
                    </div>

                  </div>


                  {/* PayPal */}

                  <div className={`tab-pane fade ${ActiveTab === "paypal" ? "show active" : " "}`}
                    id='paypal'
                    role='tabpanel'
                    aria-labelledby='paypal-tab'
                  >
                    <div className="mt-4 mx-4">
                      <div className='text-center'>
                        <h5>Paypal Account Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input type="text" name='name' id='name' className='form-control' required />
                          <span>Enter Your  Email</span>
                        </div>
                        <div className="inputbox">
                          <input type="text" name='number' id='number' className='form-control' min="1" max="999" required />
                          <span>Your Name</span>
                        </div>
                       
                        <div className='d-flex flex-row'>
                        <div className="inputbox">
                          <input type="text" name='number' id='number' className='form-control' min="1" max="999" required />
                          <span>Extra Info</span>
                        </div>
                        <div className="inputbox">
                          <input type="text" name='number' id='number' className='form-control' min="1" max="999" required />
                          <span></span>
                        </div>
                        </div>

                      </div>
                      
                     
                     

                      <div className='px-5 pay'>
                      <button onClick={handleOrderConfirm} className='btn btn-success  btn-block'>Add PayPal</button>
                      </div>
                    </div>

                  </div>



                </div>


                {/* paymnet desclaimer */}
                <p className='mt-3  px-4 p-Disclaimer'><em>Payment Disclaimer:</em> In no event shall payment or partial payment by 
                Owner for any material or service </p>


              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>

  )
}

export default CheckoutPage