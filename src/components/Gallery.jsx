import React from 'react'

export default function Gallery() {
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
      Gallery
      <div className="gal-img-box"><img style={{width:'100%'}} src={require('../assets/gallery-images/img-1.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{width:'100%'}} src={require('../assets/gallery-images/img-2.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{width:'100%'}} src={require('../assets/gallery-images/img-3.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{width:'100%'}} src={require('../assets/gallery-images/img-4.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{width:'100%'}} src={require('../assets/gallery-images/img-5.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{width:'100%'}} src={require('../assets/gallery-images/img-6.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{width:'100%'}} src={require('../assets/gallery-images/img-7.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{width:'100%'}} src={require('../assets/gallery-images/img-8.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{width:'100%'}} src={require('../assets/gallery-images/img-9.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{width:'100%'}} src={require('../assets/gallery-images/img-10.jpg')} alt="" /></div>
    </div>
  )
}
