import React from 'react';
import Image from '../../img/rsa_0.png'; // Tell webpack this JS file uses this image
console.log(Image); // /logo.84287d09.png

// const blah = [];
function Images() {
  // Import result is the URL of your image
  return <img src={Image} alt='swhoopsies' />;
}
export default Images;
