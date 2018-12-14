import React, { PureComponent } from 'react'

export default class Message extends PureComponent {
    render() {
        return (
            <div class="ui success message">
                <i class="close icon"></i>
                <div class="header">
                    Your user registration was successful.
                </div>
                <p>You may now log-in with the username you have chosen</p>
            </div>
        )
    }
}
