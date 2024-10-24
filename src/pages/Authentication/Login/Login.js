import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../services/AuthProvider';
import './Login.css';

function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  if (user !== null)
    navigate('/Profile');
  
  const [input, setInput] = useState({
    username: '',
    password: ''
  });

  const validationSchema = () => Yup.object({
    username: Yup.string()
      .required('Username is required.'),
    password: Yup.string()
      .required('Password is required.'),
  });

  const handleLogin = async () => {
    try {
      let userInfo = {
        id: '81dc9bdb-52d4-4dbd-96d4-3b58eeda440a',
        username: 'tester'
      };
      await login(userInfo);
      navigate('/Profile');
    } catch (error) {
      console.error('Error login:', error);
    }
  };
  
  const onSubmit = (values, { setSubmitting, resetForm }) => {
      setInput(values);
      setSubmitting(true);
      handleLogin();
  };

  return (
    <div className="sign-in-container">
        <Formik initialValues={input} validationSchema={validationSchema} onSubmit={onSubmit} >
          {({ isSubmitting }) => (
            <Form>
              <p>Sign in to start your session</p>

              <div className="form-group">
                <div className="input-with-icon">
                  <Field type="text" name="username" placeholder="UserName" className="form-control" />
                  <i className="fas fa-envelope"></i>
                </div>
                <ErrorMessage name="username" component="div" className='error-message' />
              </div>

              <div className="form-group">
                <div className="input-with-icon">
                  <Field type="text" name="password" placeholder="Password" className="form-control" />
                  <i className="fas fa-lock"></i>
                </div>
                <ErrorMessage name="password" component="div" className='error-message' />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a href="/fgtpswd" className="forgot-password">I forgot my password</a>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">Sign In</button>
              </div>
            </Form>
            )}
        </Formik>
      </div>
  );
}

export default Login;
