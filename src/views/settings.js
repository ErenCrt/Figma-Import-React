import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './settings.css'

const Settings = (props) => {
  return (
    <div className="settings-container">
      <Helmet>
        <title>Settings - Figma Import</title>
        <meta property="og:title" content="Settings - Figma Import" />
      </Helmet>
      <div className="settings-settings">
        <div className="settings-group7">
          <div className="settings-notifications">
            <img
              alt="Rectangle106311"
              src="/playground_assets/rectangle106311-x2zj-200h.png"
              className="settings-rectangle10"
            />
            <img
              alt="Rectangle96311"
              src="/playground_assets/rectangle96311-kamo-600h.png"
              className="settings-rectangle9"
            />
            <span className="settings-text">Settings</span>
            <span className="settings-text01">Profile Settings</span>
            <span className="settings-text02">Privacy</span>
            <span className="settings-text03">Contact us</span>
            <span className="settings-text04">
              <span className="settings-text05">Mood Tracker Settings</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="settings-text07">
              Notifications Settings
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <img
              alt="materialsymbolssettings6367"
              src="/playground_assets/materialsymbolssettings6367-hc73.svg"
              className="settings-materialsymbolssettings"
            />
            <img
              alt="Line26312"
              src="/playground_assets/line26312-xm6o.svg"
              className="settings-line2"
            />
            <img
              alt="Line36312"
              src="/playground_assets/line36312-ff2u.svg"
              className="settings-line3"
            />
            <img
              alt="Line46312"
              src="/playground_assets/line46312-se4j.svg"
              className="settings-line4"
            />
            <img
              alt="Line56313"
              src="/playground_assets/line56313-6q7.svg"
              className="settings-line5"
            />
            <img
              alt="Line66313"
              src="/playground_assets/line66313-d5di.svg"
              className="settings-line6"
            />
            <div className="settings-materialsymbolsadminpanelsettingsrounded"></div>
            <img
              alt="materialsymbolsdisplaysettings6316"
              src="/playground_assets/materialsymbolsdisplaysettings6316-7elu.svg"
              className="settings-materialsymbolsdisplaysettings"
            />
          </div>
          <img
            alt="Vector6315"
            src="/playground_assets/vector6315-ark9.svg"
            className="settings-vector"
          />
          <img
            alt="materialsymbolssettingsaccountbox6320"
            src="/playground_assets/materialsymbolssettingsaccountbox6320-6g82.svg"
            className="settings-materialsymbolssettingsaccountbox"
          />
          <img
            alt="tablermessagecircle1938"
            src="/playground_assets/tablermessagecircle1938-b7za.svg"
            className="settings-tablermessagecircle"
          />
          <img
            alt="Vector6320"
            src="/playground_assets/vector6320-y1re.svg"
            className="settings-vector1"
          />
        </div>
        <img
          alt="Rectangle11354"
          src="/playground_assets/rectangle11354-sho-200h.png"
          className="settings-rectangle1"
        />
        <div className="settings-container1">
          <Link to="/messenger">
            <div className="settings-streamlinemailchatbubbletypingovalmessagesmessageb">
              <div className="settings-group">
                <img
                  alt="Vector1383"
                  src="/playground_assets/vector1383-2go.svg"
                  className="settings-vector2"
                />
                <img
                  alt="Vector1384"
                  src="/playground_assets/vector1384-lcko.svg"
                  className="settings-vector3"
                />
                <img
                  alt="Vector1385"
                  src="/playground_assets/vector1385-7kd8.svg"
                  className="settings-vector4"
                />
                <img
                  alt="Vector1386"
                  src="/playground_assets/vector1386-pusw.svg"
                  className="settings-vector5"
                />
              </div>
            </div>
          </Link>
          <Link to="/appointments">
            <img
              alt="basilbookcheckoutline1387"
              src="/playground_assets/basilbookcheckoutline1387-42cdc.svg"
              className="settings-basilbookcheckoutline"
            />
          </Link>
          <Link to="/mood">
            <div className="settings-tablermoodplus">
              <div className="settings-group1">
                <img
                  alt="Vector186"
                  src="/playground_assets/vector186-gprc.svg"
                  className="settings-vector6"
                />
                <img
                  alt="Vector187"
                  src="/playground_assets/vector187-mtda.svg"
                  className="settings-vector7"
                />
              </div>
            </div>
          </Link>
          <Link to="/settings">
            <img
              alt="rimenu4line188"
              src="/playground_assets/rimenu4line188-jvcl.svg"
              className="settings-rimenu4line"
            />
          </Link>
          <Link to="/main">
            <img
              alt="materialsymbolshome7118"
              src="/playground_assets/materialsymbolshome7118-s8.svg"
              className="settings-materialsymbolshome"
            />
          </Link>
        </div>
        <img
          alt="unilifeease11361"
          src="/playground_assets/unilifeease11361-hag4-200h.png"
          className="settings-unilifeease1"
        />
        <header data-thq="thq-navbar" className="settings-navbar-interactive">
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="settings-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="settings-nav"
            >
              <Link to="/main" className="settings-navlink05">
                Home
              </Link>
              <Link to="/appointments" className="settings-navlink06">
                Appointments
              </Link>
              <Link to="/messenger" className="settings-navlink07">
                Messenger
              </Link>
              <Link to="/mood" className="settings-navlink08">
                Mood
              </Link>
              <Link to="/settings" className="settings-navlink09">
                Settings
              </Link>
            </nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="settings-btn-group"
          ></div>
          <div data-thq="thq-burger-menu" className="settings-burger-menu">
            <svg viewBox="0 0 1024 1024" className="settings-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="settings-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="settings-nav1"
            >
              <div className="settings-container2">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="settings-image"
                />
                <div data-thq="thq-close-menu" className="settings-menu-close">
                  <svg viewBox="0 0 1024 1024" className="settings-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="settings-nav2"
              >
                <span className="settings-text08">About</span>
                <span className="settings-text09">Features</span>
                <span className="settings-text10">Pricing</span>
                <span className="settings-text11">Team</span>
                <span className="settings-text12">Blog</span>
              </nav>
              <div className="settings-container3">
                <button className="settings-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="settings-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="settings-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="settings-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="settings-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <img
          alt="unilifeease11361"
          src="/playground_assets/unilifeease11361-hag4-200h.png"
          className="settings-unilifeease11"
        />
      </div>
    </div>
  )
}

export default Settings
