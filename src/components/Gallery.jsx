import React from 'react'

export default function Gallery() {
  return (
    <>
    <p className="section-title" style={{textAlign:'center',margin:'auto'}}>Gallery</p> 
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="home-image-container" style={{ backgroundColor: 'grey',width:'100%',height:'70vh' }}>
        <div id="carouselExampleCaptions" class="carousel slide" style={{ height: '100%' }}>
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>

          </div>
          <div class="carousel-inner" style={{ height: '100%' }}>
            <div class="carousel-item active" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-1.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-2.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-3.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-4.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-5.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-6.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-7.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-8.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
      {/* <div className="gal-img-box"><img style={{ width: '100%' }} src={require('../assets/gallery-images/img-1.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{ width: '100%' }} src={require('../assets/gallery-images/img-2.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{ width: '100%' }} src={require('../assets/gallery-images/img-3.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{ width: '100%' }} src={require('../assets/gallery-images/img-4.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{ width: '100%' }} src={require('../assets/gallery-images/img-5.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{ width: '100%' }} src={require('../assets/gallery-images/img-6.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{ width: '100%' }} src={require('../assets/gallery-images/img-7.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{ width: '100%' }} src={require('../assets/gallery-images/img-8.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{ width: '100%' }} src={require('../assets/gallery-images/img-9.jpg')} alt="" /></div>
      <div className="gal-img-box"><img style={{ width: '100%' }} src={require('../assets/gallery-images/img-10.jpg')} alt="" /></div> */}
    </div>
    </>
  )
}
