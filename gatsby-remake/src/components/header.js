import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './style/header.css'

const Header = ({ siteTitle }) => (
  <div className="navbar-container">
    <div className="navbar nabar-title">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    {/* these links should be a seperate react component */}
    <div className="navbar navbar-socials">
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <a
          href="mailto:rihards.zauls@gmail.com"
          className="fa fa-envelope-o fa-stack-1x fa-inverse"
        />
      </span>
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <a
          href="https://www.linkedin.com/in/rzauls/"
          className="fa fa-linkedin fa-stack-1x fa-inverse"
        />
      </span>
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <a
          href="https://github.com/rzauls"
          className="fa fa-github fa-stack-1x fa-inverse"
        />
      </span>
    </div>
    <div className="navbar navbar-linkbox">
      <div className="link-item">
        <Link to="/">Home</Link>
      </div>
      <div className="link-item">
        <Link to="/about/">About Me</Link>
      </div>
      <div className="link-item">
        <Link to="/resume/">Resume</Link>
      </div>
      <div className="link-item">
        <Link to="/projects/">Projects</Link>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
