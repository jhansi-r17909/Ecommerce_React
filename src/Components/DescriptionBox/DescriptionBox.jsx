import React from 'react'
import "./DescriptionBox.css"



function DescriptionBox() {
  return (
    <div className='descriptionbox'>
      <div id="descriptionbox-navigator">
        <div id="descriptionbox-nav-box">Description</div>
        <div id="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div id="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates
          the buying and selling of products or services over thr internet
          it serves as virtual marketplace where businessses and indivuals can showcase their products,
          interact with customs and conduct transactions without the need for a physical presence
          E-commerce website gained immence poplularity due to their convenice accessibility and global reach they offer.


        </p>
        <p>E-commerce website typically display products or services along with detailed descrition ,
          images ,prices and any available variations (eg,sizes,colors).Each product usually has
          its own dedicated page with relevant information.</p>
      </div>

    </div>
  )
}

export default DescriptionBox