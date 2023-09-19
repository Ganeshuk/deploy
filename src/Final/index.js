import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillStar} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'
import {FcAbout} from 'react-icons/fc'
import Header from '../Header'
import './index.css'

class Final extends Component {
  state = {list: [], t: true}

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    this.getid(id)
  }

  getid = async id => {
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/jobs/${id}`, option)
    const result = await response.json()
    this.setState({list: result.job_details, t: false})
    console.log(result.job_details)
  }

  render() {
    const {list, t} = this.state
    console.log(list.skills)
    return (
      <div>
        <Header />
        {t ? (
          <p>loading...</p>
        ) : (
          <div type="none" className="ul">
            <li className="i2">
              <div className="list1">
                <img
                  src={list.company_logo_url}
                  alt={list.title}
                  className="items-img"
                />
                <div>
                  <h6>{list.title}</h6>

                  <p>
                    <AiFillStar /> <span>{list.rating}</span>
                  </p>
                </div>
              </div>
              <div className="location">
                <>
                  <p className="dog">
                    <GrLocation />
                    <span>{list.location}</span>
                  </p>
                  <p>
                    <FcAbout />
                    <span>{list.employment_type}</span>
                  </p>
                </>
                <p>{list.package_per_annum}</p>
              </div>
              <hr />
              <h3>Description</h3>
              <p>{list.job_description}</p>
              <h1>skills</h1>
              <ul className="user">
                {list.skills.map(each => (
                  <li key={each.name} className="userli">
                    <img src={each.image_url} alt={each.name} />
                    <p>{each.name}</p>
                  </li>
                ))}
              </ul>
            </li>
          </div>
        )}
      </div>
    )
  }
}

export default Final
