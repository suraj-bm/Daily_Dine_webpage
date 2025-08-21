"use client";

import { Fragment, useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/navbar.css";
interface NavBarprops{
  onTabChange:(Tab:string)=>void;

}

export default function NavBar({onTabChange}:NavBarprops) {
  const { data: session } = useSession();
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <img
            src="/Daily_dine.jpg"
            alt="Logo missing"
            width={60}
            height={60}
            className="rounded-circle"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button onClick={()=>{onTabChange("message")}} className="nav-link active">
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button onClick={()=>{onTabChange("features")} }className="nav-link">
                  Features
                </button>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/about" className="dropdown-item">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="dropdown-item">
                      FAQ's
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link href="/info" className="dropdown-item">
                      Wanna try?🤤
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>

            {/* Profile icon */}
            {session?.user && (
              <div className="nav-item dropdown">
                <img
                  src={session.user.image || "/default-profile.png"}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-circle"
                  style={{ cursor: "pointer" }}
                  onClick={() => setProfileOpen(!profileOpen)}
                />
                {profileOpen && (
                  <ul className="dropdown-menu dropdown-menu-end show" style={{ position: "absolute", right: 0 }}>
                    <li>
                      <Link href="/profile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => signOut()}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
