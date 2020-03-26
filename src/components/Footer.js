import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll'

import styled from 'styled-components'

const CustomBox = styled.div`
.players{color:#C82C10 !important;}
.honda{color:#666;}

.honda:before{
position: absolute; top: 30px; left: 0px; width: 100%; border-bottom-width: 12px; border-bottom-style: solid; transform: rotate(8deg); text-align: center; font-size: 450%; z-index: 1;

}


`
/*
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
*/





{/* var masters = new Date(2020,0, 20);
  var today = new Date();
  if (today>= masters){
    document.body.className += ' masters';
 }
var pga = new Date(2020,4, 19);
  var today = new Date();
  if (today>= pga){
    document.body.className += ' pga';
 }
 var usopen = new Date(2020,5, 16);
  var today = new Date();
  if (today>= usopen){
    document.body.className += ' usopen';
 }
  var theopen = new Date(2020,6, 21);
  var today = new Date();
  if (today>= theopen){
    document.body.className += ' theopen';
 } */}



const Footer = class extends React.Component {
  render() {
    return (
      
       <CustomBox>
       
	    <ScrollAnimation animateIn="fadeIn" duration={2} initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          



 

<br />
<h2 style={{textAlign:'center', margin:'0 0 1rem 0',}}>2020 Tournaments</h2>
<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:''}}>

<li className="honda">Honda Classic<br /><br />Feb 27 -<br /> March 1<br /><br />@ PGA National</li>


<li className="players">The Players<br /><br />March<br /> 12 - 15<br /><br />@ TPC Sawgrass</li>

<li className="anainpration">ANA Inspiration<br /><br />April<br /> 2 - 5<br /><br />@ Mission Hills</li>

<li className="masters">The Masters<br /><br />April<br /> 9 - 12<br /><br />@ Augusta</li>


<li className="pga">The PGA<br /><br />May<br /> 14 - 17<br /><br />@ TPC Harding Park</li>








</ul>

<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', marginTop:'.5rem'}}>

<li className="memorial">The Memorial<br /><br />June<br /> 4 - 7< br /><br />@ Muirfield</li>

<li className="usopen">The U.S. Open<br /><br />June<br /> 18 - 21<br /><br />@ Winged Foot</li>


<li className="theopen">The Open<br /><br />July<br /> 16 - 19<br /><br />@ Royal St. George</li>

<li className="senior">Senior British Open<br /><br />July<br /> 23 - 26<br /><br />@ Sunningdale</li>

<li className="northern">Northern Trust<br /><br />August<br /> 13 - 16<br /><br />@ TPC Boston</li>
</ul>

<br />
<br />
{/* <div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: '90%'}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div> */}



{/* <div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: '70%'}}>Copyright &copy; {(new Date().getFullYear())}</div> */}
        </div>
        
      </footer>
      </ScrollAnimation>
       </CustomBox>
    )
  }
}

export default Footer

