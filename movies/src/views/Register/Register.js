import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!values.password) {
        errors.password = 'Required';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
    } else if(values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords must match';
    }
  
    return errors;
  };

export const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: values => {
      alert('You have successfully registered!');
    },
  });
  return (
    <div className="register-container" data-test='register-component'>
        <div className="register-form">
            <img className="mb-2" src="movies-logo.png" alt="" width="100" height="100"/>
            <hr />

            <form onSubmit={formik.handleSubmit}>
            <p htmlFor="PleaseRegisterYourAccount">Please register your account</p>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="formik-input"
                placeholder="Username"
            />
            {formik.errors.username ? <div style={{ color: 'red' }}>{formik.errors.username}</div> : null}
            <label htmlFor="userame">Username</label>
            
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="formik-input"
                placeholder="Email address"
            />
            {formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
            <label htmlFor="email">Email</label>
            
            
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="formik-input"
            />
            {formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : null}
            <label htmlFor="password">Password</label>

            <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="formik-input"
            />
            {formik.errors.confirmPassword ? <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div> : null}
            {/* {formik.touched.password && formik.values.confirmPassword !== formik.values.password ? <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div> : null} */}
            <label htmlFor="ConfirmPassword">Confirm Password</label>

            <hr />

            <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
        <div className="register-sidebar">
            <div className="sidebar-info">
                <h4>More Than Just Movies</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </div>
  );
};