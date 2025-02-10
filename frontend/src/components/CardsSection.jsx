import Card from "./Card";
import CardsFilter from "./CardsFilter";
import projects from "../data/projects.json";
import { useEffect, useState } from "react";
export default function CardSection() {
    const [selectedProjects, setSelectedProjects] = useState(projects);
    useEffect(() => {
        console.log(selectedProjects);
    }, [selectedProjects]);
    return (<>
        <div className="bg-gray-100 py-5">
            <CardsFilter projects={projects} onFilteredProjectsChange={setSelectedProjects}/>
            <div className="flex flex-wrap justify-around gap-y-6 pt-5">
                {selectedProjects.map(project => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </div>
    </>)
}