import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './signin.css'

const Signin = (props) => {
  return (
    <div className="signin-container">
      <Helmet>
        <title>Signin - Figma Import</title>
        <meta property="og:title" content="Signin - Figma Import" />
      </Helmet>
      <div className="signin-register">
        <img
          alt="unilifeease11317"
          src="/playground_assets/unilifeease11317-9088-300h.png"
          className="signin-unilifeease1"
        />
        <img
          alt="unilifeease174"
          src="/playground_assets/unilifeease174-xlyq-300h.png"
          className="signin-unilifeease11"
        />
        <div className="signin-group2">
          <span className="signin-text">
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
          <span className="signin-text05">
            <span>OutLook</span>
          </span>
          <img
            alt="vscodeiconsfiletypeoutlook1341"
            src="/playground_assets/vscodeiconsfiletypeoutlook1341-3km.svg"
            className="signin-vscodeiconsfiletypeoutlook"
          />
          <Link to="/main">
            <img
              alt="Rectangle61320"
              src="/playground_assets/rectangle61320-wuea-200h.png"
              className="signin-rectangle6"
            />
          </Link>
          <span className="signin-text07">
            <span>Sign In</span>
          </span>
          <Link to="/main" className="signin-text09">
            <span>Sign In</span>
          </Link>
          <Link to="/" className="signin-text11">
            <span>Already have an account?</span>
          </Link>
          <span className="signin-text13">
            <span>or</span>
          </span>
          <span className="signin-text15">
            <span>Name</span>
          </span>
          <span className="signin-text17">
            <span>University ID</span>
          </span>
          <span className="signin-text19">
            <span>Password</span>
          </span>
          <input
            type="password"
            required
            placeholder=" ***********"
            className="signin-input input"
          />
          <input
            type="text"
            required
            placeholder=" 123 456"
            className="signin-input1 input"
          />
          <input
            type="text"
            required
            placeholder="Full Name"
            className="signin-input2 input"
          />
        </div>
        <div className="signin-group21">
          <span className="signin-text21">
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
          <span className="signin-text26">
            <span>OutLook</span>
          </span>
          <img
            alt="vscodeiconsfiletypeoutlook1341"
            src="/playground_assets/vscodeiconsfiletypeoutlook1341-3km.svg"
            className="signin-vscodeiconsfiletypeoutlook1"
          />
          <Link to="/main" className="signin-navlink1">
            <img
              alt="Rectangle61320"
              src="/playground_assets/rectangle61320-wuea-200h.png"
              className="signin-rectangle61"
            />
          </Link>
          <span className="signin-text28">
            <span>Sign In</span>
          </span>
          <Link to="/main" className="signin-text30">
            <span>Sign In</span>
          </Link>
          <Link to="/" className="signin-text32">
            <span>Already have an account?</span>
          </Link>
          <span className="signin-text34">
            <span>or</span>
          </span>
          <span className="signin-text36">
            <span>Name</span>
          </span>
          <span className="signin-text38">
            <span>University ID</span>
          </span>
          <span className="signin-text40">
            <span>Password</span>
          </span>
          <input
            type="password"
            required
            placeholder=" ***********"
            className="signin-input3 input"
          />
          <input
            type="text"
            required
            placeholder=" 123 456"
            className="signin-input4 input"
          />
          <input
            type="text"
            required
            placeholder="Full Name"
            className="signin-input5 input"
          />
        </div>
      </div>
    </div>
  )
}

export default Signin
