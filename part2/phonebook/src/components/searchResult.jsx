const SearchResult = ({ matchContacts }) => {

    if (!Array.isArray(matchContacts) || matchContacts.length === 0) {
        return null
    }

    return (
        <ul>
            {matchContacts.map(matchContact => (
                <li key={matchContact.name}>Name: {matchContact.name} | Number: {matchContact.number}</li>
            ))}
        </ul>
    )
}

export default SearchResult