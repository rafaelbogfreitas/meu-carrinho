import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { loggedin, logout } from '../services/authService'

import fetch from 'isomorphic-fetch'

export default function about() {

  const handleLogout = () => {
    logout()
    Router.replace('/');
  }
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/"><a>Go Back</a></Link>
      <div onClick={() => handleLogout()}>Logout</div>
    </div>
  )
}

about.getInitialProps = async ctx => {

  // const response = await fetch('http://localhost:5000/api/v1/auth/loggedin')
  // console.log(reponse)
      const response = await loggedin()


     
     
     if(response.status === 401 && !ctx.req){
       Router.replace('/');
       return {}
      }
      
      if(response.status === 401 && ctx.req){
        ctx.res.writeHead(302, {
          Location: 'http://localhost:3000'
        })
        ctx.res.end()
        return
      }
      
      return {
        user: response
      }
   

}
