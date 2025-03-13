import React from 'react'
import './Error.css'
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <>
      <div className="not-found">
        <h1>404</h1>
        <h3>SORRY, PAGE NOT FOUND!</h3>
        <p>The Page You're Looking For Was Not Found</p>
        <div className="button">
          <Link to='/'>
          <Button title="Back To Home" classname='samebutton' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Error;
