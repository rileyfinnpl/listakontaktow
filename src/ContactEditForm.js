import React, { Component } from 'react'

class ContactEditForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        relation: [],
        formError: null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            name: nextProps.name,
            email: nextProps.email,
            phone: nextProps.phone,
            relation: nextProps.relation,
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        if (this.state.name.trim() === '') {
            this.setState({
                formError: new Error('Contact name cannot be empty')
            })
            return
        }

        this.props.updateContact(this.props.contactId, this.state.name, this.state.email, this.state.phone, this.state.relation)
        this.props.exitEditMode()
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            formError: null
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                { this.state.formError && <p>{this.state.formError.message}</p>}
                <p><input
                    placeholder={'name'}
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                /></p>
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
                <button>update</button>
                <button
                    type="button"
                    onClick={this.props.exitEditMode}
                >
                    cancel
                </button>
            </form>
        )
    }
}
export default ContactEditForm