import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const getit = () => {
    Cookies.remove('jwt')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="nav-img"
      />
      <div className="home">
        <p className="p">Home</p>
        <Link to="/jobs">
          <p className="p">Jobs</p>
        </Link>
      </div>
      <button type="button" className="btn" onClick={getit}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
