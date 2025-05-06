const FilterForm = ({ pair, handleFilter }) => {

    return (
        <div>Filter contacts with: <input value={pair} onChange={handleFilter} /></div>
    )
}

export default FilterForm