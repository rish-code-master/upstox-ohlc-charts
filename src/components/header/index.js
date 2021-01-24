/**
 * Copyright (c) 2021
 *
 * long description for the file
 *
 * @summary App Component
 * @author Rishabh <rishabh.it.007@gmail.com>
 *
 * Created at     : 2021-01-16 05:00:00 
 * Last modified  : 2021-01-16 05:00:00 
 */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";
import "./_styles.css";

const Header = ({location}) => {
  console.log(location.pathname);
  let uriPath = location.pathname;
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light py-0 header">
    <a href="/" className="navbar-brand">
      <img src={Logo} alt="Upstox" className="p-0 m-0" loading="lazy" height="55" />
    </a>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse lead" id="navbarCollapse">
        <div className="navbar-nav">
            <Link to={'/'} className={`nav-item nav-link ${uriPath === '/' ? 'active text-primary' : ''}`}> Home </Link>
            <Link to={'/live-chart'} className={`nav-item nav-link ${uriPath === '/live-chart' ? 'active text-primary' : ''}`}> Live Chart </Link>
        </div>
    </div>
</nav>
  );
}
export default withRouter(Header);