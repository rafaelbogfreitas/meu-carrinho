import { useRouter } from 'next/router';

import Head from 'next/head'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'

export default function Home() {
  let router = useRouter();

  // console.log(router)

  let [ name, setName ] = useState('');
  let [ email, setEmail ] = useState('');
  let [ password, setPassword ] = useState('');

  const handleNameChange = e => setName(e.target.value)
  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const handleLogin = e => {
    e.preventDefault();
    login(email, password);
    router.push('/about')
  }

  const handleSignup = e => {
    e.preventDefault();
    signup(name, email, password);
  }

  return (
    <>
      {/* Navbar placeholder */}

      <Login/>
      <Signup/>
      
    </>
  )
}
