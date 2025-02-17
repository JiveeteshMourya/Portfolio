import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Card({id, project}) {
    return (<>
        <div className="w-[30%] h-[45vh] border border-gray-200 rounded-lg p-2 bg-white shadow-sm hover:shadow-md  transition-shadow duration-300">
            <div className="w-full h-[60%] overflow-hidden rounded-lg mb-2">
                <img src={project.image_path} alt="card_image" className="object-cover transition-transform duration-300 hover:scale-105"/>
            </div>
            <div className="flex flex-col justify-between h-[35%]">
                <h1 className="text-xl">{project.title}</h1>
                <p className='line-clamp-2 text-sm text-gray-600'>{project.description}</p>
                <Link to={`/card/${id}`} className='text-sm inline-flex items-center text-blue-500 font-medium hover:underline' >Open <i className="fa-solid fa-arrow-right ml-1"></i></Link>
            </div>
        </div>
    </>)
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    project: PropTypes.object.isRequired
}