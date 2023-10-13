import { useMemo, useState } from "react";
import { ContactForm, FilterForm, Section, ContactList } from "."

export const App = () => {
  const [state, setState] = useState({
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  })

  function deleteContact (id) {
    setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(item => item.id !== id)
    }))
  }

  function checkContact (contact) {
    const isContantExist = state.contacts.find(item => item.name === contact.name)
    if (isContantExist) {
      alert (`${contact.name} is already in contacts`)
      return false
    }
    return true
  }

  function addContact (contact) {
    if (!checkContact(contact)) return
    setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, contact]
    }))
  }

  const filteredContacts = useMemo(function () {
    return state.contacts.filter(contact => {
      if(!state.filter) return true
      if (contact.name.toLowerCase().includes(state.filter)) return true
      return false
    })
  }, [state.filter, state.contacts])

  function setFilter (filter) {
    setState(prevState => ({
      ...prevState,
      filter
    }))
  }
  console.log(filteredContacts)
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm addContact={addContact}/>
      </Section>
      <Section title="Contacts">
        <FilterForm filter={state.filter} setFilter={setFilter}/>
        <ContactList contacts={filteredContacts} deleteContact={deleteContact}/>
      </Section>
    </div>
  );
};
