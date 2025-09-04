import React from 'react'

export default function Footer() {
    return (
        <div>
            <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px 10%', backgroundColor: 'var(--primary)', color: 'var(--secondary)' }}>
                <div style={{ textAlign: 'center', flex: '1', minWidth: '300px',marginRight:'20px' }}>

                    <p className='title_2' style={{ textAlign: 'start' }}> <i class="fa-solid fa-location-dot"></i> Address</p>
                    <p className='secondaryText'>Room No. 228 <br />
                        Department of Civil Engineering <br />
                        Indian Institute of Technology, Roorkee <br />
                        Roorkee-247667 Distt: Haridwar <br />
                        Uttarakhand, INDIA</p>
                    <br />
                </div>
                <div style={{ textAlign: 'center', flex: '1', minWidth: '300px' }}>

                    <p className='title_2' style={{ textAlign: 'start' }}> <i class="fa-solid fa-phone"></i> Contact</p>
                    <p className='secondaryText'>
                        <i class="fa-solid fa-phone"></i> (O) 91-1332-284951 <br />
                        <i class="fa-solid fa-phone"></i> (R) +91-1332-286951 (IP) <br />
                        <i class="fa-solid fa-envelope"></i> vinnarasi@ce.iitr.ac.in</p>
                </div>
                <div style={{ textAlign: 'start', display: 'flex', flex: '2' }}>
                    <div style={{ marginRight: '30px' }}>
                        <img width='160px' src={require('../assets/werg-logo.png')} alt="" />
                    </div>
                    <div>
                        <p className='title_2' style={{ textAlign: 'start', display: 'inline' }}> Water Extremes Research <br /> Group </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
