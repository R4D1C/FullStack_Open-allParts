const AddContactForm = ({ newName, handleNameChange, newNumber, handleNumberChange, addName }) => {

    return (
        <div>
            <form>
                <div> Name: <input value={newName} onChange={handleNameChange}/></div>
                <div> Number: <input value={newNumber} onChange={handleNumberChange} /></div>
                <div><button onClick={addName} type="submit">add</button></div>
            </form>
        </div>
    )
}

export default AddContactForm