import Card from "./Card";
import CardsFilter from "./CardsFilter";
import projects from "../data/projects.json";
export default function CardSection() {
    return (<>
        <div className="bg-gray-100 py-5">
            <CardsFilter projects={projects}/>
            <div className="flex flex-wrap justify-around gap-y-6 pt-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </>)
}