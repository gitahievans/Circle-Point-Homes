import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Footer.css";
import FormField from '../styles/FormField';
import Input from '../styles/Input';    
import Button from '../styles/Button';

function Footer() {

  return (
<div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join ♻️ PointHomes newsletter to receive our newest deals
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time
            </p>
            <div className='input-areas'>
                <form>
                  <FormField>
                    <Input
                      type="email"
                      id="email"
                      placeholder="your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button variant="fill" color="primary" type="submit">
                      {isLoading ? "Loading..." : "Login"}
                    </Button>
                  </FormField>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/signup'>How it Works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/contact-us'>Contacts</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Homes</Link>
                    <Link to='/'>Financing</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Videos</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>LinkedIn</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                    ♻️ PointHomes
                    </Link>
                </div>
                <small className='website-rights'>♻️ PointHomes 2022</small>
                <div className='social-icons'>
                    <Link 
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link 
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link 
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                    >
                        <i className='fab fa-youtube'></i>
                    </Link>
                    <Link 
                        className='social-icon-link linkedin'
                        to='https://www.facebook.com/elly.boondox'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin'></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer