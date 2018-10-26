import './actionButton.scss'

import React, { Component } from 'react'

class ActionButton extends Component {
    render() {
        const {
            label,
            className,
            ...props
        } = this.props

        return (
            <button
                {...props}
                className={`action-button list-group-item w-100 text-left ${className ? className : ''}`}
            >
                <h3>{label}</h3>
            </button>
        )
    }
}

export default ActionButton;