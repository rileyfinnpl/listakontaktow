import React, { Component, Fragment } from 'react'

class ContactContent extends Component {

    render() {
        const contact = this.props.contact;

        return (
            <Fragment>
                <p><strong>{contact.name}</strong></p> <p>email: {contact.email},  phone #: {contact.phone}</p><p> relation: </p>
                {contact.relation.map((element,index)=>{
                    return <p key={'category '+index}>[{element}]</p>})}<p> </p>
                {
                }
                <button
                    onClick={() => this.props.enterEditMode(contact.id)}
                >
                    edit
                </button>
                <button
                    onClick={() => this.props.removeContact(contact.id)}
                >
                    delete
                </button>
            </Fragment>
        )
    }
}
export default ContactContent