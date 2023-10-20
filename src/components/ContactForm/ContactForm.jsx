import { Component } from 'react'
import styles from './contactForm.module.css'

class ContactForm extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: ''
    };
  }

  resetForm = () => {
    this.setState({
      name: '',
      number: ''
    })
  }

  onAddContactClick = () => {
    if (!this.state.name || !this.state.number) return
    const contact = {
      id: crypto.randomUUID(),
      name: this.state.name,
      number: this.state.number,
    }
    this.props.addContact(contact)
    this.resetForm()
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onNumberChange = (e) => {
    this.setState({
      number: e.target.value
    })
  }

  render () {
    return (
      <form className={styles['contact-form']}>
      <div>
        <label htmlFor="name">Name</label>
        <input value={this.state.name} type="text" name="name" required onChange={this.onNameChange}/>
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input value={this.state.number} type="tel" name="number" required onChange={this.onNumberChange}/>
      </div>

      <button className={styles['contact-button']} type="button" onClick={this.onAddContactClick}>Add</button>
    </form>
    )
  }
}

export default ContactForm