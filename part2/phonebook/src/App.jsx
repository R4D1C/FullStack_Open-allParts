import { useState } from 'react'
import { useEffect } from 'react'
import Contact from './components/contact'
import SearchResult from './components/searchResult'
import AddContactForm from './components/addContactForm'
import FilterForm from './components/filterForm'
import axios from 'axios'
import contactService from './services/contacts'
import Notification from './components/notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [pair, setPair] = useState('')
  const [notif, setNotif] = useState(null)
  const [fail, setFail] = useState(false)

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
      const existingContact = persons.find(person => person.name === newName)
      const updatedContact = {...existingContact, number: newNumber}
      console.log(existingContact)
      if (window.confirm(`${newName} is already added to phonebook, did you want to replace the old number with this new number?`)) {
        contactService
          .change(existingContact.id, updatedContact)
          .then(returnedData => {
            setPersons(persons.map(person => person.id !== existingContact.id ?
              person :
              returnedData
            ))
          })
        setNewName('')
        setNewNumber('')
        return
      }
    }

    contactService
      .create(contactObject)
      .then(createdContact => {
        setPersons(persons.concat(createdContact))
        setNotif(`${createdContact.name} was succesfully added to phonebook`)
        setFail(false)
        setTimeout(() => {
          setNotif(null)
        }, 5000)
      })
      .catch(error => {
        console.log(error)
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
        .catch(error => {
          setNotif(`Error: ${found.name} was already deleted`)
          setFail(true)
          setTimeout(() => {
            setNotif(null)
          }, 5000)
        })
      setNewName('')
      setNewNumber('')
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
      <Notification message={notif} err={fail}/>
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