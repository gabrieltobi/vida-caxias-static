import './master.scss'

import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'
import Helmet from 'react-helmet'

import Nav from './nav/nav'
import Footer from './footer/footer'

class Master extends Component {
    render() {
        const {
            children
        } = this.props

        return (
            <div className='master'>
                <Helmet defaultTitle='Vida Caxias' />
                <Nav />

                {children}

                <Footer />
                <ToastContainer />
            </div>
        )
    }
}

export default Master