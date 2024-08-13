/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Ata Amrullah,</span> frontend developer based in Indonesia.</h1>
        <p>I'm a frontend developer from East Java, Indonesia with 10 years of experience in multiple companies like Microsoft, Tesla, and Apple.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero