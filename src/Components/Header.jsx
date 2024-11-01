import React from 'react'
import logo from '../assets/investment-calculator-logo.png'
import '../index.css'
export default function Header() {
  return (
    <div id="header">
      <img src={logo} alt="logo"/>
      <h1>The Investement Calculator</h1>
    </div>
  )
}
