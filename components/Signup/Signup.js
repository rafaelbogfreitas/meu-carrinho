import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { signup } from '../../services/AuthService'
import signupStyles from './signup.module.scss'

const Signup = () => {

  let router = useRouter()

  let [ name, setName ] = useState('')
  let [ email, setEmail ] = useState('')
  let [ password, setPassword ] = useState('')

  const handleNameChange = e => setName(e.target.value)
  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const handleSignup = e => {
    e.preventDefault()
    signup(name, email, password)
    router.push('/createStore')
  }

  return (
    <div className={signupStyles.login}>
      <form onSubmit={(e) => handleSignup(e)}>
        <h1>Signup</h1>
        <input onChange={e => handleNameChange(e)} name="name" type="text" className="text"/>
        <input onChange={e => handleEmailChange(e)} name="email" type="text" className="text"/>
        <input onChange={e => handlePasswordChange(e)} name="password" type="text" className="text"/>
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup
