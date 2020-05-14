import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { loggedin, logout } from '../services/authService'

// import fetch from 'isomorphic-unfetch'
import axios from 'axios'

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

  const response = await axios({
    method: 'get',
    url: 'http://localhost:5000/api/v1/auth/loggedin',
    headers: !ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
  })
  
    

     
     if(response.status === 401 && !ctx.req){
       console.log(response)
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
      
      // const user = response.json()
      return {
        user: response
      }
   

}
