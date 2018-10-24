import './suggestions.scss'

import React, { Component } from 'react'

class Suggestions extends Component {
    suggestions = [
        { src: 'https://www.youtube.com/embed/vI9-UJa1Pzg', label: 'Depressão' },
        { src: 'https://www.youtube.com/embed/4yKASCB-1Ts', label: 'Casados e Infelizes (Parte 1)' },
        { src: 'https://www.youtube.com/embed/Rpc-7aokEcQ', label: 'Casados e Infelizes (Parte 2)' },
        { src: 'https://www.youtube.com/embed/lcEIf9Zb1d4', label: 'Casados e Infelizes' },
        { src: 'https://www.youtube.com/embed/1ljvlZTfAFQ', label: 'Desesperado' },
        { src: 'https://www.youtube.com/embed/0_y6ri5YWAE', label: 'Não Vê Solução (Parte 1)' },
        { src: 'https://www.youtube.com/embed/0i8L9-2fZus', label: 'Não Vê Solução (Parte 2)' },
        { src: 'https://www.youtube.com/embed/WgoamE_Qpwo', label: 'Não Vê Solução (Parte 3)' },
        { src: 'https://www.youtube.com/embed/rX0_r6RA40g', label: 'Depressão' },
        { src: 'https://www.youtube.com/embed/NGpbm-s40ro', label: 'Depressão' },
        { src: 'https://www.youtube.com/embed/WGvfuY4JGvQ', label: 'Depressão' },
        { src: 'https://www.youtube.com/embed/j0n6AsAqnso', label: 'Sem Amigos' },
        { src: 'https://www.youtube.com/embed/ZAhxLGBCG8o', label: 'Sem Amigos (Parte 1)' },
        { src: 'https://www.youtube.com/embed/KSkCJ5Lf5OU', label: 'Sem Amigos (Parte 2)' },
        { src: 'https://www.youtube.com/embed/g1kxPA1PyKo', label: 'Saúde' }
    ]

    openPage = (href) => {
        if (href) {
            window.open(href, '_blank')
        }
    }

    renderSuggestion = (item, index) => {
        return (
            <React.Fragment key={index}>
                <div className='col-lg-4 col-md-6 col-xs-12'>
                    <div className={`suggestion bg-light p-2 shadow my-3 ${item.href ? 'clickable' : ''}`}
                        onClick={() => this.openPage(item.href)}>
                        <h5>{item.label}</h5>
                        <div className='suggestion-content border border-dark position-relative'>
                            {
                                !item.image &&
                                <div className='suggestion-video embed-responsive embed-responsive-16by9 h-100'>
                                    <iframe className='embed-responsive-item' src={item.src} title='Vídeo' allowFullScreen></iframe>
                                </div>
                            }
                            {
                                item.image &&
                                <div className='suggestion-image h-100' style={{ backgroundImage: `url(${item.src})` }} />
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className='suggestions py-4 px-5'>
                <h1 className='mb-4 text-center py-3 bg-dark text-light'>Você Recebeu o Livro</h1>

                <div className='row'>
                    {this.suggestions.map(this.renderSuggestion)}
                </div>
            </div>
        )
    }
}

export default Suggestions