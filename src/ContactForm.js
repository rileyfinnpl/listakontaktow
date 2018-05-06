import React, { Component } from 'react'

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        relation: '',
        formError: null
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.name.trim() === '') {
            this.setState({
                formError: new Error('Contact name cannot be empty')
            });
            return
        }else if (this.state.category === '') {
            this.setState({
                formError: new Error('Relation field cannot be empty')
            });
            return
        }

        this.props.addContact(this.state.name, this.state.email, this.state.phone, this.state.relation)

        this.setState({
            name: '',
            email: '',
            phone: '',
            relation: '',
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            formError: null
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                { this.state.formError && <p>{this.state.formError.message}</p>}
                <input
                    placeholder={'name'}
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    placeholder={'email'}
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <input
                    placeholder={'phone #'}
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                />
                <input
                    placeholder={'relation'}
                    name="relation"
                    value={this.state.relation}
                    onChange={this.handleChange}
                />
                <button>add contact</button>
            </form>
        )
    }
}
export default ContactForm