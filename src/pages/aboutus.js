
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
import { FaFileDownload } from 'react-icons/fa'
 
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
.nowrap{display:block !important; width:100% !important;
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


const aboutus = graphql`
  query aboutus {
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
  const data = useStaticQuery(aboutus)
  return (
    
 
    
    
	  <CustomBox>
       <Helmet>
          <html lang="en" className="nobg1" />
    </Helmet>
    <Layout>

<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden', background:'#666',}}>


 <Image alt="Co-worker talks about Todd Lambert" filename="hytron-facility.jpg" style={{borderColor:'transparent',}} />

<div className="container" style={{padding:'10px'}}>
<h1 className="" style={{textAlign:'center', fontSize:'180%',}}>
About Hytron Manufacturing
</h1>
</div>





<div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'top', flexWrap:'no-wrap', position:'relative',  width:'100%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'', zIndex:'1',}}>    
<div className="container speech" style={{ width:'100%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative', boxShadow: '0px 0px 5px 0px black', }}>

<p>
{/* <span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br /> */}



<h2>Hytron Manufacturing Inc.</h2>



<p>Founded in 1963, Hytron manufactures superior quality precision metal components to some of the most diverse industries in the global marketplace throughout the world. We utilize the latest in computer integrated manufacturing technology to ensure the highest level of precision, quality and efficiency in conformance with customer requirements.</p>


<p>Hytron Manufacturing produces a wide variety of products ranging from complex machined components to multi-part, custom engineered fabrications and assemblies. We specialize in high precision mill and lathe work at our 13,000 square foot state-of-the-art manufacturing facility.</p>

<p>For over 55 years we have serviced the diverse needs of major industries. Hytron understands how to produce quality products in less time and for less money.</p>

</p>

</div>
</ScrollAnimation>







 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'100%', padding:'0', order:'2 !important',  zIndex:'0',}}> 
 

 <div className="imgbox container" style={{border:'0px solid #222', position:'relative', margin:'0 0 0 0', borderRadius:'', padding:'0', marginLeft:'1rem', overflow:'hidden',}}>

<Image alt="Co-worker talks about Todd Lambert" filename="img_3136.jpg" style={{borderColor:'transparent',}} />

<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}></div>
</div>
 <br />
 <div className="imgbox container" style={{border:'0px solid #222', position:'relative', margin:'0 0 0 0', borderRadius:'', padding:'0', marginLeft:'1rem', overflow:'hidden',}}>

<Image alt="Co-worker talks about Todd Lambert" filename="capability1.jpg" style={{borderColor:'transparent',}} />

<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}></div>
</div>
  
 
</ScrollAnimation>

 </div>
 
 </section>
 
 
 

 

 
 
  <section className='section outer'>
  
   <div className="container" style={{padding:'10px'}}>
   <h3 className="" style={{textAlign:'center', fontSize:'160%',}}>
  Employment at Hytron
   </h3>
   </div>
   
   
  <div className='container content'>
         
         
 
 
<h2>Careers</h2>
 
 <p>We offer very challenging job opportunities producing parts for some of the most exciting global industries. Hytron offers it's full-time employees very competitive wages and a complete range of generous benefits which include a 401K retirement plan, paid vacation, paid holidays and optional medical and dental insurance plans. </p>
 
 <h4>Current Positions Available</h4>
 
 <h3><strong>CNC Operator</strong></h3>
 <p>Hytron is currently looking for CNC operators. Preference will be given to candidates that have experience in CNC laser cutting and have a minimum of two years experience. Successful candidates must have Vertical or Horizontal Machine experience and a commitment to quality, safety, and customer satisfaction.</p>
 
 <h3><strong>CNC Setup Technician</strong></h3>
 <p>Hytron is currently looking for an experienced CNC setup technician for our HAAS vertical mills. Minimum of 5 years experience and must be familiar with our Mastercam Software. Successful candidates must have Vertical or Horizontal Machine experience and a commitment to quality, safety, and customer satisfaction.</p>
 
 <h4>Other Positions Not Currently Available</h4>
 <strong>Quality Control Inspector</strong><br />
 <strong>CNC Lathe Operator</strong><br />
 <strong>Tool & Die Maker</strong><br />
 
 We currently operate two shifts (with some occasional overtime):<br />
 1st Shift - Hours 6:00am - 2:30pm Mon-Fri<br />
 2nd Shift - Hours 2:30:pm - 11:00pm Mon-Fri<br />
 <br />
 <p>If you have the talent, believe you qualify, and want to join our team then please fill out our online contact form, submit your resume and download our Job Application form. Complete the form and upload it to us for evaluation and possible job interview.</p>
 


<div className=" "  style={{color:'#fff', textDecoration:'none', display:'flex', justifyContent:'center', position:'relative', margin:'0 auto', padding:'2rem',}}>

<a target="_blank" href="hytron-manufacturing-job-app.pdf" style={{textDecoration:'none'}}><p style={{padding:'4px 10px', borderRadius:'3px'}} class="grad special">Download Job Application <div style={{float:'right', position:'relative', padding:'0 0 0 10px'}}> <FaFileDownload /></div></p></a></div>
 
  </div>
  </section>
 

 
 
 
 
 
 
 

 
 
 


 <section className='section outer'>
<div className='container content'>
        
      
      



<div style={{width:'50%', margin:'0 auto', textAlign:'center',}}>
<h3 className="" style={{ fontSize:'160%',}}>
Our Location
</h3><br />

<p><strong>Hytron Manufacturing, Inc.</strong><br />
15582 Chemical Lane<br />
Huntington Beach, CA 92649<br />


      
Phone: <a className="call-button btn" href="tel:7149036701">(714) 903-6701</a><br />
Fax: (714) 903-4381</p>
</div>

<iframe className="" width="100%" height="280" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps?t=m&amp;q=Hytron+Manufacturing,+Inc.+15582+Chemical+Lane+Huntington+Beach,+CA+92649&amp;ie=UTF8&amp;hq=Hytron+Manufacturing,+Inc.&amp;hnear=15582+Chemical+Ln,+Huntington+Beach,+California+92649&amp;cid=11221569908383745326&amp;ll=33.744397,-118.027239&amp;spn=0.034258,0.054932&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>

<br /><small><a target="_blank" href="https://www.google.com/maps?t=m&amp;q=Hytron+Manufacturing,+Inc.+15582+Chemical+Lane+Huntington+Beach,+CA+92649&amp;ie=UTF8&amp;hq=Hytron+Manufacturing,+Inc.&amp;hnear=15582+Chemical+Ln,+Huntington+Beach,+California+92649&amp;cid=11221569908383745326&amp;ll=33.744397,-118.027239&amp;spn=0.034258,0.054932&amp;z=14&amp;iwloc=A&amp;source=embed" >View Larger Map</a></small>





</div>
</section>






    

<div className="content outer">
    <Contact />
    </div>


      
    </Layout>
    </CustomBox>
  )
}

export default Gal1Page
