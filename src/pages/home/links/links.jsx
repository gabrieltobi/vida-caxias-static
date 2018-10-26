import './links.scss'

import React, { Component } from 'react'
import Modal from './modal/modal'
import ActionButton from '../../../components/actionButton/actionButton'

class Links extends Component {
    state = {
        modalOpen: false,
        modalTitle: ''
    }

    links = [
        { label: 'Quero falar com um pastor e obter uma palavra amiga' },
        { label: 'Gostaria que orassem comigo' },
        { label: 'Quero estudar a bíblia e ter uma vida feliz' }
    ]

    renderModal = () => {
        if (!this.state.modalOpen) return

        return (
            <Modal
                closeModal={() => {
                    this.setState({ modalOpen: false })
                    document.body.style.overflow = 'auto'
                }}
                title={this.state.modalTitle}
            />
        )
    }

    renderLink = (link, index) => {
        return (
            <ActionButton
                key={index}
                className='my-2'
                label={link.label}
                onClick={() => {
                    this.setState({ modalOpen: true, modalTitle: link.label })
                    document.body.style.overflow = 'hidden'
                }}
            />
        )
    }

    render() {
        return (
            <div className='links py-4 px-5'>
                <h1 className='mb-4 text-center py-3 px-2 bg-dark text-light'>Nós te ajudamos, inscreva-se:</h1>

                {this.links.map(this.renderLink)}

                {this.renderModal()}
            </div>
        )
    }
}

export default Links