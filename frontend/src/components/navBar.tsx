"use client";
import { Fragment, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import "../styles/navbar.css"

export default function NavBar() {
    useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);

    return (<Fragment>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <img src="/Daily_dine.jpg" alt="Logo missing" width={60} height={60} className="rounded-circle"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/features">Features</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
  <li>
    <Link href="/about" className="dropdown-item">About</Link>
  </li>
  <li>
    <Link href="/faq" className="dropdown-item">FAQ's</Link>
  </li>
  <li><hr className="dropdown-divider" /></li>
  <li>
    <Link href="/info" className="dropdown-item">Wanna try?🤤</Link>
  </li>
</ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/login">Login</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</Fragment>
);
    
}