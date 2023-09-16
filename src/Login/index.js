import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {user: false, details: ''}

  getuser = async event => {
    const {history} = this.props
    event.preventDefault()
    const username = document.getElementById('input1').value
    const password = document.getElementById('input2').value
    const body = {username, password}
    console.log(body)
    const option = {
      method: 'POST',
      body: JSON.stringify(body),
    }
    const response = await fetch('https://apis.ccbp.in/login', option)
    const result = await response.json()
    console.log(result)
    if (result.status_code === 400) {
      this.setState({user: true, details: result.error_msg})
    } else {
      Cookies.set('jwt', result.jwt_token, {expires: 1})
      history.replace('/')
    }
  }

  render() {
    const {user, details} = this.state
    if (Cookies.get('jwt') !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="main">
        <form onSubmit={this.getuser}>
          <div className="img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </div>
          <div className="id1">
            <label htmlFor="input1" className="label">
              USERNAME
            </label>
            <input
              type="text"
              id="input1"
              placeholder="username"
              className="input"
            />
          </div>
          <div className="id1">
            <label htmlFor="input2" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              id="input2"
              placeholder="password"
              className="input"
            />
          </div>
          {user && <p>{details}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login
