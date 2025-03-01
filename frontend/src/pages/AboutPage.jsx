import Navbar from "../components/Navbar"
export default function AboutPage() {
    return (<>
        <Navbar/>
        <div className="flex flex-row bg-[#ECf0F1] max-sm:flex-col-reverse">
            <div className="basis-2/3 p-4 max-sm:basis-3/3">
                <div className="p-5 flex flex-wrap sm:hidden">
                    <h3 className="mr-5 text-xl">Technologies I know: </h3>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Full Stack Web Development</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">MERN Stack</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Java - DSA</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Git & Github</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Tailwind CSS & Bootstrap CSS</span>
                    {/* <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">API Handling</span> */}

                </div>
                <div className="p-5">
                    <p>Hi, I’m Jiveetesh Mourya. I’m a full stack web developer specializing in the MERN stack using JavaScript, with a solid background in algorithms and data structures from my work in Java. I’m passionate about building web products that are not only robust but also innovative. I consider myself structured and visionary—with a laid-back streak that fuels creative, critical thinking. While I may not be the fastest or the smartest right now, I’m focused on growing and evolving into my best self. I’m eager to collaborate with people who share my drive to create remarkable web solutions.</p>
                </div>
                <div className="p-5 flex flex-wrap max-sm:hidden">
                    <h3 className="mr-5 text-xl">Technologies I know: </h3>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Full Stack Web Development</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">MERN Stack</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Java - DSA</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Git & Github</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Tailwind CSS & Bootstrap CSS</span>
                    {/* <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">API Handling</span> */}

                </div>
                {/* add experience section */}
                <div className="px-5">
                    <h3 className="mr-5 text-xl">Education: </h3>
                    <div className="px-5 mb-3">
                        <p>BSc. Computer Science, Institute For Excellence In Higher Education, Bhopal</p>
                        <p>CGPA: 8.5</p>
                        <p>2023 - 2026</p>
                    </div>
                    <div className="px-5 mb-3">
                        <p>School - 12th, Demonstration Multipurpose School, Bhopal</p>
                        <p>Percent: 77.2%</p>
                        <p>Passing Year: 2023</p>
                    </div>
                    <div className="px-5">
                        <p>School - 10th, Demonstration Multipurpose School, Bhopal</p>
                        <p>Percent: 76%</p>
                        <p>Passing Year: 2021</p>
                    </div>
                </div>
                {/* add leadership and responsibility section */}
                <div className="p-5">
                    <h3 className="mr-5 text-xl">Hobbies: </h3>
                    <div className="px-5 mb-3">
                        <p>Working Out</p>
                        <p>Singing & Guitar</p>
                        <p>Football</p>
                    </div>
                </div>
            </div>
            <div className="basis-1/3 p-4 max-sm:basis-3/3">
                <img src="./JCodeLogo.png" className="object-cover h-[40%] mb-6"/>
                <div><p>Email: jiveemourya@gmail.com</p></div>
                <div className="border border-black my-2 p-2 text-center rounded w-[80%]" ><a href="https://mail.google.com/mail/?view=cm&fs=1&to=jiveemourya@gmail.com" target="_blank">Click here to gmail directly</a></div>
                {/* <p>add resume pdf</p> */}
            </div>
        </div>
    </>)
}