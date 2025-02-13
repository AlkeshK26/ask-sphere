import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
    const hideFooter = location.pathname === "/login" || location.pathname === "/signup";
  
    if(hideFooter) return null;
  return (
    <div>
      Footer
    </div>
  )
}

export default Footer
