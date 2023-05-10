import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Figma Import</title>
        <meta property="og:title" content="Figma Import" />
      </Helmet>
      <div className="login-login">
        <img
          alt="unilifeease174"
          src="/playground_assets/unilifeease174-xlyq-300h.png"
          className="login-unilifeease1"
        />
        <img
          alt="unilifeease174"
          src="/playground_assets/unilifeease174-xlyq-300h.png"
          className="login-unilifeease11"
        />
        <div className="login-group1">
          <Link to="/main">
            <img
              alt="Rectangle6132"
              src="/playground_assets/rectangle6132-nhsn-200h.png"
              className="login-rectangle6"
            />
          </Link>
          <span className="login-text">
            <span>University ID</span>
          </span>
          <span className="login-text02">
            <span>Log In</span>
          </span>
          <span className="login-text04">
            <span>Password</span>
          </span>
          <Link to="/main" className="login-text06">
            <span>Log In</span>
          </Link>
          <Link to="/signin" className="login-text08">
            <span>Don’t have an account?</span>
          </Link>
          <span className="login-text10">
            <span>
              <span>
                Log using
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
            </span>
          </span>
          <span className="login-text15">
            <span>OutLook</span>
          </span>
          <span className="login-text17">
            <span>or</span>
          </span>
          <img
            alt="vscodeiconsfiletypeoutlook138"
            src="/playground_assets/vscodeiconsfiletypeoutlook138-ldgt.svg"
            className="login-vscodeiconsfiletypeoutlook"
          />
          <input
            type="password"
            required
            placeholder=" ***********"
            className="login-input"
          />
          <input
            type="text"
            required
            placeholder=" 123 456"
            className="login-input1"
          />
        </div>
        <div className="login-group11">
          <Link to="/main" className="login-navlink1">
            <img
              alt="Rectangle6132"
              src="/playground_assets/rectangle6132-nhsn-200h.png"
              className="login-rectangle61"
            />
          </Link>
          <span className="login-text19">
            <span>University ID</span>
          </span>
          <span className="login-text21">
            <span>Log In</span>
          </span>
          <span className="login-text23">Password</span>
          <Link to="/main" className="login-text24">
            <span>Log In</span>
          </Link>
          <Link to="/signin" className="login-text26">
            <span>Don’t have an account?</span>
          </Link>
          <span className="login-text28">
            <span>
              Log using
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </span>
          <span className="login-text31">
            <span>OutLook</span>
          </span>
          <span className="login-text33">
            <span>or</span>
          </span>
          <img
            alt="vscodeiconsfiletypeoutlook138"
            src="/playground_assets/vscodeiconsfiletypeoutlook138-ldgt.svg"
            className="login-vscodeiconsfiletypeoutlook1"
          />
          <input
            type="password"
            required
            placeholder=" ***********"
            className="login-input2"
          />
          <input
            type="text"
            required
            placeholder=" 123 456"
            className="login-input3"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
