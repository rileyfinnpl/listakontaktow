import React, { Component } from 'react'
import ContactContent from './ContactContent';
import ContactEditForm from './ContactEditForm';

class ContactList extends Component {

    state = {
        editContactId: null
    }

    enterEditMode = contactId => {
        this.setState({
            editContactId: contactId
        })
    }

    exitEditMode = () => {
        this.setState({
            editContactId: null
        })
    }

    render() {
        console.log(this.state.editContactId)
        return (
            <ul>
                {
                    this.props.contacts.map(
                        contact => (
                            <li key={contact.id}>
                                {
                                    this.state.editContactId === contact.id
                                        ? (
                                            <ContactEditForm
                                                contactId={contact.id}
                                                name={contact.name}
                                                email={contact.email}
                                                phone={contact.phone}
                                                relation={contact.relation}
                                                updateContact={this.props.updateContact}
                                                exitEditMode={this.exitEditMode}
                                            />
                                        )
                                        : (
                                            <ContactContent
                                                contact={contact}
                                                enterEditMode={this.enterEditMode}
                                                removeContact={this.props.removeContact}
                                            />
                                        )
                                }
                            </li>
                        )
                    )
                }
            </ul>
        )
    }
}
export default ContactList