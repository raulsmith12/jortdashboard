import Link from "next/link"

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1>Welcome to JORT</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 d-grid gap-2">
                    <Link href="/">
                        <button className="btn btn-primary">View All Users</button>
                    </Link>
                </div>
                <div className="col-3 d-grid gap-2">
                    <Link href="/">
                        <button className="btn btn-primary">View Pending Payments</button>
                    </Link>
                </div>
                <div className="col-3 d-grid gap-2">
                    <Link href="/">
                        <button className="btn btn-primary">View Completed Payments</button>
                    </Link>
                </div>
                <div className="col-3 d-grid gap-2">
                    <Link href="/">
                        <button className="btn btn-primary">View Current Products</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;