import contactService from "../services/contacts"

const Contact = ({ persons, delContact }) => {

    return (
        <ul>
            {persons.map((person) => (
                <li key={person.id}>
                    Name: {person.name} | Number: {person.number}
                    <button onClick={() => delContact(person.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default Contact