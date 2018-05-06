import React, { Component } from 'react'
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class ContactView extends Component {

    state = {
        contacts: [],
        showOnlyNotDoneEnabled: false,
        showOnlyDone: false,
    }

    addContact = (name, email, phone, relation) => {
        this.setState(
            ({ contacts }) => ({
                contacts: contacts.concat({
                    id: contacts.length === 0 ? 1 : Math.max(...contacts.map(contact => contact.id)) + 1,
                    name: name,
                    email: email,
                    phone: phone,
                    relation: relation ? relation.split(",") : relation,
                })
            })
        )
    }

    removeContact = contactId => {
        this.setState(function (oldState) {
            return {
                contacts: oldState.contacts.filter(function (contact) {
                    return contact.id !== contactId
                })
            }
        })
    }

    updateContact = (contactId, name, email, phone, relation) => {
        this.setState({
            contacts: this.state.contacts.map(
                contact => contact.id !== contactId ? contact : {
                    id: contact.id,
                    isDone: contact.isDone,
                    isImportant: contact.isImportant,
                    name: name,
                    email: email,
                    phone: phone,
                    relation: typeof(relation)=== 'object' ? relation : relation.split(","),
                }
            )
        })
    }

    render() {
        return (
            <div>
                <h1>CONTACT LIST</h1>
                <ContactForm addContact={this.addContact}/>
                <ContactList
                    contacts={this.state.contacts}
                    removeContact={this.removeContact}
                    updateContact={this.updateContact}
                />
            </div>
        )
    }

    componentDidMount() {
        const contactsAsTextInJSONFormat = localStorage.getItem('Stored')
        const contactsFromLocalStorage = JSON.parse(contactsAsTextInJSONFormat)
        this.setState({
            contacts: contactsFromLocalStorage || []
        })
    }

    componentDidUpdate() {
        const contacts = this.state.contacts
        localStorage.setItem('Stored', JSON.stringify(contacts))
    }
}
export default ContactView