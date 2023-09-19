import {Switch, Route} from 'react-router-dom'
import Login from './Login'
import Protect from './Protect'
import Home from './Home'
import Job from './Job'
import Final from './Final'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Protect exact path="/" component={Home} />
    <Protect exact path="/jobs" component={Job} />
    <Protect exact path="/jobs/:id" component={Final} />
  </Switch>
)

export default App
