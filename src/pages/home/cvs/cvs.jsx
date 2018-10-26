import './cvs.scss'

import React, { Component } from 'react'

import cvsFolder from '../../../images/folder-cvs.jpg'
import ModalImage from './modalImage/modalImage'
import Modal from './modal/modal'
import ActionButton from '../../../components/actionButton/actionButton'

class Cvs extends Component {
    state = {
        modalImageOpen: false,
        modalOpen: false
    }

    openModalImage = () => {
        document.body.style.overflow = 'hidden'
        this.setState({ modalImageOpen: true })
    }

    openModal = () => {
        document.body.style.overflow = 'hidden'
        this.setState({ modalOpen: true })
    }

    renderModalImage = () => {
        if (!this.state.modalImageOpen) return

        return (
            <ModalImage
                closeModal={() => {
                    this.setState({ modalImageOpen: false })
                    document.body.style.overflow = 'auto'
                }}
                image={cvsFolder}
                alt='Centro de Vida Saudável'
            />
        )
    }

    renderModal = () => {
        if (!this.state.modalOpen) return

        return (
            <Modal
                closeModal={() => {
                    this.setState({ modalOpen: false })
                    document.body.style.overflow = 'auto'
                }}
                title='Quero conhecer melhor o CVS'
            />
        )
    }

    render() {
        return (
            <div id='cvs' className='cvs links py-4 px-5'>
                <h1 className='mb-4 text-center py-3 px-2 bg-dark text-light'>Centro de Vida Saudável</h1>

                <div className='row'>
                    <div className='col-lg-4 col-sm-12 mb-3 d-flex align-items-center justify-content-center'>
                        <div className='cvsFolder' role='button'>
                            <div className='hint rounded-top p-1 small'>Clique para ampliar</div>
                            <img src={cvsFolder} alt='Folder Centro de Vida Saudável' onClick={this.openModalImage} />
                        </div>
                    </div>

                    <div className="col-lg-8 col-sm-12 mb-3">
                        <div className="row">
                            <div className="col-sm-12 list-group-flush">
                                <li className='list-group-item active rounded-top text-center font-weight-bold'>Cursos Gratuitos</li>
                            </div>

                            <div className='col-md-6 col-sm-12'>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>Artesanato</li>
                                    <li className='list-group-item'>Atendimento Jurídico</li>
                                    <li className='list-group-item'>Atendimento Psicológico</li>
                                    <li className='list-group-item'>Caminhada</li>
                                    <li className='list-group-item'>Consultoria Financeira</li>
                                    <li className='list-group-item'>Culinária Saudável</li>
                                    <li className='list-group-item'>Inglês</li>
                                    <li className='list-group-item'>Inteligência Emocional</li>
                                </ul>
                            </div>

                            <div className='col-md-6 col-sm-12'>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>Jump</li>
                                    <li className='list-group-item'>Libras</li>
                                    <li className='list-group-item'>Massagem</li>
                                    <li className='list-group-item'>Psicoterapia em Grupo</li>
                                    <li className='list-group-item'>Treino Funcional</li>
                                    <li className='list-group-item'>Terapia Familiar</li>
                                    <li className='list-group-item'>Violão</li>
                                    <li className='list-group-item'>Teologia</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12'>
                        <ActionButton
                            label={'Quero conhecer melhor'}
                            onClick={this.openModal}
                        />
                    </div>
                </div>

                {this.renderModalImage()}
                {this.renderModal()}
            </div>
        )
    }
}

export default Cvs