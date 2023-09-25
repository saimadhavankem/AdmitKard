import './index.css'

const MainPage = () => (
  <div className="main-container">
    <img
      src="https://res.cloudinary.com/dxwu7xma0/image/upload/v1695657367/Artboard_1_gbdj5f.png"
      className="logo"
      alt="otp-logo"
    />
    <div>
      <h1 className="heading">Welcome to AdmitKard</h1>
      <p className="enter-text">
        In order to provide you with a custom experience,
        <br />
        we need to ask you a few questions.
      </p>
    </div>
    <div>
      <button className="btn-design" type="button">
        Get Started
      </button>
      <p className="btn-text">*This will only take 5 min.</p>
    </div>
  </div>
)

export default MainPage
