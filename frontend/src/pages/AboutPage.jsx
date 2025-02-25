import Navbar from "../components/Navbar"
export default function AboutPage() {
    return (<>
        <Navbar/>
        <div className="flex flex-row bg-gray-200 ">
            <div className="basis-2/3 p-4 bg-gray-200">
                <div className="p-5">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatibus corrupti id eos! Illo sapiente tempore suscipit dolor laudantium perspiciatis eveniet incidunt quia doloremque aspernatur? Dolorum nulla neque quae quos sequi iste quasi modi eum ullam quam sed, illo, quisquam iure ex esse libero omnis! Mollitia, doloremque dignissimos! Excepturi facere inventore libero neque maiores optio odio consequatur architecto. Quisquam nostrum qui officiis! Quam reiciendis cumque assumenda nulla. Sint voluptatem laudantium obcaecati quia magnam. Libero sequi harum voluptas, dolor rerum error id eligendi, consequatur nulla odio cum nostrum ab vitae voluptatibus maxime fuga impedit debitis eum repellendus assumenda ea ex incidunt?</p>
                </div>
                <div className="p-5 flex">
                    <h3 className="mr-5 text-xl">Technologies I know: </h3>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Full Stack Web Development</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">MERN Stack</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Java - DSA</span>
                    <span className="bg-gray-600 text-white rounded-full px-3 py-1 mr-2 mb-2 inline-block">Git & Github</span>

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
            <div className="basis-1/3 p-4 border-gray-600 border-l-2 bg-gray-200">
                <div><p>Email: jiveemourya@gmail.com</p></div>
                <div className="border border-black my-2 p-2 text-center rounded w-[80%]" ><a href="https://mail.google.com/mail/?view=cm&fs=1&to=jiveemourya@gmail.com" target="_blank">Click here to gmail directly</a></div>
                {/* <p>add resume pdf</p> */}
            </div>
        </div>
    </>)
}