import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Card({id, project}) {
    return (<>
        <div className="w-[30%] h-[45vh] border-2 rounded-lg p-2">
            <div className="w-full h-[60%] overflow-hidden rounded-lg">
                <img src={project.image_path} alt="card_image" className="object-cover"/>
            </div>
            <div>
                <h1>{project.title}</h1>
                <p className='line-clamp-2 text-sm'>{project.description}</p>
                <Link to={`/card/${id}`} className='text-sm' >Open <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    </>)
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    project: PropTypes.object.isRequired
}