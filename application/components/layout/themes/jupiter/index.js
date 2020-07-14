import Head from 'next/head'
import { useEffect, useState } from 'react';
import { capitalCase } from 'change-case'
import { API_BASE_URL } from '../../../../utils/Constants';

const SocialMedia = ({ name, value }) => {

    let icons = {
        "Facebook": "fab fa-facebook",
        "Twitter": "fab fa-twitter",
        "LinkedIn": "fab fa-linkedin",
        "Instagram": "fab fa-instagram",
        "WhatsApp": "fab fa-whatsapp",
        "Skype": "fab fa-skype",
    }

    return (
        <a target="_blank" href={value}>
            <span className={icons[name]}></span>
        </a>
    )
}

const JupiterTheme = props => {

    let { firstName, middleName, lastName, designation, email, phone, profile, socialMedia, cover } = props

    const profileImage = profile && profile.url ? `${API_BASE_URL}${profile.url}` : "/static/themes/jupiter/images/profile.png";

    const coverImage = cover && cover.url ? `${API_BASE_URL}${cover.url}` : "/static/themes/jupiter/images/bg.jpg";
    let [loaded, setLoaded] = useState(false)

    useEffect(() => {
        window.onload = () => {
            setLoaded(true)
        }
    }, [])

    const numberInfo = obj => {
        obj = obj.filter(f => f.confirmed)
        return obj.length > 1
    }

    const [clickToEmail = {}] = email;
    const [clickToPhone = {}] = phone;

    return (
        <React.Fragment>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
                <link rel="stylesheet" href="/static/themes/jupiter/css/all.min.css" />


                <link rel="stylesheet" href="/static/themes/jupiter/css/basic.css" />
                <link rel="stylesheet" href="/static/themes/jupiter/css/layout.css" />
                <link rel="stylesheet" href="/static/themes/jupiter/css/blogs.css" />
                <link rel="stylesheet" href="/static/themes/jupiter/css/ionicons.css" />
                <link rel="stylesheet" href="/static/themes/jupiter/css/magnific-popup.css" />
                <link rel="stylesheet" href="/static/themes/jupiter/css/animate.css" />
                <link rel="stylesheet" href="/static/themes/jupiter/css/owl.carousel.css" />


                <link rel="stylesheet" href="/static/themes/jupiter/css/template-colors/green.css" />

                <script src="/static/themes/jupiter/js/scripts.js"></script>
            </Head>

            <div className="page">
                {(() => {
                    if (!loaded) {
                        return (
                            <div className="preloader">
                                <div className="centrize full-width">
                                    <div className="vertical-center">
                                        <div className="spinner">
                                            <div className="double-bounce1"></div>
                                            <div className="double-bounce2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    return (
                        <React.Fragment>
                            <div className="background"></div>


                            <div className="container" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">


                                <div className="card-started" id="home-card">


                                    <div className="profile">


                                        <div className="slide" style={{ backgroundImage: `url(${coverImage})` }}></div>


                                        <div className="image">
                                            <div style={{ backgroundImage: `url(${profileImage})` }} className="img" />
                                        </div>


                                        <div className="title">{[firstName, middleName, lastName].join(' ')}</div>
                                        <div className="subtitle">{designation}</div>


                                        <div className="social">
                                            {
                                                socialMedia.map((item, inx) => {
                                                    return (
                                                        <SocialMedia {...item} key={inx} />
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="content" style={{ textAlign: 'left', marginTop: 32 }}>
                                            <div className="title"><span className="first-word">Get</span> in Touch</div>
                                            {
                                                Object.keys({ firstName, middleName, lastName, designation }).map((key, inx) => {
                                                    if (!props[key]) return '';

                                                    return (
                                                        <div className="row" key={inx}>
                                                            <div className="col col-m-6 col-d-5"><b>{capitalCase(key)}</b></div>
                                                            <div className="col col-m-6 col-d-7">{props[key]}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            {
                                                phone.map((item, inx) => {
                                                    if (!item.confirmed) return ""

                                                    return (
                                                        <div className="row" key={inx}>
                                                            <div className="col col-m-6 col-d-5"><b>Phone Number {numberInfo(phone) && <span> ({inx + 1})</span>}</b></div>
                                                            <div className="col col-m-6 col-d-7"><a href={`tel:${item.phone}`}>{item.phone}</a></div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            {
                                                email.map((item, inx) => {
                                                    if (!item.confirmed) return ""

                                                    return (
                                                        <div className="row" key={inx}>
                                                            <div className="col col-m-6 col-d-5"><b>Email Address {numberInfo(email) && <span> ({inx + 1})</span>}</b></div>
                                                            <div className="col col-m-6 col-d-7"><a href={`tel:${item.email}`}>{item.email}</a></div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>



                                        <div className="lnks">
                                            <a href={`mailto:${clickToEmail.email}` || '#'} className="lnk">
                                                <span className="fas fa-envelope" style={{ marginRight: 8 }}></span>
                                                <span className="text">Mail Me</span>
                                            </a>
                                            <a href={`tel:${clickToPhone}` || '#'} className="lnk discover">
                                                <span className="fas fa-phone" style={{ marginRight: 8 }}></span>
                                                <span className="text">Contact Me</span>
                                            </a>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </React.Fragment>
                    )
                })()}
            </div>



        </React.Fragment>
    )
}

export default JupiterTheme