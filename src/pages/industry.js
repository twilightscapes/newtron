
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


const industry = graphql`
  query industry {
    allFile(filter: { relativeDirectory: { eq: "gallery1" } }) {
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
  const data = useStaticQuery(industry)
  return (
    
 
    
    
	  <CustomBox>
       <Helmet>
          <html lang="en" className="nobg1" />
    </Helmet>
    <Layout>








 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'', zIndex:'1',}}>  




 <section className='section outer'>
 
 <div className="container" style={{padding:'10px'}}>
<h3 className="" style={{textAlign:'center', fontSize:'160%',}}>
How can Hytron help your company?
</h3>
</div>
 
 <div className='container content'>
        
        
 
  <div className="imgbox container" style={{border:'0px solid #222', position:'relative', margin:'0 0 0 0', borderRadius:'', padding:'0', marginLeft:'1rem', overflow:'hidden',}}>
 
 <Image alt="Hytron" filename="IMG_2886.JPG" style={{borderColor:'transparent',}} />
 
 <div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}></div>
 </div>
  <br />


<p>At Hytron, we will provide you with world-class machining, milling and turning services. Our highly trained team of machinists use our state-of-the-art, high-precision CNC machines to manufacture incredible components trusted for their high quality and reliability.</p>

<p>We are proud to support some of the largest industries in the world who are globally recognized market leaders including aerospace/defense, semiconductor,
electronics/telecom, military/government, and medical to mention a few. We have been privileged to have long-term relationships with many of our partners in these industries.</p>


<h4>Learn More</h4>
<p>With our experienced team and advanced manufacturing capabilities, we can become your perfect supply chain partner.</p>

<p>Request a quote to learn more about our services.</p>



 </div>
 </section>
      </ScrollAnimation>
       
      
      
      
      

{/* <section className="  intro section">
      <div className="container" style={{background:'', padding:'2rem',}}>
       <Gallery
        photos={data.allFile.edges}
      /> 
      </div>
</section> */}








    

<div className="content outer">
    <Contact />
    </div>


      
    </Layout>
    </CustomBox>
  )
}

export default Gal1Page
