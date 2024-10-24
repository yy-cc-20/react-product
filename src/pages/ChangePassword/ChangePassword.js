import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import React, { Component } from 'react';

import './ChangePassword.css';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          controls: {
              currentPassword: '',
              newPassword: '',  
              confirmNewPassword: '',
          }
      };
    }

    validationSchema = () => Yup.object({
        currentPassword: Yup.string()
        .required('Password is required.'),
        
        newPassword: Yup.string()
        .required('New password is required.'),
        
        confirmNewPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match.')
        .required('Confirm new password is required.'),
    });

    onSubmit = (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      alert("Password has been changed.");
      resetForm();
  };

    render() {
      return (
        <div className="change-password-container">
            <Formik initialValues={this.state.controls} validationSchema={this.validationSchema} onSubmit={this.onSubmit} >
              {({ isSubmitting }) => (
                <Form>
                    <p>Change Password</p>
                    <hr />

                  <div className="form-group">
                    <label>Current Password</label><br />
                      <Field type="password" name="currentPassword" placeholder="Please enter current password" className="form-control" />
                    <ErrorMessage name="currentPassword" component="div" className='error-message' />
                  </div>

                  <div className="form-group">
                    <label>New Password</label><br />
                      <Field type="password" name="newPassword" placeholder="Please enter new password" className="form-control" />
                    <ErrorMessage name="newPassword" component="div" className='error-message' />
                  </div>

                  <div className="form-group">
                    <label>Confirm New Password</label><br />
                      <Field type="password" name="confirmNewPassword" placeholder="Please enter confirm new password" className="form-control" />
                    <ErrorMessage name="confirmNewPassword" component="div" className='error-message' />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary">Submit</button>
                  </div>
                </Form>
                )}
            </Formik>
          </div>
      );
  }
}

export default ChangePassword;
