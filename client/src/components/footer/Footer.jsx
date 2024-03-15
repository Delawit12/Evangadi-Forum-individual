import React from 'react'
import './footer.css'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className='Footer container-fluid p-5'>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="row">
            <img className='logo' src='https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png' alt="evangadi logo" />
          </div>
          <div className="row m-0 p-0 cir_br ">
            <div className="col-2"><a href='#'><InstagramIcon/></a></div>
            <div className="col-2"><a href='#'><FacebookRoundedIcon/></a></div>
            <div className="col-2"><a href='#'><YouTubeIcon/></a></div>
          </div>
          

        </div>
        {/* <div className=''> */}
        <div className="row">
          <h4 className='footer_t'>Useful Link</h4>
          <ul>
            <li><a href='#'>How it works</a></li>
            <li><a href='#'>Terms and serices</a></li>
            <li><a href='#'>Privacy policy</a></li>
          </ul>
        </div>
        <div className="row">
          <h4 className='footer_t'>Contact Info</h4>
          <ul>
            <li>Evangadi Networks</li>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
          </div>
          {/* </div> */}
      </div>


    </div>
  )
}

export default Footer