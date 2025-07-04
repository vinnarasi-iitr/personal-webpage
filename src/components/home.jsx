import React, { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        // Initialize all tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);
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
                        <p style={{ textAlign: "start" }}>
                            <a
                                href="http://faculty.iitr.ac.in/~vinnarasi/"
                                title="Personal Website"
                                data-bs-toggle="tooltip"
                                target="_blank"
                                style={{
                                    fontSize: "30px",
                                    marginRight: "20px",
                                    fontWeight: "500",
                                    color: "black",
                                }}>
                                <i class="fa-solid fa-globe"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vinnarasi-rajendran-06325b1aa/"
                                title="Linked in"
                                data-bs-toggle="tooltip"
                                target="_blank"
                                style={{
                                    fontSize: "30px",
                                    marginRight: "20px",
                                    fontWeight: "500",
                                    color: "#0077B5",
                                }}>
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a
                                href="https://scholar.google.co.in/citations?user=slQCU7sAAAAJ&hl=en"
                                title="Google Scholar"
                                data-bs-toggle="tooltip"
                                target="_blank"
                                style={{
                                    fontSize: "30px",
                                    marginRight: "20px",
                                    fontWeight: "500",
                                    color: "#0077B5",
                                }}>
                                <i class="fa-brands fa-google-scholar"></i>
                            </a>
                            <a
                                href="https://orcid.org/0000-0001-9834-6779"
                                title="ORC id"
                                data-bs-toggle="tooltip"
                                target="_blank"
                                style={{
                                    fontSize: "30px",
                                    marginRight: "20px",
                                    fontWeight: "500",
                                    color: "green",
                                }}>
                                <i class="fa-brands fa-orcid"></i>
                            </a>
                            <a
                                href="https://www.researchgate.net/profile/Vinnarasi-Rajendran-3"
                                title="Research Gate"
                                data-bs-toggle="tooltip"
                                target="_blank"
                                style={{
                                    fontSize: "30px",
                                    marginRight: "20px",
                                    fontWeight: "500",
                                    color: "#00ccbb",
                                }}>
                                <i class="fa-brands fa-researchgate"></i>
                            </a>
                        </p>
                    </div>

                </div>
                <div className="description-container">
                    <p className="title_2">About</p>
                    <p className="text-1" style={{ padding: '20px', fontSize: '18px', fontWeight: '400', textAlign: 'justify' }}>
                        Dr. R. Vinnarasi is an Assistant Professor in the Department of Civil Engineering at IIT Roorkee. Before joining IIT Roorkee, she held academic positions at IIT Delhi and Sharda University. She earned her PhD in Water Resources Engineering from IIT Delhi, where she received the Distinction in Doctoral Research Award in 2019. Additionally, she was honoured with the Prof. U.C. Kothyari Best PhD Thesis Award 2020 by the Indian Society of Hydraulics at HYDRO 2020, NIT Rourkela, Odisha, India. At IIT Roorkee, Dr. Vinnarasi leads the Water Extremes Research Group, focusing on hydro-climatological extremes, regional hydrological modelling, hydrological hazards, water accounting, multivariate hydrological analysis, climate and ecological resilience, and the detection and attribution of extreme events.
                    </p>
                </div>

            </div>
            <div className="sponser-updates-container">
                <div className="sponsers">
                    <p style={{ textAlign: 'center' }} className="section-title">Funding Agencies and Collaborators</p>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div style={{ height: '150px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/dst-logo.webp')} alt="" />
                        </div>
                        <div style={{ height: '150px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/nrf_logo.png')} alt="" />
                        </div>
                        <div style={{ height: '150px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/iisc-banglore-logo.png')} alt="" />
                        </div>
                        <div style={{ height: '150px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/cssri_logo.jpeg')} alt="" />
                        </div>
                        <div style={{ height: '150px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/nwo-1-logo.png')} alt="" />
                        </div>
                        <div style={{ height: '50px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/wageningen-university-and-research-logo.jpg')} alt="" />
                        </div>
                        <div style={{ height: '30px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/tudelft_logo.png')} alt="" />
                        </div>
                        <div style={{ height: '50px', margin: '10px' }}>
                            <img style={{ height: '100%' }} src={require('../assets/logo/irriwatch.com_Logo.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="lab-updates">
                    <p style={{ textAlign: 'center' }} className="section-title">Lab Updates</p>
                    <p className="title_4">2025</p>
                    <p className="title_4">2024</p>
                    <p className="title_4">2023</p>
                    <p className="text-1">Mr.  Muskula Sai Bargav Reddy joins the research group as a PhD student - Jan 2023</p>
                    <p className="title_4">2022</p>
                    <p className="text-1">Mr. Vivek Tiwari joins the research group as a PhD student (Co-guide) - July 2022</p>
                    <p className="text-1">Mr. Usman Mohseni joins the research group as a PhD student - July 2022</p>
                    <p className="text-1">Ms. Pallavi Kumari joins the research group as a PhD student - July 2022</p>
                    <p className="title_4">2021</p>
                    <p className="text-1">Mr. Dikshant Bodana joins the research group as a PhD student - July 2021</p>
                    <p className="title_4">2020</p>
                    <p className="text-1">Mr. Ankush joins the research group as a PhD student (Co-guide) - July 2020</p>
                    <p className="text-1">Dr. R. Vinnarasi joined IIT Roorkee as Assistant Professor - 15th June 2020.</p>
                </div>
            </div>
            <div className="home-image-container" style={{ backgroundColor: 'grey' }}>
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
        </div>
    )
}
