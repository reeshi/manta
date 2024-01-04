const Navbar = () => {
    return (
        <div className="bg-navColor text-white py-4 overflow-hidden">
            <nav className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-4 flex-1">
                    <li>
                        <a href="/dashboard" className="hover:text-gray-300 text-xl font-bold">Dashboard</a>
                    </li>
                    <li>
                        <a href="/token1" className="hover:text-gray-300 text-xl font-bold">Token 1</a>
                    </li>
                    <li>
                        <a href="/token2" className="hover:text-gray-300 text-xl font-bold">Token 2</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
