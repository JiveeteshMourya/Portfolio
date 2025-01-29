export default function Card() {
    return (<>
        <div className="w-[30%] h-[40vh] border-2 rounded-lg p-2">
            <div className="w-full h-[60%] ">
                <img src="" alt="Card" />
            </div>
            <div>
                <h1>Card Title</h1>
                <p>Card Description</p>
                <button>Open <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </>)
}