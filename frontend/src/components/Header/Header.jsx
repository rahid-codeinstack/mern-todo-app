import React from "react"
import "./Header.css"
import { Input } from "@mui/material"
import { Link } from "react-router-dom"
import {Button} from '@mui/material'



function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 className="nav-logo">
            <span>Todo</span>
            <span>App</span>
          </h1>
        </Link>
        <form className="search-form">
          <Input className="search-input" fullWidth placeholder="search Todo"></Input>
        </form>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" className="nav-link">
              <Button>Home</Button>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/" className="nav-link">
              <Button>about us</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
