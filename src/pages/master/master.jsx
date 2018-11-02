import './master.scss'

import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Nav from './nav/nav'
import Footer from './footer/footer'

class Master extends Component {
    constructor(props) {
        super(props)

        ReactGA.initialize('UA-128597591-1')
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

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