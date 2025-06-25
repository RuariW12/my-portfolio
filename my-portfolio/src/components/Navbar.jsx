import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <ul className='navbar-content'><a href="#home">Home</a></ul>
        <ul className='navbar-content'><a href="#projects">Projects</a></ul>
        <ul className='navbar-content'><a href="#skills">Skills</a></ul>
        <ul className='navbar-content'><a href="#experience">Experience</a></ul>
      </div>
      <div className='navbar-right'>
        <ul className='navbar-content-right'><a href="#contact">Contact</a></ul>
      </div>
    </div>
  );
}

export default Navbar;
