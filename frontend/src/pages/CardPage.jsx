import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
export default function CardPage() {
    const { id } = useParams();
    const project = projects.find(project => project.id === parseInt(id));

    if(!project) return <h1>Project Not Found</h1>
    return (<>
        <Navbar/>
        <div className="w-full h-[30vh]">
            <img src={project.image_path} alt={project.image_path} className="w-full"/>
        </div>
        <div className="leading-loose p-6">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
                <label>Techonologies Used : &nbsp;</label>
                {project.technologies.map(technology => (
                    <span key={technology} className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm mr-2">{technology}</span>
                ))}
            </div>
            {project.links.live && <>
                <label htmlFor="live">Live : &nbsp;</label>
                <a id="live" href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-external-link"></i> {project.links.live}
                </a>
            </>}
            <p></p>
            <label htmlFor="github">Github : &nbsp;</label>
            <a id="github" href={project.links.github} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i> {project.links.github}
            </a>
        </div>
    </>)
}