import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
// import Offerings from '../Offerings'
// import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import { ImPlay } from "react-icons/im"
import Image from '../Image'
import ReactPlayer from 'react-player/lazy'
// import { graphql } from 'gatsby'
// import { HTMLContent } from '../Content'
import Contact from '../Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import PopNewsletter from '../PopNewsletter'
// import ArticleTemplate from '../ArticleTemplate'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import Intro1 from '../Intro1'
import Intro2 from '../Intro2'
// import Intro3 from '../Intro3'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

// .intro:before{
// 	content: "";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// animation: poof 1.5s forwards;
// animation-delay: 1.5s;
// top:0 !important;
// }

.image-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.image-wrap img {
  width: 100vw;
  z-index:0;
}




@media (min-width: 48em) {

  .boom1{font-size:380% !important;}
  .boom2{font-size:250% !important;}
  .boom3{font-size:380% !important;}
  .boom4{font-size:280% !important;}

}

@media (max-width: 48em) {

  .image-wrap {height:auto !important; min-height:300px !important;}
  
  .intro:before{font-size:150% !important}
  .content{flex-direction:column !important;}
  .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
  .pitch{font-size:250% !important; text-align:center;}
  .split {display:block !important; width:100% !important; }
  .split div{max-width:100% !important; background:tranparent !important;}
  .sidebar{margin:2rem 0;}
  .sidebar .logolink{text-align:center !important;}
  .textcontent{margin: 0 !important;}
}




`

const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  easing: 'easeIn',
  arrows: false,

  // prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
  // nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
};

const HomePageTemplate = ({
  title,
  heading,
  description,

  meta_title,
  meta_description,

}) => (
<>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
      <html lang="en" className="fullhead" />
    </Helmet>
    
    





<CustomBox>


<div className='player-wrapper' style={{display:'none', position:'relative', top:'0', zIndex:'0', height:'', overflow:'', filter: 'drop-shadow(0 0 20px #000)' }}>





<ReactPlayer
          className='react-player'
          url="https://www.youtube.com/embed/JOMipAq7ZSk"
          width="100%"
          height="100%"

          autoplay={true}
          background={true}
          loop
          playing
          playsinline
          muted={true}
          showPortrait
          playIcon={
            <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'2', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', paddingTop:'10%'}}>
              
      
      
      
        <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
          <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      
          <span style={{fontWeight:'bold', padding:'0 0 0 1rem', fontSize:'60px'}}>Click To Play</span>
          
          </div>
          </button>}
      
      
      
            light="../assets/transparent.png"
          />


<div style={{display:'block', width:'100vw', height:'100%', overflow:'hidden', position:'relative', top:'0', zIndex:'-1'}}>


       
<Image alt="test" filename="slider-5.jpg" />

</div>


</div>






<div className="intro">
{/* <Intro1 /> */}
{/* <Intro2 /> */}
{/* <Intro3 /> */}
<Intro2 />

{/* <div className="" style={{position:'absolute', top:'60px', left:'0', width:'100vw', height:'100vh', overflow:'hidden', padding:'20px 0 0 0', border:'0px solid red', zIndex:'',}}>
  
  <ScrollAnimation animateIn="fadeIn" delay={1600} style={{position:'relative', top:'0', right:'0',}}>
  <h1
    className="boom1 narrow txtshadow-header mobile-txt"
    style={{
     color: 'white',
      textAlign: 'center', 
      letterSpacing: '.0rem',
    }}
  >
    Quality Manufacturing
  </h1>
  </ScrollAnimation>
  
  
  <ScrollAnimation animateIn="fadeIn" delay={1400} offset={0} style={{position:'relative', top:'0', left:'0', paddingTop:'0', overflow:'hidden', width:'100%',}}>
        <div className=""><h2
          className="boom3 normal txtshadow-header"
          style={{
            color: '#fff',
            textAlign: 'center', 
          }}
        >
         Precision Parts
        </h2></div>
        </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="fadeIn" delay={1700} style={{position:'', top:'0', right:'0',}}>
        <h3
          className="boom4 txtshadow-header mobile-txt"
          style={{
           color: 'white',
            textAlign: 'center',
            textTransform: 'normal', 
          }}
        >
         Done right AND on time
        </h3>
        </ScrollAnimation>

        </div> */}


        

  {/*   <div  className="slidecom" style={{position:'relative', overflow:'', height:'', zIndex:'0'}}>
  

        


         <Fade {...properties}>


       

          <div className="each-slide">
    
              <div style={{position:'absolute', zIndex:'50', width:'', textAlign:'center', border:'0px solid green', marginLeft:'15%', top:'150px'}}>
                <h3 style={{color:'#fff', fontSize:'30px'}}>The Rolex Collection</h3>
                <a href="" style={{color:'#fff'}}>View All Watches</a>
                
                </div>

<a href="/capabilities/" style={{color:'#fff'}}><Image alt="test" filename="img_3136.jpg" /></a>
            </div>
 

          <div className="each-slide">
            <a href="capabilities/" style={{color:'#fff'}}><Image alt="test" filename="slider-4.jpg" /></a>
            </div>

            <div className="each-slide">
            <a href="capabilities/" style={{color:'#fff'}}><Image alt="test" filename="slider-5.jpg" /></a>
            </div>


           

    

          <div className="each-slide">
            <div>
              <span>Slide 3</span>
              <Image alt="test" filename="slide-3.jpg" />
            </div>
          </div>
        </Fade>
      </div> */}




<div className="container textcontent" style={{margin:'3% 12%', padding:'1.5rem'}}>

<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
{/*  <Image alt="Hytron Manufacturing Precision Parts and Machining" filename="IMG_2506.jpg"  width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} /> */}


<h2>Contract Manufacturing</h2>


<div className="container" style={{float: 'right', width:'33vw',  margin:'1rem 0 1rem 1rem', shapeOutside:'round'}}><Image alt="Hytron Manufacturing Precision Parts and Machining" filename="shutterstock_226894963.jpg"  width="220" height="220" /></div>

<p>Hytron is a U. S. owned and operated contract manufacturing service provider. Since 1963, we have partnered with Fortune 500 companies for their component part manufacturing by providing solutions that yield unique competitive advantages. This has resulted in a reduced time-to-market and cost savings for our Customers.</p>

<p>Our manufacturing capabilities range from prototype fabrication to close tolerance machining at the sub-assembly level through complete end-to-end manufacturing in production volumes to support your requirements.</p>
</div>
</div>




<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
{/* <img src="" alt="Placeholder" width="220" height="220" style={{float: '', margin:'0 1rem 1rem 0',}} /> */}

<h2>Lean Manufacturing</h2>

<div className="container"  style={{float: 'left', width:'33vw',  margin:'1rem 1rem 1rem 0', shapeOutside:'round'}}><Image alt="Hytron Manufacturing Precision Parts and Machining" filename="slider2.jpg"  width="220" height="220" /></div>


<p>Products you need –  at the desired volume – when you want them.</p>

<p>
Our supply chain expertise in Build-to-Order product assembly and our proprietary quoting, planning, quality inspection and supply chain management capability create cost effective fulfillment solutions. These lean manufacturing capabilities provide our customers a competitive edge that other contract manufacturers simply can't provide.
Let us show you how we can tailor a “Kanban” replenishment program to meet your needs and avoid supply chain disruptions.</p>
</div>
</div>




<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
{/* <img src="" alt="Placeholder" width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} /> */}
<h2>The Hytron Difference</h2>

<div className="container" style={{float: 'right', width:'33vw',  margin:'1rem 0 1rem 1rem', shapeOutside:'round'}}><Image alt="Hytron Manufacturing Precision Parts and Machining" filename="shutterstock_977142891.jpg"  width="220" height="220" /></div>


<p>With our best-in-class capabilities, high quality standards and with our supply chain tracking system we can deliver your products in the most cost effective timely way. Today more than ever, we are looking for ways to deliver more value to our customers and our continued focus on manufacturing innovation allows us to do so.</p>

<p>Let Hytron assist you with bringing your product to market.</p>
<br />
<br />
</div>
</div>

</div>

<ScrollAnimation animateIn="fadeIn" delay={0}>
<div className="outer" style={{clear:'both'}}>
    <Contact className="container contactform" />
</div>
</ScrollAnimation>
<br />
    
    </div>
    </CustomBox>
  </>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
