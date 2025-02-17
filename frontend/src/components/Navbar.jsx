import { useNavigate } from "react-router-dom";
export default function Navbar() {
    let navigate = useNavigate();
    let handleNameClick = () => navigate("/");
    return (<>
        <div className="flex justify-around items-center p-6 text-xl bg-gray-800 text-white">
            <div className="text-2xl" onClick={handleNameClick}><h1>Jiveetesh Mourya</h1></div>
            <div className="flex gap-6">
                <button className="cursor-pointer">About</button>
                <button className="cursor-pointer">Contact Me</button>
                <a href="https://github.com/JiveeteshMourya" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/jiveetesh-mourya-535994346/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </>)
}