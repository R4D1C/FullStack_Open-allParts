import { useState } from 'react'
import { useEffect } from 'react'
import Contact from './components/contact'
import SearchResult from './components/searchResult'
import AddContactForm from './components/addContactForm'
import FilterForm from './components/filterForm'
import axios from 'axios'
import contactService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [pair, setPair] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setPair(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber,
      id: `${persons.length + 1}`
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    contactService
      .create(contactObject)
      .then(createdContact => {
        setPersons(persons.concat(createdContact))
      })
    setNewName('')
    setNewNumber('')
  }

  const delContact = (id) => {
    const found = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${found.name}`)) {
      contactService
        .del(id)
        .then(() => {
          alert(`${found.name} was deleted`)
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const filteredPersons = () => {
    if (pair === '') {
      return []
    }

    return persons.filter(person =>
        person.name.toLowerCase().includes(pair.toLowerCase()) ||
        person.number.includes(pair)
      )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm pair={pair} handleFilter={handleFilter}/>
      <h2>Add new contact</h2>
      <AddContactForm 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Contact persons={persons} delContact={delContact}/>
      <h2>Search result:</h2>
      <SearchResult matchContacts={filteredPersons()}/>
    </div>
  )
}

export default App