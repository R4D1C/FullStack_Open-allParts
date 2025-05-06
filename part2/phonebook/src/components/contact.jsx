const Contact = ({ persons }) => {

    return (
        <ul>
            {persons.map(person => (
                <li key={person.name}>
                    Name: {person.name} | Number: {person.number}
                </li>
            ))}
        </ul>
    )
}

export default Contact