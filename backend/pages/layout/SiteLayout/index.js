import Link from "next/link"
import '../../assets/scss/site-layout.scss'
import Navigation from "./Navigation"
import Footer from "./Footer"

const SiteLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Navigation />
            {children}
            <Footer />
        </React.Fragment>
    )
}

export default SiteLayout