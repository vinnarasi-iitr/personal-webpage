import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="mam-container">

                <div className='profile-container'>
                    <div className='profile-div'>
                        <img style={{ borderRadius: '50%' }} width='100%' src={require('../assets//vinnarasi.png')} />
                    </div>
                    <div>
                        <p className='title_2'>Vinnarasi Rajendran</p>
                        <p className='title_3'>
                            Assistant Professor <br />
                            Department of Civil Engineering <br />
                            IIT Roorkee.
                        </p>
                    </div>
                    <div style={{ textAlign: 'start', paddingLeft: '20%' }}>
                        <p className='text-2'>
                            <i class="fa-solid fa-envelope"></i> vinnarasi@ce.iitr.ac.in <br />
                            <i class="fa-solid fa-globe"></i> faculty.iitr.ac.in/vinnarasi
                        </p>
                        <p style={{ textAlign: 'start' }}>

                            <a href='#' target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: 'black' }}><i class="fa-solid fa-globe"></i></a>
                            <a href='#' target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: '#0077B5' }}><i class="fa-brands fa-linkedin"></i></a>
                            <a href='#' target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: '#0077B5' }}><i class="fa-brands fa-google-scholar"></i></a>
                            <a href='#' target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: 'black' }}><i class="fa-brands fa-square-github"></i></a>
                            <a href='#' target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: '#00ccbb' }}><i class="fa-brands fa-researchgate"></i></a>

                        </p>
                    </div>

                </div>
                <div className="description-container">
                    <p className="title_2">Description</p>
                </div>

            </div>
            <div className="sponser-updates-container">
                <div className="sponsers">
                    <p className="title_2">Sponsers</p>
                </div>
                <div className="lab-updates">
                    <p className="title_2">Lab Updates</p>
                </div>
            </div>
        </div>
    )
}
