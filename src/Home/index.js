import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="main-card">
      <div className="text-card">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          Complete the below steps to create your development environment and
          start working on some amazing projects!
        </p>
        <Link to="/jobs">
          <button type="button">Find Job</button>
        </Link>
      </div>
    </div>
  </div>
)

export default Home
