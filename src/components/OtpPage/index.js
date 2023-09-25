import './index.css'

const OtpPage = () => (
  <div className="otp-container">
    <img
      src="https://res.cloudinary.com/dxwu7xma0/image/upload/v1695657366/undraw_confirmed_81ex_vayqhc.png"
      className="logo"
      alt="otp-logo"
    />
    <h1 className="heading">Please verify Mobile number</h1>
    <div className="text-container">
      <p className="para">An OTP is sent to</p>
      <p className="para1">Change Phone Number</p>
    </div>
    <p className="enter-text">
      Didn’t receive the code?
      <span className="enter-text1">Resend</span>
    </p>
    <button className="btn-design" type="button">
      Verify
    </button>
  </div>
)

export default OtpPage
