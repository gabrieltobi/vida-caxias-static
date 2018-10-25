import './video.scss'

import React, { Component } from 'react'

class Videos extends Component {
    render() {
        return (
            <div className='videos py-4 px-5 text-center'>
                <h1 className='mb-4 text-center py-3 bg-dark text-light'>22 de outubro, um dia em que a terra não parou (em breve)</h1>

                <div className='embed-responsive embed-responsive-16by9 video'>
                    <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/YMw1wsP-Zu8' title='Vídeo' allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

export default Videos