import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="bg-secondary text-white full-screen">
            <div className="py-2">
                <h4 className="text-center">Junk or<br />Treasure</h4>
                <ul className="nav flex-column ps-2">
                    <li className="nav-item py-2 pe-2 border-bottom border-white">
                        <Link href="/"><a className="text-white sidenav-link"><h5>Home</h5></a></Link>
                    </li>
                    <li className="nav-item py-2 pe-2 border-bottom border-white">
                        <Link href="/"><a className="text-white sidenav-link"><h5>View All Users</h5></a></Link>
                    </li>
                    <li className="nav-item py-2 pe-2 border-bottom border-white">
                        <Link href="/"><a className="text-white sidenav-link"><h5>View Pending Payments</h5></a></Link>
                    </li>
                    <li className="nav-item py-2 pe-2 border-bottom border-white">
                        <Link href="/"><a className="text-white sidenav-link"><h5>View Completed Payments</h5></a></Link>
                    </li>
                    <li className="nav-item py-2 pe-2 border-bottom border-white">
                        <Link href="/"><a className="text-white sidenav-link"><h5>View Current Products</h5></a></Link>
                    </li>
                </ul>
            </div>
            <div className="px-2">
                <h6 className="text-white text-center">
                    &copy; {(new Date().getFullYear())} Junk or Treasure Inc.<br />All Rights Reserved.<br />
                    Powered by GALACTIC|blue
                </h6>
            </div>
        </div>
    )
}

export default Sidebar;