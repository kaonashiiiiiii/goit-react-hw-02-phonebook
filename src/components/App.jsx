import { Component  } from "react";
import { ContactForm, FilterForm, Section, ContactList } from "."

export class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: [
        {id: 'id-1', name: 'Misjko Lutij', number: '555-15-15'},
        {id: 'id-2', name: 'Antonio Linuvui', number: '444-14-14'},
        {id: 'id-3', name: 'Marusia Nechemna', number: '666-55-44'},
      ],
      filter: '',
    }
  }

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id)
    })
  }

  checkContact = (contact) => {
    const isContantExist = this.state.contacts.find(item => item.name === contact.name)
    if (isContantExist) {
      alert (`${contact.name} is already in contacts`)
      return false
    }
    return true
  }

  addContact = (contact) => {
    if (!this.checkContact(contact)) return
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => {
      if(!this.state.filter) return true
      if (contact.name.toLowerCase().includes(this.state.filter)) return true
      return false
    })
  }

  setFilter = (filter) => {
    this.setState({
      filter
    })
  }

  render () {
    return (
      <div>
      <Section title="Phonebook">
        <ContactForm addContact={this.addContact}/>
      </Section>
      <Section title="Contacts">
        <FilterForm filter={this.state.filter} setFilter={this.setFilter}/>
        <ContactList contacts={this.getFilteredContacts()} deleteContact={this.deleteContact}/>
      </Section>
    </div>
    )
  }
};
