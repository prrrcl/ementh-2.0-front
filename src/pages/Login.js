import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/hoc/withAuth';
import Title from '../components/ui/Title';

const Login = (props) => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = form

    props.login({ username, password })
    .then( (user) => {
      console.log(user)
    })
    .catch( error => console.log(error) )
  }

  const handleChange = (event) => {  
    const {name, value} = event.target;
    setForm({
      ...form,
      [name]: value
    })
  }


    const { username, password } = form;
    return (
      <>
      <Title title='Login'/>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='username' >Username:</label>
          <input id='username' type='text' name='username' value={username} onChange={handleChange}/>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' value={password} onChange={handleChange} />
          <input type='submit' value='Login' />
        </form>

        <p>You don't have an accout yet?
            <Link to={'/signup'}> Signup</Link>
        </p>
      </>
    )
  
}

export default withAuth(Login);