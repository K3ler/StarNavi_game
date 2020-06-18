import React from 'react'

import cl from './index.module.sass'
import { IMessage } from './interface'
import { useSelector, RootStateOrAny } from 'react-redux'

const Message: React.FC<IMessage> = () => {

    let winner = useSelector((state: RootStateOrAny) => state.player.winner)

    return (
        <div className={`${cl.message}`}>
            <h1 className={`${ winner !== '' ? cl.show : cl.hide }`}>
                <span className={cl.winner}>
                    {
                        winner !== '' ? `${winner.toUpperCase()} wins!` : ''
                    }
                </span>
            </h1>
        </div>
    )
}

export { Message }