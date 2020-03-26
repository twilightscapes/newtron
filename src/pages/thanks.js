import React from 'react'
import Layout from '../components/Layout-noc'
import logo from '../img/pick6golf-final.svg'
import { Link } from 'gatsby'

const Terms = () => (
  <Layout>
    <section className="outer section section--gradient">
      <div className="container" style={{padding: '2rem'}}>
      <h1 style={{textAlign:'center'}}>Thank you!</h1>
    
    <h3>You should receive an email confirming your picks, shortly.</h3>

<div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center',}}>
<Link to="/" className="" title="Logo - Back To Home">
    <img style={{width:'400px',}} className="logo fadeInDown" src={logo} alt="Pick 6 Logo" /><br />
    Return to Home
    </Link>
</div>


    </div>
    </section>
  </Layout>
)

export default Terms
