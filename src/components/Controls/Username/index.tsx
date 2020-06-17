import React from 'react'

import cl from './index.module.sass'

const Username = () => {

    return (
        <div className={cl.usernameControl}>
            <input className={cl.usernameInput}
                   placeholder="Enter Username" />
        </div>
    )
}

export { Username } 