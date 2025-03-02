import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import projects from "../data/projects.js";

export default function CardPage() {
    const { id } = useParams();
    const project = projects.find(project => project.id === parseInt(id));
    console.log(project.image_path);

    if (!project) return <h1 className="text-center text-2xl font-bold mt-10">Project Not Found</h1>;
    return (
        <div className="bg-[#ECf0F1]">
            <Navbar />
            <div className="w-full h-[40vh] max-sm:h-[30vh]">
                <img src={ project.image_path } alt={project.image_path} className="w-full h-full object-cover" />
                {/* <img src="./assets/JCodeLogo.png" alt={project.image_path} className="w-full h-full object-cover" /> */}
            </div>
            <div className="leading-loose p-6 bg-white shadow-md rounded-lg mt-6 mx-auto max-w-4xl">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-base text-gray-700 mb-6">{project.description}</p>
                <div className="mb-6">
                    <label className="font-semibold">Technologies Used: &nbsp;</label>
                    {project.technologies.map(technology => (
                        <span key={technology} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm mr-2 mb-2 inline-block">{technology}</span>
                    ))}
                </div>
                {project.links.live && <>
                    <label htmlFor="live" className="font-semibold">Live: &nbsp;</label>
                    <a id="live" href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline max-sm:text-sm">
                        <i className="fa-solid fa-external-link"></i> {project.links.live}
                    </a>
                </>}
                <p className="mt-4"></p>
                <label htmlFor="github" className="font-semibold">GitHub: &nbsp;</label>
                <a id="github" href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline max-sm:text-sm">
                    <i className="fa-brands fa-github"></i> {project.links.github}
                </a>
            </div>
        </div>
    );
}