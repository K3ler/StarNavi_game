import React from 'react'

import cl from './index.module.sass'

// Actions
import { setUsername } from '../../../redux/actions/playerActions'

// Libs
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

const Username : React.FC = () => {

    const dispatch = useDispatch()
    const userName = useSelector((state: RootStateOrAny) => state.player.userName)

    const onChangeHandler = (e) => {
        let name = e.target.value
        // Set username from field
        dispatch(setUsername(name))
    }

    return (
        <div className={cl.usernameControl}>
            <input className={cl.usernameInput}
                   onChange={onChangeHandler}
                   value={userName}
                   placeholder="Enter Username" />
        </div>
    )
}

export { Username } 