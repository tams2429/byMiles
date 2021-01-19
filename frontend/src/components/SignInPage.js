import React from 'react'

const SignInPage = () => {

  const [username, setusername] = React.useState('')
  const [password, setpassword] = React.useState('')

  // const type = 'USER_PASSWORD_AUTH'

  const handleChange = (e) => {
    if (e.target.id === 'username') {
      setusername(e.target.value)
    } else if (e.target.id === 'password') {
      setpassword(e.target.value)
    }
  }

  console.log('Username is:', username)
  console.log('Password is:', password)

  return (
    <div className='outer-wrapper'>
      <div className='form-container window'>
        <form>
          <label htmlFor='username'>
            User Name:
          </label>
          <input id='username' type='text' value={username} onChange={handleChange}/>
          <label htmlFor='password'>
            Password:
          </label>
          <input id='password' type='text' value={password} onChange={handleChange}/>
          <input type='submit' value='Sign In'/>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
