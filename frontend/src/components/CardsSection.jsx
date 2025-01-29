import Card from "./Card";
import CardsFilter from "./CardsFilter";
export default function CardSection() {
    return (<>
        <div className="bg-gray-100 py-5">
            <CardsFilter/>
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