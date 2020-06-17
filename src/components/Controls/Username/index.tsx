import React from 'react'

import cl from './index.module.sass'

const Username = () => {

    return (
        <div className={cl.usernameControl}>
            <input className={cl.usernameInput}
                   placeholder="Username" />
        </div>
    )
}

export { Username } 