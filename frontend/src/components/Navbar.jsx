import { useNavigate } from "react-router-dom";
export default function Navbar() {
    let navigate = useNavigate();
    let handleNameClick = () => navigate("/");
    let handleAboutClick = () => navigate("/about");
    return (<>
        <div className="flex justify-around items-center p-6 text-xl bg-[#1D3557] text-white sticky top-0 z-50 max-sm:justify-between max-sm:px-4 max-sm:items-baseline">
            <div className="text-2xl" onClick={handleNameClick}><h1>Jiveetesh Mourya</h1></div>
            <div className="flex gap-6 max-sm:gap-3">
                <button className="cursor-pointer max-sm:hidden" onClick={handleAboutClick}>About</button>
                <button className="cursor-pointer" onClick={handleAboutClick}>Contact Me</button>
                <a href="https://github.com/JiveeteshMourya" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/jiveetesh-mourya-535994346/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </>)
}