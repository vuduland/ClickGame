import React from 'react';
import Image from './imgList'; // Tell webpack this JS file uses this image
console.log(Image); // /logo.84287d09.png
function Images() {
  // Import result is the URL of your image
  return <img src={Image} alt='Logo' />;
}
export default Images;
