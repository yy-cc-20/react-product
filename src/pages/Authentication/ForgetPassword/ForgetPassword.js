import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import React, { Component } from 'react';

import './ForgetPassword.css';

class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: {
                username: ''
            }
        };
    }

    validationSchema = () => Yup.object({
        username: Yup.string()
          .required('Username is required.'),
    });

    onSubmit = (values, { setSubmitting, resetForm }) => {
        alert("Please check your email for new password.");
        setSubmitting(false);
        resetForm();
    };

    render() {
        return (
            <div className="forget-password-container">
                <Formik initialValues={this.state.controls} validationSchema={this.validationSchema} onSubmit={this.onSubmit} >
                    {({ isSubmitting }) => (
                        <Form>
                            <p>Reset Password</p>
                            <div className="form-group">
                                <div className="input-with-icon">
                                    <Field type="text" name="username" placeholder="UserName" className="form-control" />
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <ErrorMessage name="username" component="div" className='error-message' />
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <a href="/SignIn" className="forgot-password">Back to login</a>
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">Reset Password</button>
                            </div>
                        </Form>
                    )}
                </Formik>
          </div>
        );
    }
}

export default ForgetPassword;
