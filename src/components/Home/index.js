import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {phoneNumber: 0}

  render() {
    const {phoneNumber} = this.state
    return (
      <div className="home-container">
        <img
          src="https://res.cloudinary.com/dxwu7xma0/image/upload/v1695657366/AK_logo_d1tbt9.png"
          className="logo"
          alt="logo"
        />
        <div className="text-container">
          <h1 className="heading">Welcome Back</h1>
          <p className="para">Please sign in to your account</p>
        </div>
        <div className="input-container">
          <p className="enter-text">Enter your number</p>
          <input type="text" value="phoneNumber" />
        </div>
        <p className="enter-text1">
          We will send you a one time SMS message.
          <br />
          Charges may apply.
        </p>
        <button className="btn-design" type="button">
          Sign in with OTP
        </button>
        <p>{phoneNumber}</p>
      </div>
    )
  }
}

export default Home
