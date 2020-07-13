import Head from 'next/head'
import { useState, useEffect } from 'react';
import { capitalCase } from 'change-case'

const SocialMedia = ({ name, value }) => {

    let icons = {
        "Facebook": "fa fa-facebook",
        "Twitter": "fa fa-twitter",
        "LinkedIn": "fa fa-linkedin",
        "Instagram": "fa fa-instagram",
        "WhatsApp": "fa fa-whatsapp",
        "Skype": "fa fa-skype",
    }

    return (
        <a href={value}>
            <i className={icons[name]}></i>
        </a>
    )
}

const ClassicTheme = (props) => {

    let { firstName, middleName, lastName, designation, email, phone, profile, socialMedia, cover } = props

    const profileImage = profile && profile.url ? `http://localhost:1337${profile.url}` : "/static/themes/classic/images/photo.png";

    const coverImage = cover && cover.url ? `http://localhost:1337${cover.url}` : '';
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


    return (
        <React.Fragment>
            <Head>
                <link rel="stylesheet" href="/static/themes/classic/css/bootstrap.min.css" type="text/css" />
                <link rel="stylesheet" href="/static/themes/classic/css/main-green.css" type="text/css" />


                <script type="text/javascript" src="/static/themes/classic/js/main.js"></script>
            </Head>
            <div>
                {(() => {
                    if (!loaded) {
                        return (
                            <div className="preloader">
                                <div className="preloader-animation">
                                    <div className="preloader-spinner">
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <React.Fragment>
                            <div id="page" className="page">



                                <div id="main" className="site-main">

                                    <div className="pt-wrapper">

                                        <div className="subpages">


                                            <section className="pt-page pt-page-current" data-id="home">
                                                <div className="section-inner start-page-content">
                                                    <div className="page-header" style={coverImage ? { backgroundImage: `url('${coverImage}')` } : {}}>
                                                        <div className="row">
                                                            <div className="col-sm-4 col-md-4 col-lg-4">
                                                                <div className="photo">
                                                                    <div className="img" style={{ backgroundImage: `url('${profileImage}')` }} />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-8 col-md-8 col-lg-8">
                                                                <div className="title-block">
                                                                    <h1>{[firstName, middleName, lastName].join(' ')}</h1>
                                                                    <div className="owl-carousel text-rotation">
                                                                        <div className="item">
                                                                            <div className="sp-subtitle">{designation}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="social-links">
                                                                    {
                                                                        socialMedia.map((item, inx) => {
                                                                            return (
                                                                                <SocialMedia {...item} key={inx} />
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="page-content">
                                                        <div className="block-title">
                                                            <h3>Reach <span>Me</span></h3>
                                                        </div>
                                                        <div className="row">
                                                            {
                                                                Object.keys({ firstName, middleName, lastName, designation }).map((key, inx) => {
                                                                    if (!props[key]) return '';

                                                                    return (
                                                                        <div className="col-sm-6 col-md-6 col-lg-6" key={inx}>
                                                                            <ul className="info-list">
                                                                                <li><span className="title">{capitalCase(key)}</span><span className="value">{props[key]}</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                            {
                                                                phone.map((item, inx) => {
                                                                    if (!item.confirmed) return ""
                                                                    return (
                                                                        <div className="col-sm-6 col-md-6 col-lg-6" key={inx}>
                                                                            <ul className="info-list">
                                                                                <li><span className="title">Phone Number { numberInfo(phone) && <span> ({inx + 1})</span>} </span><span className="value"><a href={`tel:${item.phone}`}>{item.phone}</a></span></li>
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                            {
                                                                email.map((item, inx) => {
                                                                    if (!item.confirmed) return ""
                                                                    return (
                                                                        <div className="col-sm-6 col-md-6 col-lg-6" key={inx}>
                                                                            <ul className="info-list">
                                                                                <li><span className="title">Email Address { numberInfo(email) && <span> ({inx + 1})</span>}</span><span className="value"><a href={`mailto:${item.email}`}>{item.email}</a></span></li>
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>


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

export default ClassicTheme;