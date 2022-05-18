import React, { useState } from 'react';

import { useFormik } from 'formik';

import { Link } from 'react-router-dom';

export const Login = () => {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert('login success');
    }
  });

  return (
    <div className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black main">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img className='img' src="Tmdb-new-logo.png" alt="logo" />
                    </div>
                    <hr />
                    <form onSubmit={formik.handleSubmit}>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example11" name="email" className="form-control" value={formik.values.email}
                          placeholder="Email address" onChange={formik.handleChange} />
                        <label className="form-label" htmlFor="form2Example11">Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example22" className="form-control" name="password" value={formik.values.password}
                        placeholder="Password" onChange={formik.handleChange} />
                        <label className="form-label" htmlFor="form2Example22">Password</label>
                      </div>
                      <hr />

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Login</button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link to="/register">
                          <button type="button" className="btn btn-outline-danger">Register</button>
                        </Link>
                      </div>
                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center bg-primary bg-gradient">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">More Than Just Movies</h4>
                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
            {
              success ?
                <div className="alert alert-success alert-style" role="alert">
                  {success.message}
                </div> : ''
            }
            {
              error &&
              <div className="alert alert-danger alert-style" role="alert">
                {error}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}