import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../state/actions/auth';

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  form: {
    width: '30%',
    height: '200',
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
    padding: 15,
  },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signin({ email, password }, () => {
        navigate('/');
      })
    );
  };
  return (
    <div style={styles.main}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            type='email'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3 text-danger'>{error}</div>
        <div style={{ textAlign: 'center' }}>
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
