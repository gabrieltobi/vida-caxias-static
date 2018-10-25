import './home.scss'

import React, { Component } from 'react'
//import Carousel from './carousel/carousel'
import Video from './video/video'
import Suggestions from './suggestions/suggestions'
import Links from './links/links'
import Cvs from './cvs/cvs'
//import BiblicalClass from './biblicalClass/biblicalClass'

class Home extends Component {
    render() {
        return (
            <div className='view-home'>
                {/* <Carousel /> */}
                <Suggestions />
                <Video />
                <Links />
                <Cvs />
                {/* <BiblicalClass /> */}
            </div>
        )
    }
}

export default Home