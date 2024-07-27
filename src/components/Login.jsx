import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const title = "Login"
const socialtitle = " Login with Social Media"
const btnText = "Login Now"
const socialList = [{ iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', },]

export const Login = () => {
    const [errorMessage , seterrorMessage] = useState('')
    const {signupWithGmail,login} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || "/"

    const handleLogin = (e)=>{
        e.preventDefault();
        const form  = e.target
        const email = form.email.value
        const password = form.password.value
        try {
            login(email,password).then((res)=>{
                const user = res.user
                alert('Login Successful!')
                navigate(from,{replace:true})
            })
        } catch (error) {
            const errorMsg = error.message;
            seterrorMessage("Please provide valid email & password")
        }
    }

      return (
        <div className='login-section padding-tb section-bg'>
            <div className="container">
                <div className="account-wrapper">
                    <h3 className="tittle">{title}</h3>
                    <form className="account-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <input type="email" name="email" id='email' placeholder='Email Address *' required />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id='password' placeholder='password *' required />
                        </div>
                        <div>
                            {
                                errorMessage  && (
                                    <div className='error-message text-danger'
                                    
                                    >{errorMessage}</div>
                                )
                            }
                        </div>
                        <div className="form-group">
                            <div className='d-flex justify-content-between flex-wrp pt-sm-2'>
                                <div className='checkgroup'>
                                    <input type="checkbox" name='remember' id='remember' />
                                    <label htmlFor="remember">Remember Me</label>
                                </div>

                                <Link to="/forgetpass">Forget Password</Link>
                            </div>
                        </div>
                        <div className='form-group'>
                        <button type='submit' className='d-block lab-btn'>
                            <span>{btnText}</span>
                        </button>
                        </div>

                    </form>

                    <div className="account-button">
                        <span className='d-block cate pt-10 '>
                            Don't  Have an Account? <Link to='/sing-up'>Sign Up</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
