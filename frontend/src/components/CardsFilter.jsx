import Multiselect from 'multiselect-react-dropdown';
export default function CardsFilter() {
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
                      'border-bottom': '1px solid black',
                      'border-radius': '0px'
                    }
                }}
                // Optional: if you need handlers, add them here
                // onKeyPressFn={null}
                // onRemove={null}
                // onSearch={null}
                // onSelect={null}
            />
        </div>
        <div className='items-center'>
            <label htmlFor="sortby">Sort by: </label>
            <select name="sortby" id="sortby">
                <option>Newest</option>
                <option>Oldest</option>
                <option selected>Featured</option>
            </select>
        </div>
    </div>
        
    </>)
}