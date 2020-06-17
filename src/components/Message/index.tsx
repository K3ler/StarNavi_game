import React from 'react'

import cl from './index.module.sass'
import { IMessage } from './interface'

const Message: React.FC<IMessage> = (props : IMessage) => {

    return (
        <div className={cl.message}>
            <h1>{props.title}</h1>    
        </div>
    )
}

export { Message }