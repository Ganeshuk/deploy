import './index.css'

const Header = () => (
  <nav>
    <img
      src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
      alt="website logo"
      className="nav-img"
    />
    <div className="home">
      <p className="p">Home</p>
      <p className="p">Jobs</p>
    </div>
    <button type="button" className="btn">
      Logout
    </button>
  </nav>
)

export default Header
