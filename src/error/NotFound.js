import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorIcon from "../assets/error_icon.webp"
import '../styles/NotFound.css'

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='error_page'>
      <img src={ErrorIcon} alt="Error" className="erroricon " />
      <h1>404 - Page Not Found</h1>
      <p>Oops, the page you are looking for does not exist or an error occured.</p>
      <button onClick={handleGoHome} className='go_home_button'>Go Home</button>
    </div>
  );
};

export default NotFound;

