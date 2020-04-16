
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

<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>




<div className="container" style={{padding:'10px'}}>
<h3 className="" style={{textAlign:'center', fontSize:'160%',}}>
Industries that Hytron serves
</h3>
</div>



<div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'top', flexWrap:'no-wrap', position:'relative',  width:'100%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{width:'', zIndex:'1',}}>    
<div className="container speech" style={{ width:'100%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative', boxShadow: '0px 0px 5px 0px black', }}>

<p>
{/* <span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br /> */}


<h2>Innovation</h2>

<p>Innovation is how we create value for our customers who are competing in today’s globally competitive marketplace. This continuing innovation process enables us to deliver more value while maintaining the highest degree of quality possible. Our unique expertise, derived from years of experience in a range of industries provide high-yield and high-volume production processes.</p>

<br /><br />
<h2>Production Capabilities</h2>

<p>Our production capabilities and flexibility can take your application from concept to full production. Our product development assistance and in-house prototyping will ensure your production requirements can be met. Fast turn around on critical projects is one of Hytron’s greatest strengths.</p>



</p>

</div>
</ScrollAnimation>







 <ScrollAnimation animateIn="fadeIn" animateOut="" animateOnce={true} delay={100} style={{display:'none', width:'100%', padding:'0', order:'2 !important',  zIndex:'0',}}> 
 


<div className="imgbox container" style={{border:'0px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'', padding:'2rem', marginLeft:'1rem', overflow:'hidden', background:'#222', color:'#fff',}}>

<h4 style={{textAlign:'center'}}>Partners:</h4>
 <Image alt="Co-worker talks about Todd Lambert" filename="honeywell-logo.png" style={{borderColor:'transparent',}} />
 <br />
  <Image alt="Co-worker talks about Todd Lambert" filename="eaton-logo.png" style={{borderColor:'transparent',}} />
  <br />
     <Image alt="Co-worker talks about Todd Lambert" filename="covidien-logo.png" style={{borderColor:'transparent',}} />
  <br />
   <Image alt="Co-worker talks about Todd Lambert" filename="freedom-logo.png" style={{borderColor:'transparent',}} />
   <br />
   <Image alt="Co-worker talks about Todd Lambert" filename="ichor-logo.png" style={{borderColor:'transparent',}} />
   <br />
   <Image alt="Co-worker talks about Todd Lambert" filename="ultra-logo.png" style={{borderColor:'transparent',}} />
   <br />
   <Image alt="Co-worker talks about Todd Lambert" filename="wyatt-logo.png" style={{borderColor:'transparent',}} />
   <br />
   <Image alt="Co-worker talks about Todd Lambert" filename="zodiac-logo.png" style={{borderColor:'transparent',}} />
   <br />
</div>
</ScrollAnimation>

 </div>
 
 
 
 








<div className="container" style={{padding:'10px'}}>
<h3 className="" style={{textAlign:'center', fontSize:'160%',}}>
How can Hytron help your company?
</h3>
</div>

</section>


 <section className='section outer'>
 <div className='container content'>
        
        


<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>



 </div>
 </section>
      
       
      
      
      
      

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
