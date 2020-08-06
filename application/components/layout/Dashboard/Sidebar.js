import Link from 'next/link';
import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router';

let routes = [
    {
        name: 'Dashboard',
        icon: 'bi bi-house-door',
        path: '/dashboard'
    },
    {
        name: 'Cards',
        icon: 'bi bi-collection',
        path: '/dashboard/cards'
    },
]

const Sidebar = () => {
    let router = useRouter()
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    {
                        routes.map((item, inx) => {
                            return (
                                <li className="nav-item" key={inx}>
                                    <Link href={item.path} passHref>
                                        <a className={`nav-link ${router.pathname.endsWith(item.path) ? 'active' : ''}`} >
                                            <i className={`${item.icon} mr-2`}></i>
                                            {item.name}
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar