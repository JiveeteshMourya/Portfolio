import Multiselect from 'multiselect-react-dropdown';
import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
export default function CardsFilter({projects}) {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [sortBy, setSortBy] = useState("Featured");
    const [sortedProjects, setSortedProjects] = useState(projects);

    useEffect (() => {
        let filteredProjects = [...projects];
        if(selectedFilters.length > 0) {
            filteredProjects = filteredProjects.filter(project => 
                selectedFilters.some(filter => 
                    (project.filter?.includes(filter.key)) ||
                    (project.type === filter.key)
                )
            );
        }

        if(sortBy === "Newest") {
            filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if(sortBy === "Oldest") {
            filteredProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if(sortBy === "Featured") {
            filteredProjects.sort((a, b) => {
                if(a.featured === b.featured) return 0;
                return a.featured ? -1 : 1;
            })
        }

        setSortedProjects(filteredProjects);
    }, [selectedFilters, sortBy, projects]);

    useEffect(() => {
        console.log(sortedProjects);
    }, [sortedProjects]);

    return (<>
    <div className="border-2 rounded-2xl flex p-4 m-auto w-[70%] my-5 justify-around items-center">
        <div className="flex gap-x-4 items-center">
            Filter by:
            <Multiselect
                displayValue="key"
                id="css_custom"
                options={[
                    { key: 'Project' },
                    { key: 'Achievement' },
                    { key: 'Full Stack' },
                    { key: 'MERN' },
                    { key: 'React' },
                    { key: 'AI/ML' },
                    { key: 'DSA' }
                ]}
                placeholder="Select"
                style={{
                    chips: {
                      background: 'grey',
                      display: "inline-flex",
                        gap: "5px",
                    },
                    multiselectContainer: {
                      color: 'black'
                    },
                    searchBox: {
                      border: 'none',
                      borderBottom: '1px solid black',
                      borderRadius: '0px'
                    }
                }}
                selectedValues={selectedFilters}
                // onSelect={(selectedList) => setSelectedFilters(selectedList)}
                onSelect={setSelectedFilters}
                // onRemove={(selectedList) => setSelectedFilters(selectedList)}
                onRemove={setSelectedFilters}
            />
        </div>
        <div className='items-center'>
            <label htmlFor="sortby">Sort by: </label>
            <select name="sortby" id="sortby" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Featured">Featured</option>
            </select>
        </div>
    </div>
    </>)
}

CardsFilter.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image_path: PropTypes.string.isRequired,
            technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
            type: PropTypes.string.isRequired,
            links: PropTypes.shape({
                live: PropTypes.string,
                github: PropTypes.string
            }).isRequired,
            date: PropTypes.string.isRequired,
            featured: PropTypes.bool.isRequired,
            filter: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired
}