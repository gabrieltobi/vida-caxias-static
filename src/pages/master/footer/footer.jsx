import './footer.scss'

import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className='bg-dark text-white text-center p-4 d-flex justify-content-between'>
                <div className='start'>
                    <span className='small'>Atualização Semanal</span>
                </div>
                <div className='middle'>
                    Vida Caxias ©‎ {new Date().getFullYear()}
                </div>
                <div className='end'>
                </div>
            </footer >
        )
    }
}

export default Footer