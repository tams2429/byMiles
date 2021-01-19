import React from 'react'
// import { Link, withRouter } from 'react-router-dom'
import { login } from '../lib/api'

class SignInPage extends React.Component {

  state = {
    formData: {
      username: '',
      password: '',
      type: 'USER_PASSWORD_AUTH',
    },
  }


  handleChange = (e) => {
    const formData = { ...this.state.formData, [e.target.id]: e.target.value }
    this.setState({ formData })
  }

  handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await login(this.state.formData)
      window.localStorage.setItem('token', res.data.access_token)
      this.props.history.push('/policy')
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    console.log(this.state.formData)
    return (
      <div className='outer-wrapper'>
        <div className='form-container window'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='username'>
              User Name:
            </label>
            <input id='username' type='text' placeholder='Please enter your User Name' value={this.state.formData.username} onChange={this.handleChange}/>
            <label htmlFor='password'>
              Password:
            </label>
            <input id='password' type='password' placeholder='Please enter your Password' value={this.state.formData.password} onChange={this.handleChange}/>
            <input type='submit' value='Sign In' className='submit-btn'/>
          </form>
        </div>
      </div>
    )
  }
}

export default SignInPage
