import React from 'react'
import { navigate } from 'gatsby-link'
import { FaEnvelope } from 'react-icons/fa'


// const Contact = class extends React.Component {
//   render() {
//     return (
     
//     )
//   }
// }

// export default Contact




function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
       .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      
        <section className="section">
          <div className="container innerpanel" style={{padding: '0',}}>
            <div className="content" style={{padding: '0 0 15px 0'}}>

              

              

              <form
                name="contact-inc"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                id="contact-inc-form"
              >

<h3 className="" style={{textAlign:'center', fontSize:'180%',}}>
Pick 6 Golfers
</h3>

               
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                  <label htmlFor="form-name">upload</label><input type="hidden" name="form-name" value="file-upload" />
                </div>
                
                <div className="form">
                <div className="field half left">
                <label htmlFor="name" style={{padding: '0', margin: '0',}}>Your name:</label>
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                      placeholder="Name"
                    />
                </div>
                
                <div className="field half right">
                <label htmlFor="email" style={{padding: '0', margin: '0',}}>Your email:</label>
                  <input
                    className="input"
                    type={'email'}
                    name={'email'}
                    onChange={this.handleChange}
                    id={'email'}
                    required={true}
                    placeholder="your@email.com"
                  />
                </div>
                </div>


<hr />


                <div className="form">
                <div className="field half left">
                
              
                    <label htmlFor="golfer1" style={{padding: '0', margin: '0',}}>Golfer 1:</label>
              <input
                className="input"
                type={'text'}
                name={'golfer1'}
                onChange={this.handleChange}
                id={'golfer1'}
                required={true}
                placeholder="Golfer 1"
              />
              
               <label htmlFor="golfer2" style={{padding: '0', margin: '0',}}>Golfer 2:</label>
                 <input
                   className="input"
                   type={'text'}
                   name={'golfer2'}
                   onChange={this.handleChange}
                   id={'golfer2'}
                   required={true}
                   placeholder="Golfer 2"
                 />
              
               <label htmlFor="golfer3" style={{padding: '0', margin: '0',}}>Golfer 3:</label>
              <input
                className="input"
                type={'text'}
                name={'golfer3'}
                onChange={this.handleChange}
                id={'golfer3'}
                required={true}
                placeholder="Golfer 3"
              />
                   
                </div>

                <div className="field half right">
                  
                  
                  
                  <label htmlFor="golfer4" style={{padding: '0', margin: '0',}}>Golfer 4:</label>
                  <input
                    className="input"
                    type={'text'}
                    name={'golfer4'}
                    onChange={this.handleChange}
                    id={'golfer4'}
                    required={true}
                    placeholder="Golfer 4"
                  />
                    
                    
                     <label htmlFor="golfer5" style={{padding: '0', margin: '0',}}>Golfer 5:</label>
                    <input
                      className="input"
                      type={'text'}
                      name={'golfer5'}
                      onChange={this.handleChange}
                      id={'golfer5'}
                      required={true}
                      placeholder="Golfer 5"
                    />
                    
                     <label htmlFor="golfer6" style={{padding: '0', margin: '0',}}>Golfer 6:</label>
                    <input
                      className="input"
                      type={'text'}
                      name={'golfer6'}
                      onChange={this.handleChange}
                      id={'golfer6'}
                      required={true}
                      placeholder="Golfer 6"
                    />

                      
                  </div>
                  </div>
                
                
                <div className="form field picka" style={{marginRight:'20px', display:'block', padding:'0 20%',}}>
                <label htmlFor="pickaplayer" style={{padding: '0', margin: '0',}}>Pick-A-Player:</label>
                   <input
                     className="input"
                     type={'text'}
                     name={'pickaplayer'}
                     onChange={this.handleChange}
                     id={'pickaplayer'}
                     required={true}
                     placeholder="Pick-A-Player"
                   />
                </div>
           <hr />
          <br />
<div className="special grad"  style={{color:'#fff', textDecoration:'none', display:'flex', justifyContent:'center', position:'relative', width:'230px', margin:'0 auto', padding:'0 1rem 0px 1rem',}}>
                
                <input type="submit" value="Send Picks" className=" grad" style={{background:'transparent', border:'none', color:'#fff', cursor:'pointer', width:'90%', float:'left',}} />
                
                
                </div>
                
                {/* <div style={{fontSize: '70%', padding: '0px 3%', marginTop:'20px', textAlign: 'center',}}><a style={{textAlign: 'center', paddingTop: '0', paddingBottom: '0', textDecoration: 'underline', color:'inherit',}} href="/privacy">Privacy policy</a>
                </div> */}
                
                
                
                
              </form>
              
            </div>
          </div>
        </section>      
      
    )
  }
}