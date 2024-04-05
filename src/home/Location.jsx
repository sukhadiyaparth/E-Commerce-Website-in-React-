import React from 'react'
import I1 from '../assets/images/india/bg1.png'
const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [ { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Join with Us', }, ]
function Location() {
  return (
    <div className='clients-section style-2 padding-tb'>
    <div className="container">
        <div className="section-header text-center mb-10">
            <h2 className="title">
                {title}
            </h2>
            <p>{desc}</p>
        </div>
        <div className='text-center '>
          <img src={I1} alt="" srcset="" />
        </div>
    </div>
    </div>
  )
}

export default Location