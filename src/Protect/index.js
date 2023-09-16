import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const Protect = props => {
  if (Cookies.get('jwt') === undefined) {
    console.log(props)
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default Protect
