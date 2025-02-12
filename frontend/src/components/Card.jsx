import PropTypes from 'prop-types';
export default function Card({key, project}) {
    return (<>
        <div className="w-[30%] h-[45vh] border-2 rounded-lg p-2">
            <div className="w-full h-[60%] overflow-hidden rounded-lg">
                <img src={project.image_path} alt="card_image" className="object-cover"/>
            </div>
            <div>
                <h1>{project.title}</h1>
                <p className='line-clamp-2 text-sm'>{project.description}</p>
                <button className='text-sm'>Open <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </>)
}

Card.propTypes = {
    key: PropTypes.number.isRequired,
    project: PropTypes.object.isRequired
}