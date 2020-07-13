import Axios from "axios"
import '../assets/scss/bootstrap/bootstrap-reboot.scss';

const Profile = props => {
    let { cover, profile, firstName, middleName, lastName, email, phone } = props.data
    console.log(cover.url)
    return (
        <div>
            <div className="cover" style={{ backgroundImage: `url(${cover.url})` }}></div>
            <div className="profile" style={{ backgroundImage: `url(${profile.url})` }}></div>
            <h3 className="fullname">{[firstName, middleName, lastName].join(' ')}</h3>
            <hr />
            <p className="email">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                {email}
            </p>
            <hr />
            <p className="email">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                </svg>
                {phone}
            </p>
            <style jsx>{`
            .cover {
                min-height: 150px;
                height: 50vh;
                background-position: center;
                background-size: cover;
            }
            .profile {
                width: 250px;
                height: 250px;
                background-size: cover;
                background-position: center;
                border-radius: 50%;
                border: solid 10px #fff;
                margin: auto;
                margin-top: -125px;
            }
            .fullname {
                text-align:center;
            }
            .email {
                text-align: center;
            }
            svg {
                margin-right: 10px;
            }
            `}</style>
        </div>
    )
}

export async function getServerSideProps(context) {
    let result = await Axios.get('http://localhost:1337/temps/slug/' + context.query.slug)

    result = result.data

    return {
        props: {
            data: result,
        }, // will be passed to the page component as props
    }
}

export default Profile