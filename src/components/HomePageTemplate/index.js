import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../img/pick6golf-final.svg'
// import Install from '../Install'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Image from '../Image'
import { graphql } from 'gatsby'
import { HTMLContent } from '../Content'
import Contact from '../Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import PopNewsletter from '../PopNewsletter'
// import ArticleTemplate from '../ArticleTemplate'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import Intro1 from '../Intro1'
// import Intro2 from '../Intro2'
// import Intro3 from '../Intro3'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

// .intro:before{
// 	content: "Todd Leads A Dual-Life";
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

hr{ 
  border:1px dotted #999;
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
  
  
}




`



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
    <html className="fullhead" />
  </Helmet>
  
  





<CustomBox>
<div className="intro">
{/* <Intro1 /> */}
{/* <Intro2 /> */}
{/* <Intro3 /> */}




<div className="outer">
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden', paddingTop:'0', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  

 <div className="" style={{position:'absolute', top:'60px', left:'0', width:'100vw', height:'100vh', overflow:'hidden', padding:'20px 0 0 0', border:'0px solid red', zIndex:'1',}}>
  
  

   

  
  
  
  <ScrollAnimation animateIn="fadeIn" delay={1400} offset={0} style={{position:'relative', paddingTop:'5%', overflow:'hidden', width:'100%', display:'flex', justifyContent:'center', verticalAlign:'center', alignContent:'center', alignItems: 'center',}}>
  
  <div className="container innerpanel" style={{padding:'1rem', backgroundColor:'#fff', width:'50%', borderRadius:'10px', filter:'blur(0px)',}}>
     <img className="logo" src={logo} alt="Pick 6 Logo" style={{maxHeight:'300px'}} />
     </div>
    </ScrollAnimation>
        
        
  <ScrollAnimation animateIn="bounceInUp" delay={2050} style={{position:'', top:'0', right:'0',}}>
        <h3
          className="boom4 txtshadow-header mobile-txt"
          style={{
           color: 'white',
            textAlign: 'center',
            textTransform: 'normal', 
          }}
        >
        a charity tournament
        </h3>
        </ScrollAnimation>


        




        
        </div>
        
        
        

<div className="" style={{position:'fixed', top:'0', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'-1',}}>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} delay={100}>
<div id="slideshow">
  <div className="slide-wrapper"  style={{position:'relative', zIndex:'0',}}>
  
   
   
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Stars" filename="masters.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Camp" filename="andrews.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Mushroom" filename="pebble.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    

    

   
  </div>
</div>
</ScrollAnimation>
        </div>
        
        
        
    

</div>
</div>
















<section className="section split" style={{display:'flex', padding:'2%', position:'relative',}}>




<div className=' container split innerpanel' style={{width:'60%', padding:'2% 3%', borderRadius:'12px',}}>

<h1 className='title' style={{textAlign:'',}}>{title}</h1>
        
<div className="content" style={{margin:'2% 1% 0 0', padding:'2% 0', borderRadius:'12px',}}>

<h3 className="" style={{textAlign:'',}}>
{heading}
</h3>

</div>
<br />
{description}
 



</div>


<div className="sidebar split" style={{padding:'1%', width:'40%', marginLeft:'2%',}}>
  
  <div style={{position:'sticky', top:'30px', }}>










<div className='container innerpanel' style={{width:'', margin:'0 auto', background:'#fff', borderRadius:'12px', color:'#111', textAlign:'center'}}>
 
<h4>The Field: (a-z)</h4>
<div style={{width:'auto', padding:'10px 20%', height:'350px', overflow:'scroll', color:'#111',}}>

An, Byeong Hun
<br /><hr /><br/>
Ancer, Abraham
<br /><hr /><br/>
Aphibarnrat, Kiradech
<br /><hr /><br/>
Armour, Ryan
<br /><hr /><br/>
Baddeley, Aaron
<br /><hr /><br/>
Berger, Daniel
<br /><hr /><br/>
Bezuidenhout, Christiaan
<br /><hr /><br/>
Bradley, Keegan
<br /><hr /><br/>
Brown, Scott
<br /><hr /><br/>
Burgoon, Bronson
<br /><hr /><br/>
Burns, Sam
<br /><hr /><br/>
Cabrera Bello, Rafa
<br /><hr /><br/>
Cantlay, Patrick
<br /><hr /><br/>
Casey, Paul
<br /><hr /><br/>
Cauley, Bud
<br /><hr /><br/>
Champ, Cameron
<br /><hr /><br/>
Clark, Wyndham
<br /><hr /><br/>
Conners, Corey
<br /><hr /><br/>
Dahmen, Joel
<br /><hr /><br/>
Day, Jason
<br /><hr /><br/>
DeChambeau, Bryson
<br /><hr /><br/>
Dufner, Jason
<br /><hr /><br/>
Duncan, Tyler
<br /><hr /><br/>
English, Harris
<br /><hr /><br/>
Every, Matt
<br /><hr /><br/>
Finau, Tony
<br /><hr /><br/>
Fitzpatrick, Matthew
<br /><hr /><br/>
Fleetwood, Tommy
<br /><hr /><br/>
Fowler, Rickie
<br /><hr /><br/>
Frittelli, Dylan
<br /><hr /><br/>
Furyk, Jim
<br /><hr /><br/>
Garcia, Sergio
<br /><hr /><br/>
Garnett, Brice
<br /><hr /><br/>
Gay, Brian
<br /><hr /><br/>
Glover, Lucas
<br /><hr /><br/>
Gooch, Talor
<br /><hr /><br/>
Goosen, Retief
<br /><hr /><br/>
Grace, Branden
<br /><hr /><br/>
Griffin, Lanto
<br /><hr /><br/>
Grillo, Emiliano
<br /><hr /><br/>
Hadley, Chesson
<br /><hr /><br/>
Hadwin, Adam
<br /><hr /><br/>
Harman, Brian
<br /><hr /><br/>
Hatton, Tyrrell
<br /><hr /><br/>
Henley, Russell
<br /><hr /><br/>
Herman, Jim
<br /><hr /><br/>
Hoffman, Charley
<br /><hr /><br/>
Hoge, Tom
<br /><hr /><br/>
Holmes, J.B.
<br /><hr /><br/>
Homa, Max
<br /><hr /><br/>
Horschel, Billy
<br /><hr /><br/>
Hovland, Viktor
<br /><hr /><br/>
Howell III, Charles
<br /><hr /><br/>
Hubbard, Mark
<br /><hr /><br/>
Hughes, Mackenzie
<br /><hr /><br/>
Im, Sungjae
<br /><hr /><br/>
Janewattananond, Jazz
<br /><hr /><br/>
Johnson, Dustin
<br /><hr /><br/>
Johnson, Zach
<br /><hr /><br/>
Jones, Matt
<br /><hr /><br/>
Kang, Sung
<br /><hr /><br/>
Kim, Si Woo
<br /><hr /><br/>
Kisner, Kevin
<br /><hr /><br/>
Kizzire, Patton
<br /><hr /><br/>
Knox, Russell
<br /><hr /><br/>
Koepka, Brooks
<br /><hr /><br/>
Kokrak, Jason
<br /><hr /><br/>
Kuchar, Matt
<br /><hr /><br/>
Laird, Martin
<br /><hr /><br/>
Landry, Andrew
<br /><hr /><br/>
Lashley, Nate
<br /><hr /><br/>
Lee, Danny
<br /><hr /><br/>
Lee, Kyoung-Hoon
<br /><hr /><br/>
Leishman, Marc
<br /><hr /><br/>
List, Luke
<br /><hr /><br/>
Long, Adam
<br /><hr /><br/>
Lowry, Shane
<br /><hr /><br/>
Malnati, Peter
<br /><hr /><br/>
Matsuyama, Hideki
<br /><hr /><br/>
McCarthy, Denny
<br /><hr /><br/>
McDowell, Graeme
<br /><hr /><br/>
McIlroy, Rory
<br /><hr /><br/>
Merritt, Troy
<br /><hr /><br/>
Mickelson, Phil
<br /><hr /><br/>
Mitchell, Keith
<br /><hr /><br/>
Molinari, Francesco
<br /><hr /><br/>
Moore, Ryan
<br /><hr /><br/>
Morikawa, Collin
<br /><hr /><br/>
Muñoz, Sebastián
<br /><hr /><br/>
Na, Kevin
<br /><hr /><br/>
Niemann, Joaquin
<br /><hr /><br/>
Oosthuizen, Louis
<br /><hr /><br/>
Ortiz, Carlos
<br /><hr /><br/>
Palmer, Ryan
<br /><hr /><br/>
Pan, C.T.
<br /><hr /><br/>
Perez, Pat
<br /><hr /><br/>
Perez, Victor
<br /><hr /><br/>
Piercy, Scott
<br /><hr /><br/>
Poston, J.T.
<br /><hr /><br/>
Poulter, Ian
<br /><hr /><br/>
Putnam, Andrew
<br /><hr /><br/>
Rahm, Jon
<br /><hr /><br/>
Reavie, Chez
<br /><hr /><br/>
Reed, Patrick
<br /><hr /><br/>
Rodgers, Patrick
<br /><hr /><br/>
Rose, Justin
<br /><hr /><br/>
Ryder, Sam
<br /><hr /><br/>
Sabbatini, Rory
<br /><hr /><br/>
Schauffele, Xander
<br /><hr /><br/>
Scheffler, Scottie
<br /><hr /><br/>
Schenk, Adam
<br /><hr /><br/>
Scott, Adam
<br /><hr /><br/>
Simpson, Webb
<br /><hr /><br/>
Sloan, Roger
<br /><hr /><br/>
Smith, Cameron
<br /><hr /><br/>
Snedeker, Brandt
<br /><hr /><br/>
Spaun, J.J.
<br /><hr /><br/>
Spieth, Jordan
<br /><hr /><br/>
Stallings, Scott
<br /><hr /><br/>
Stanley, Kyle
<br /><hr /><br/>
Stenson, Henrik
<br /><hr /><br/>
Straka, Sepp
<br /><hr /><br/>
Streelman, Kevin
<br /><hr /><br/>
Stroud, Chris
<br /><hr /><br/>
Stuard, Brian
<br /><hr /><br/>
Taylor, Nick
<br /><hr /><br/>
Taylor, Vaughn
<br /><hr /><br/>
Thomas, Justin
<br /><hr /><br/>
Thompson, Michael
<br /><hr /><br/>
Todd, Brendon
<br /><hr /><br/>
Tringale, Cameron
<br /><hr /><br/>
Tway, Kevin
<br /><hr /><br/>
van Rooyen, Erik
<br /><hr /><br/>
Varner III, Harold
<br /><hr /><br/>
Vegas, Jhonattan
<br /><hr /><br/>
Walker, Jimmy
<br /><hr /><br/>
Wallace, Matt
<br /><hr /><br/>
Watney, Nick
<br /><hr /><br/>
Watson, Bubba
<br /><hr /><br/>
Wiesberger, Bernd
<br /><hr /><br/>
Willett, Danny
<br /><hr /><br/>
Wise, Aaron
<br /><hr /><br/>
Wolff, Matthew
<br /><hr /><br/>
Woodland, Gary

</div>



</div> 




  
  

  </div>
  </div>




</section>


  
  </div>
  
  <div className="outer" style={{position:'relative', zIndex:'1'}}>
    <Contact className="container contactform" />
  </div>
  
  <br />
  
  
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
