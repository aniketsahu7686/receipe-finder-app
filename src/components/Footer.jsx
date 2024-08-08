import React from 'react'
import { Link } from "react-router-dom"
import { FaFacebook, FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer>
        <Link to={""}><FaFacebook/></Link>
        <Link to={""}><FaInstagram/></Link>
        <Link to={""}><FaTwitter/></Link>
        <Link to={""}><FaLinkedin/></Link>
      </footer>
    </div>
  )
}

export default Footer