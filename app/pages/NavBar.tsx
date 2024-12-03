import Link from "next/link"; // Import Link for navigation


export default function NavBar() {
    return (
        <>
            <div className="navbar bg-base-100 sticky top-0 z-50">
                <div className="flex-1">
                    <Link href="/" passHref>
                        <div className="btn btn-ghost text-md">DREIKEN<br />MORENO</div>
                    </Link>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="ml-[-1.5rem]">
                            <Link href="/" passHref>
                                /&nbsp;&nbsp;HOME
                            </Link>
                        </li>
                        <li className="ml-[-1.5rem]">
                            <Link href="/pages/projects" passHref>
                                /&nbsp;&nbsp;WORK
                            </Link>
                        </li>                          
                        <li className="ml-[-1.5rem]"><a>/&nbsp;&nbsp;ABOUT&nbsp;&nbsp;/</a></li>
                        <li className="ml-[-1.5rem]"><a>CONTACT&nbsp;&nbsp;/</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
