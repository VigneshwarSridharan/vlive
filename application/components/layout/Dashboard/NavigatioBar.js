import { connect } from "react-redux";

const NavigatioBar = ({username}) => {
    // let user = window.localStorage.getItem('user');
    // if (user) {
    //     user = JSON.parse(user)
    // }
    // let { username = "" } = user || {}
    // console.log(user)
    return (
        <nav className="navbar navbar-light sticky-top bg-white flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
                <img src="/static/assets/images/logo.png" />
            </a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#">Hey {username}!</a>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({ dashboard }) => ({
    username: dashboard.username || ''
})

export default connect(mapStateToProps)(NavigatioBar)