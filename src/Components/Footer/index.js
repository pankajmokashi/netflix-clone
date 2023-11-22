import React from 'react';
import './styles.css';

function Footer() {
  return (
    <div className='footer'>
        <div className="line"></div>
        <div className='footer-content'>
          <div className='call'>Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></div>
          <div className='links'></div>
          {/* <div className='lang'></div> */}
          <div className='logo-text'>Netflix India</div>
        </div>
    </div>
  )
}

export default Footer