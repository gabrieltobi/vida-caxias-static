import './modal.scss'

import React, { Component } from 'react'
import { Form } from '../../../../utils/Form'
import Input from '../../../../components/input/input'
import Loading from '../../../../components/loading/loading'

class Modal extends Component {
    state = {
        formWasValidated: false,
        loading: false,
        success: false,
        error: false
    }

    onSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        if (!form.checkValidity()) {
            return this.setState({ formWasValidated: true })
        }

        const {
            values: {
                name,
                address,
                phone,
                time
            },
            title
        } = this.props

        this.setState({ loading: true })

        fetch('https://mzxsx1e07g.execute-api.us-east-1.amazonaws.com/default/mailsender', {
            method: 'POST',
            body: JSON.stringify({
                subject: title,
                name,
                address,
                phone,
                time
            }),
            headers: {
                'x-api-key': 'EcNOWfwNaB2LZCS6TCX29aSHkgHdNYXXpsjihBlg',
                'Content-Type': 'application/json'
            }
        })
            .then(() => this.setState({ success: true }))
            .catch(console.error)
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        const { closeModal, title, fields } = this.props
        const { formWasValidated, loading, success } = this.state

        return (
            <React.Fragment>
                <div className='modal-form modal fade show' role='dialog' aria-hidden='true'>
                    <div className='modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title' id='exampleModalLongTitle'>{title}</h5>

                                <button type='button' className='close' data-dismiss='modal' aria-label='Fechar'
                                    onClick={closeModal}>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>

                            <form className={`${formWasValidated ? ' was-validated' : ''}`} onSubmit={this.onSubmit} noValidate>
                                <div className='modal-body text-center'>
                                    {
                                        !success &&
                                        <React.Fragment>
                                            <span>Que ótimo, nos deixe seu contato que logo retornamos para você.
                                                <span role='img' aria-label='Sorriso'>😃</span>
                                            </span>

                                            <div className='text-left'>
                                                <Input
                                                    label='Seu nome:'
                                                    title='Informe seu nome por favor'
                                                    required
                                                    {...fields.name}
                                                />

                                                <Input
                                                    type='text'
                                                    label='Seu endereço completo:'
                                                    title='Informe seu endereço por favor'
                                                    required
                                                    {...fields.address}
                                                />

                                                <Input
                                                    type='tel'
                                                    label='Seu telefone:'
                                                    title='Informe seu telefone por favor'
                                                    mask='(99) 99999-9999'
                                                    required
                                                    {...fields.phone}
                                                />

                                                <Input
                                                    type='text'
                                                    label='Melhor horário para contato:'
                                                    title='Informe um horário por favor'
                                                    required
                                                    {...fields.time}
                                                />
                                            </div>
                                        </React.Fragment>
                                    }

                                    {
                                        success &&
                                        <div className='alert alert-success' role='alert'>
                                            Tudo certo. Em breve entraremos em contato.
                                            <span role='img' aria-label='Sorriso'>😃</span>
                                        </div>
                                    }
                                </div>

                                <div className='modal-footer'>
                                    <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={closeModal}>Fechar</button>
                                    {
                                        !success &&
                                        <button type='submit' className='btn btn-success'>Enviar Contato</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='modal-backdrop fade show' onClick={closeModal}></div>

                {loading && <Loading />}
            </React.Fragment>
        )
    }
}

const fields = [
    'name',
    'address',
    'phone',
    'time'
]

export default Form(Modal, fields)