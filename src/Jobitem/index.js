import {AiFillStar} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'
import {FcAbout} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import './index.css'

const Items = props => {
  const {
    companyLogo,
    typeOfEmployee,
    jobsMatter,
    pack,
    rating,
    title,
    location,
    id,
  } = props
  return (
    <Link to={`/jobs/${id}`} className="link">
      <li className="list">
        <div className="list1">
          <img src={companyLogo} alt={title} className="items-img" />
          <div>
            <h6>{title}</h6>

            <p>
              <AiFillStar /> <span>{rating}</span>
            </p>
          </div>
        </div>
        <div className="location">
          <>
            <p className="dog">
              <GrLocation />
              <span>{location}</span>
            </p>
            <p>
              <FcAbout />
              <span>{typeOfEmployee}</span>
            </p>
          </>
          <p>{pack}</p>
        </div>
        <hr />
        <h3>Description</h3>
        <p>{jobsMatter}</p>
      </li>
    </Link>
  )
}

export default Items
