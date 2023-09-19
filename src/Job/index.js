import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Control from '../Control'
import Header from '../Header'
import Items from '../Jobitem'
import './index.css'

class Job extends Component {
  state = {jobs: [], loader: true}

  componentDidMount() {
    this.getjobdetail()
  }

  getdetial = async (t, v) => {
    const {jobs} = this.state
    if (t === true && v !== '') {
      console.log(t, v)
      const data = jobs.filter(each => each.employment_type === v)
      if (data.length !== 0) {
        console.log(data)
        this.setState({jobs: data})
      } else {
        const v1 = v.toUpperCase().split(' ').join('')
        console.log(v1)
        const option = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${Cookies.get('jwt')}`,
          },
        }
        this.setState({loader: true})
        const data1 = await fetch(
          `https://apis.ccbp.in/jobs?employment_type=${v1}`,
          option,
        )
        const dot = await data1.json()
        this.setState(prevState => ({
          jobs: [...prevState.jobs, ...dot.jobs],
          loader: false,
        }))
        console.log(dot)
      }
    } else {
      const j = jobs.filter(each => each.employment_type !== v)
      this.setState({jobs: j})
      console.log(j)
    }
  }

  getjobdetail = async () => {
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/jobs', option)
    const result = await response.json()
    this.setState({jobs: result.jobs, loader: false})
    console.log(result.jobs)
  }

  search = async () => {
    const {jobs} = this.state
    const id = document.getElementById('input')
    const bhola = jobs.filter(each => each.title.includes(id.value))
    this.setState({jobs: bhola})
    console.log(bhola)
  }

  render() {
    const {jobs, loader} = this.state

    return (
      <div>
        <Header />
        <div className="job-card">
          <Control fun={this.getdetial} />
          <div className="narra">
            <div className="input-align">
              <input type="text" className="input-job" id="input" />

              <BsSearch className="icons" onClick={this.search} />
            </div>
            {loader ? (
              <div className="loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#ffffff"
                  height="50"
                  width="50"
                />
              </div>
            ) : (
              <ul type="none">
                {jobs.map(each => (
                  <Items
                    companyLogo={each.company_logo_url}
                    typeOfEmployee={each.employment_type}
                    jobsMatter={each.job_description}
                    location={each.location}
                    pack={each.package_per_annum}
                    rating={each.rating}
                    title={each.title}
                    id={each.id}
                    key={each.id}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Job
