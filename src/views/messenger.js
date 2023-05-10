import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './messenger.css'

const Messenger = (props) => {
  return (
    <div className="messenger-container">
      <Helmet>
        <title>Messenger - Figma Import</title>
        <meta property="og:title" content="Messenger - Figma Import" />
      </Helmet>
      <div className="messenger-messenger">
        <div className="messenger-group4">
          <img
            alt="Rectangle173226"
            src="/playground_assets/rectangle173226-r9lw-800h.png"
            className="messenger-rectangle17"
          />
          <img
            alt="icroundface43266"
            src="/playground_assets/icroundface43266-8v6b.svg"
            className="messenger-icroundface4"
          />
          <span className="messenger-text">
            <span>See you soon :)</span>
          </span>
          <span className="messenger-text02">Thanks for seeing me today</span>
          <span className="messenger-text03">
            <span>Teo</span>
          </span>
          <img
            alt="Line123260"
            src="/playground_assets/line123260-3tje.svg"
            className="messenger-line12"
          />
          <img
            alt="materialsymbolsarrowright3261"
            src="/playground_assets/materialsymbolsarrowright3261-1e1u.svg"
            className="messenger-materialsymbolsarrowright"
          />
          <span className="messenger-text05">
            <span>Mr. Stephan Hook</span>
          </span>
          <img
            alt="Line133280"
            src="/playground_assets/line133280-gb4.svg"
            className="messenger-line13"
          />
          <img
            alt="Vector3281"
            src="/playground_assets/vector3281-hc9c.svg"
            className="messenger-vector"
          />
          <img
            alt="Vector3253"
            src="/playground_assets/vector3253-pull.svg"
            className="messenger-vector1"
          />
          <img
            alt="Vector3241"
            src="/playground_assets/vector3241-qwqm.svg"
            className="messenger-vector2"
          />
          <img
            alt="Line13229"
            src="/playground_assets/line13229-zliv.svg"
            className="messenger-line1"
          />
          <span className="messenger-text07">
            <span>Are you feeling okay?</span>
          </span>
          <img
            alt="Rectangle113230"
            src="/playground_assets/rectangle113230-wfj-200w.png"
            className="messenger-rectangle11"
          />
          <span className="messenger-text09">
            <span>Messages (3)</span>
          </span>
          <span className="messenger-text11">
            <span>Eren</span>
          </span>
          <img
            alt="Line83228"
            src="/playground_assets/line83228-0s3.svg"
            className="messenger-line8"
          />
          <img
            alt="Line93231"
            src="/playground_assets/line93231-rf6e.svg"
            className="messenger-line9"
          />
          <span className="messenger-text13">
            <span>Thank you</span>
          </span>
          <span className="messenger-text15">
            <span>Ada</span>
          </span>
          <img
            alt="Line113252"
            src="/playground_assets/line113252-c8ql.svg"
            className="messenger-line11"
          />
          <img
            alt="Line103232"
            src="/playground_assets/line103232-dzsa.svg"
            className="messenger-line10"
          />
          <img
            alt="materialsymbolsarrowright3247"
            src="/playground_assets/materialsymbolsarrowright3247-3fy6.svg"
            className="messenger-materialsymbolsarrowright1"
          />
          <img
            alt="materialsymbolsarrowright3254"
            src="/playground_assets/materialsymbolsarrowright3254-44li.svg"
            className="messenger-materialsymbolsarrowright2"
          />
          <img
            alt="icroundface63270"
            src="/playground_assets/icroundface63270-yy4.svg"
            className="messenger-icroundface6"
          />
        </div>
        <img
          alt="Rectangle11354"
          src="/playground_assets/rectangle11354-sho-200h.png"
          className="messenger-rectangle1"
        />
        <div className="messenger-container1">
          <Link to="/messenger">
            <div className="messenger-streamlinemailchatbubbletypingovalmessagesmessageb">
              <div className="messenger-group">
                <img
                  alt="Vector1383"
                  src="/playground_assets/vector1383-2go.svg"
                  className="messenger-vector3"
                />
                <img
                  alt="Vector1384"
                  src="/playground_assets/vector1384-lcko.svg"
                  className="messenger-vector4"
                />
                <img
                  alt="Vector1385"
                  src="/playground_assets/vector1385-7kd8.svg"
                  className="messenger-vector5"
                />
                <img
                  alt="Vector1386"
                  src="/playground_assets/vector1386-pusw.svg"
                  className="messenger-vector6"
                />
              </div>
            </div>
          </Link>
          <Link to="/appointments">
            <img
              alt="basilbookcheckoutline1387"
              src="/playground_assets/basilbookcheckoutline1387-42cdc.svg"
              className="messenger-basilbookcheckoutline"
            />
          </Link>
          <Link to="/mood">
            <div className="messenger-tablermoodplus">
              <div className="messenger-group1">
                <img
                  alt="Vector186"
                  src="/playground_assets/vector186-gprc.svg"
                  className="messenger-vector7"
                />
                <img
                  alt="Vector187"
                  src="/playground_assets/vector187-mtda.svg"
                  className="messenger-vector8"
                />
              </div>
            </div>
          </Link>
          <Link to="/settings">
            <img
              alt="rimenu4line188"
              src="/playground_assets/rimenu4line188-jvcl.svg"
              className="messenger-rimenu4line"
            />
          </Link>
          <img
            alt="materialsymbolshome7118"
            src="/playground_assets/materialsymbolshome7118-s8.svg"
            className="messenger-materialsymbolshome"
          />
        </div>
        <img
          alt="unilifeease11361"
          src="/playground_assets/unilifeease11361-hag4-200h.png"
          className="messenger-unilifeease1"
        />
        <img
          alt="unilifeease11361"
          src="/playground_assets/unilifeease11361-hag4-200h.png"
          className="messenger-unilifeease11"
        />
        <header data-thq="thq-navbar" className="messenger-navbar-interactive">
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="messenger-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="messenger-nav"
            >
              <Link to="/main" className="messenger-navlink4">
                Home
              </Link>
              <Link to="/appointments" className="messenger-navlink5">
                Appointments
              </Link>
              <Link to="/messenger" className="messenger-navlink6">
                Messenger
              </Link>
              <Link to="/mood" className="messenger-navlink7">
                Mood
              </Link>
              <Link to="/settings" className="messenger-navlink8">
                Settings
              </Link>
            </nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="messenger-btn-group"
          ></div>
          <div data-thq="thq-burger-menu" className="messenger-burger-menu">
            <svg viewBox="0 0 1024 1024" className="messenger-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="messenger-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="messenger-nav1"
            >
              <div className="messenger-container2">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="messenger-image"
                />
                <div data-thq="thq-close-menu" className="messenger-menu-close">
                  <svg viewBox="0 0 1024 1024" className="messenger-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="messenger-nav2"
              >
                <span className="messenger-text17">About</span>
                <span className="messenger-text18">Features</span>
                <span className="messenger-text19">Pricing</span>
                <span className="messenger-text20">Team</span>
                <span className="messenger-text21">Blog</span>
              </nav>
              <div className="messenger-container3">
                <button className="messenger-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="messenger-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="messenger-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="messenger-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="messenger-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Messenger
