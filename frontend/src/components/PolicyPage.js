import React from 'react'

import { policy } from '../lib/api'

class PolicyPage extends React.Component {

  state = {
    insuranceData: null,
  }

  async componentDidMount () {
    const token = window.localStorage.getItem('token')
    try {
      const res = await policy(token)
      console.log(res)
      this.setState({ insuranceData: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state)
    if (this.state.insuranceData === null) {
      return null
    } else {
      return (
        <div className='outer-wrapper'>
          <div className=' window'>
            <h1>My Policy</h1>
            <hr />
            <div className='policy-ref'>
              <h2>Policy reference:</h2>
              <p>{this.state.insuranceData.policy.policy_ref}</p>
            </div>
            <div className='type'>
              <h2>Cover type:</h2>
              <p>{this.state.insuranceData.policy.cover}</p>
            </div>
            <div className='car'>
              <h2>Car:</h2>
              <p>{`${this.state.insuranceData.vehicle.make} ${this.state.insuranceData.vehicle.model} ${this.state.insuranceData.vehicle.colour} - ${this.state.insuranceData.vehicle.reg}`}</p>
            </div>
            <div className='address'>
              <h2>Address:</h2>
              <p>{`${this.state.insuranceData.policy.address.line_1}, ${this.state.insuranceData.policy.address.line_2}, ${this.state.insuranceData.policy.address.postcode}`}</p>
            </div>
          </div>
        </div>
      )

    }
  }
}

export default PolicyPage
