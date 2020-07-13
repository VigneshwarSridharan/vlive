import Link from "next/link"

const Navigation = props => {
    return (
        <nav className="site-header sticky-top py-2 shadow-sm">
            <div className="container d-flex align-items-center justify-content-between">
                <Link href="/">
                    <div>
                        <img src="/assets/images/logo.png" />
                    </div>
                </Link>
                <div className="d-none d-md-block">
                    <a className="py-2 px-3 d-none d-md-inline-block" href="#">Features</a>
                    <a className="py-2 px-3 d-none d-md-inline-block" href="#">About us</a>
                    <a className="py-2 px-3 d-none d-md-inline-block" href="#">Support</a>
                    <a className="py-2 px-3 d-none d-md-inline-block" href="#">Pricing</a>
                    <a className="py-2 px-3 d-none d-md-inline-block" href="#">Blog</a>
                </div>
                <div>
                    <div className="btn btn-outline-primary mr-2">Login</div>
                    <div className="btn btn-primary">Register</div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation