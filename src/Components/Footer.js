import React from 'react';
const Footer = () => {
  return (
    <footer class="bg-dark text-white rounded 30px">
    
      <div class="row">
        <div class="col-md-4">
            <center>
          <p className='mt-3 mx-3'>&copy; New Vision High School. All Rights Reserved.</p>
          </center>
        </div>
        <div class="col-md-6">
            <center>
          <ul class="list-inline social-buttons m-3">
          <li class="list-inline-item mx-2">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li class="list-inline-item mx-2">
              <a href="#">
                <i style={{color:`lightblue`}} class="fa fa-twitter"></i>
              </a>
            </li>
           
            <li class="list-inline-item mx-2">
              <a href="#">
                <i style={{color:`blue`}} class="fa fa-linkedin"></i>
              </a>
            </li>
            <li class="list-inline-item mx-2">
              <a href="#">
                <i style={{color:`purple`}} class="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
          </center>
        </div>
        <div class="col-md-2">
            <center>
          <p class="text-right mt-3 mx-3">
            <a style={{textDecorationLine:`none`}} href="https://www.google.co.in/maps/place/New+Vision+High+School/@17.154214,79.6267453,15.74z/data=!4m15!1m8!3m7!1s0x3a34dbb936420209:0xfbf6b844cdbdb717!2sSuryapet,+Telangana!3b1!8m2!3d17.1313756!4d79.6336242!16zL20vMDlnOWxk!3m5!1s0x3a34db983fffffff:0x32741da28dd20799!8m2!3d17.1541878!4d79.6304386!16s%2Fg%2F11c20cvcsf" target="_blank"><i class="fas fa-map-marker-alt"></i> <i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
          </p>
          </center>
        </div>
      </div>
    
  </footer>
  
  );
}

export default Footer;
