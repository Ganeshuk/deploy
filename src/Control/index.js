import {Component} from 'react'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]
class Control extends Component {
  getvalue = event => {
    const {fun} = this.props
    const id = document.getElementById(event.target.id)

    fun(id.checked, id.id)
  }

  render() {
    return (
      <div className="gg">
        <div>
          <div className="card-control">
            <h1 className="h1">Rahul</h1>
          </div>
          <hr />
          <ul className="dom" type="none">
            <h5>Type of Employee</h5>
            {employmentTypesList.map(each => (
              <li className="li" key={each.label}>
                <input
                  type="checkbox"
                  onChange={this.getvalue}
                  id={each.label}
                  className="input1"
                />
                <label htmlFor={each.employmentTypeId}>{each.label}</label>
              </li>
            ))}
          </ul>
          <hr />
          <ul type="none">
            {salaryRangesList.map(each => (
              <li className="li" key={each.label}>
                <input
                  type="checkbox"
                  onChange={this.getvalue}
                  id={each.salaryRangeId}
                  className="input1"
                />
                <label htmlFor={each.salaryRangeId}>{each.label}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Control
