import Link from "next/link"
import { Container } from "reactstrap"

const Navigation = props => {
    return (
        <nav className="site-header sticky-top py-2 shadow-sm">
            <Container className="container d-flex align-items-center justify-content-between">
                <Link href="/">
                    <div>
                        <img src="/static/assets/images/logo.png" />
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
                    <Link href="/login">
                        <div className="btn btn-outline-primary mr-2">Login</div>
                    </Link>
                    <div className="btn btn-primary">Register</div>
                </div>
            </Container>
        </nav>
    )
}

export default Navigation