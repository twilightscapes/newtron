
import React from 'react'
import Layout from '../components/Layout'
// import Install from '../components/Install'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import Gallery from '../components/Gallery'
import Image from '../components/Image'
// import { Link } from 'gatsby'
import Contact from '../components/Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import GalleryMenu from '../components/GalleryMenu'
// import { FiZoomIn } from 'react-icons/fi'
// import PopSemi from '../components/PopSemi'

import styled from "styled-components"
const CustomBox = styled.div`

.intro:before, .intro:after{display:none !important}
body.dark:after, body.light:after{

content: (''); background-image: url('../img/hytron-bg1.svg') !important; height: 100vh; width:100%; background-size: cover; position:fixed; top:0; left:0; z-index:-1; animation: fadeIn 6s;
}




@media (min-width: 50rem) {
.speech1{padding:20px 50px !important;}
}

@media (max-width: 48rem) {
.intro:before{font-size:200%;}
.speech:after {right: -28px;}
.nowrap{display:block !important; width:100% !important; height:100% !important
}

@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
.gatsby-image-wrapper{transform: scale(1.25);}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/





`


const work = graphql`
  query work {
    allFile(filter: { relativeDirectory: { eq: "parts1" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`


    
    
const Gal1Page = () => {
  const data = useStaticQuery(work)
  return (
    
 
    
    
	  <CustomBox>
       <Helmet>
          <html lang="en" className="nobg" />
    </Helmet>
    <Layout>

<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>




<div className="container" style={{padding:'10px'}}>
<h3 className="" style={{textAlign:'center', fontSize:'160%',}}>
Manufacturing and Testing Capabilities
</h3>
</div>



<div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'top', flexWrap:'no-wrap', position:'relative',  width:'100%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'', zIndex:'1',}}>    
<div className="container speech" style={{ width:'100%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative', boxShadow: '0px 0px 5px 0px black', }}>


{/* <span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br /> */}



<h2>Quality Management System</h2>

<p>Hytron’s Quality Management System (QMS) is <a style={{color:' rgb(219, 38, 0)'}} href="../Hytron-Cert-AS9100D-with ISO-9001-exp2024-AS6.pdf" title="View Certification" target="_blank">ISO 9001:2015 and AS9100D certified</a> which is the standard for various high demand industries. As a certified contract manufacturer, this certification underscores our commitment to quality and on-time delivery of the products and services we provide to our customers.</p>

<p>With our Haas CNC machining centers, Hytron provides precision CNC machining of numerous materials, including stainless steel and aluminum machining. We specialize in precision milling and turning while also providing other machining services, which cover the entire production process such as  conventional milling, drilling, turning, and sawing, as well as grinding and honing, deburring, and part marking. With our approved, certified suppliers, we can also provide heat treating, welding, plating, and painting.</p>

<p>We specialize in small to medium sized parts in many different quantities. From one-piece short run prototypes to very large volume production. Whether your part contains one component or many, needs special processing or assembly capabilities, our production team can take your project from conception to production. We are the trusted go-to source for a variety of industries for over 55 years in business. Let our dedicated team take your vision/concept and make it a reality.</p>

<p>We have built a long standing reputation as a manufacturer of precision products that are field proven and time tested.  Contact one of our professionals for information on your specific manufacturing requirements.</p>
<br />
<h3> ISO 9001:2015 and AS9100D certified </h3>
<br /><br  />

<a href="../Hytron-Cert-AS9100D-with ISO-9001-exp2024-AS6.pdf" title="View Certification" target="_blank" style={{borderColor:'transparent', margin:'10px 5px', paddingBottom:'50px'}}><Image alt="Hytron is ISO 9001:2015 and AS9100D certified" filename="Hytron-Cert-AS9100D-with ISO-9001-exp2024-AS6.jpg" /></a>


</div>
</ScrollAnimation>







<ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'100%', padding:'0', order:'2 !important',  zIndex:'0',}}> 
 

 
 <div className="imgbox container" style={{border:'0px solid #222', position:'relative', margin:'0 0 0 0', borderRadius:'', padding:'0', marginLeft:'1rem', overflow:'hidden',}}>
 
 <Image alt="Hytron Capabilities" filename="IMG_3859.jpg" style={{borderColor:'transparent',}} />
 
 <div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Calibration testing</div>
 
 

 </div>
  
  <br />
  
  
   <div className="imgbox container" style={{display:'none', border:'0px solid #222', position:'relative', margin:'0 0 0 0', borderRadius:'', padding:'0', marginLeft:'1rem', overflow:'hidden',}}>
  
  <Image alt="Hytron Capabilities" filename="IMG_3513.jpg" style={{borderColor:'transparent',}} />
  
  <div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}></div>
  
  
 
  </div>
   
   <br />

<div className="imgbox container" style={{border:'0px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'', padding:'2rem', marginLeft:'1rem', overflow:'hidden', background:'#222', color:'#fff',}}>

<h4>Inspection Equipment</h4>

<ul>
<li>Tesa Micro-Hite CMM</li>
<li>Brown &amp; Sharpe Gage 2000 CMM</li>
<li>Scherr-Tumico Quadra-Check 200 Comparator</li>
<li>Scheer-Tumico 14” Optical Comparator</li>
<li>Rockwell Hardness Tester</li>
<li>Surface Plates 24" x 48" Max</li>
<li>Extensive line of Quality Measuring Equipment</li>
</ul>


</div>
</ScrollAnimation>

 </div>
 
 </section>
 
 














<br /><br />
<section className="about1 section" style={{padding:'0 4%', overflow:'hidden',}}>

<div className="container" style={{padding:'10px', margin:'0 12% 1rem 12%',}}>
<h2 className="" style={{textAlign:'center', fontSize:'160%',}}>
Equipment List
</h2>
</div>



<div className="container">
<h2 style={{textAlign:'center', margin:'0 0 10px 0'}}>CNC Mills – Total: 25</h2>
 <Image alt="Co-worker talks about Todd Lambert" filename="capabilities/capability1.jpg" style={{borderColor:'transparent', display:'inline-block'}} />
<ul className="exif" style={{background:'#666', clear:'both', margin:'20px'}}>
<li className="" style={{width:'', textAlign:'center'}}>(13) HAAS VF-2</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) HAAS VF-O</li>
<li className="" style={{width:'', textAlign:'center'}}>(6) HAAS VF-OE</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) HAAS VF-4</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) HAAS VF-5</li>
<li className="" style={{width:'', textAlign:'center'}}>(3) HAAS TM-1</li>
</ul>
</div>

<div className="container">
<h2 style={{textAlign:'center', margin:'0 0 10px 0'}}>CNC Lathes – Total: 7</h2>
 <Image alt="Co-worker talks about Todd Lambert" filename="capabilities/capability3.jpg" style={{borderColor:'transparent',}} />
<ul className="exif" style={{background:'#666', clear:'both', margin:'20px'}}>
<li className="" style={{width:'', textAlign:'center'}}>(1) HAAS SL-10 W/ Bar Feeder</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) HAAS SL-10</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) HAAS GT-10 W/ Bar Feeder</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) HAAS GT-10</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) Hardinge T-42 W/ Bar Feeder</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) Hardinge Cobra 42</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) Hardinge HLV-H</li>
</ul>
</div>


<div className="container">
<h2 style={{textAlign:'center', margin:'0 0 10px 0'}}>Other Equipment</h2>
 <Image alt="Co-worker talks about Todd Lambert" filename="capabilities/capability5.jpg" style={{borderColor:'transparent',}} />
<ul className="exif" style={{background:'#666', clear:'both', margin:'20px'}}>
<li className="" style={{width:'', textAlign:'center'}}>(2) Doall Bandsaw C-916A</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) Doall Vertical Band</li>
<li className="" style={{width:'', textAlign:'center'}}>(2) Crest Ultrasonic Parts Cleaner</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) K.O. Lee Tool Grinder</li>
<li className="" style={{width:'', textAlign:'center'}}>(2) Vector 200 Extrude Hone Machine</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) Extrude Hone Coolpulse 200 Polishing Machine</li>
<li className="" style={{width:'', textAlign:'center'}}>(2) Trinco Sand Blast Machine</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) 18” vibratory tumbler</li>
<li className="" style={{width:'', textAlign:'center'}}>(1) Webvend Automated Tool Crib</li>
<li className="" style={{width:'', textAlign:'center'}}>(2) Universal Laser Marking Machine</li>
<li className="" style={{width:'', textAlign:'center'}}>Bench and pedestal grinding and buffing machines</li>
</ul>
</div>

</section>


<br /><br />
<section className="  intro section">

<div className="container" style={{padding:'10px', margin:'0 10% 1rem 10%',}}>
<h3 className="" style={{textAlign:'center', fontSize:'160%',}}>
Examples Of Our Work
</h3>
</div>

      <div className="container" style={{background:'', padding:'2rem',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
</section>






<br />
<br />
    

<div className="content outer">
    <Contact />
    </div>


      
    </Layout>
    </CustomBox>
  )
}

export default Gal1Page
