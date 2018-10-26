import './modalImage.scss'

import React, { Component } from 'react'

class Modal extends Component {
    render() {
        const { closeModal, image, alt } = this.props

        return (
            <React.Fragment>
                <div className='modal-image modal fade show' role='dialog' aria-hidden='true'>
                    <div className='modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title'>{alt}</h5>
                                <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={closeModal}>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>

                            <img src={image} alt={alt} />
                        </div>
                    </div>
                </div>

                <div className='modal-backdrop fade show'></div>
            </React.Fragment>
        )
    }
}

export default Modal