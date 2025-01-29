export default function Navbar() {
    return (<>
        <div className="flex justify-around items-center p-6 text-xl bg-gray-800 text-white">
            <div className="text-2xl"><h1>Jiveetesh Mourya</h1></div>
            <div className="flex gap-6">
                <button>About</button>
                <button>Contact Me</button>
                <a href="https://github.com/JiveeteshMourya" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/jiveetesh-mourya-889086332/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </>)
}