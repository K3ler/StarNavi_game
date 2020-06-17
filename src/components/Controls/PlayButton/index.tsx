import React from 'react'

import cl from './index.module.sass'
import { IPlayButton } from './interface'

const PlayButton : React.FC<IPlayButton> = (props: IPlayButton) => {

    return (
        <div className={cl.control}>
            <button className={cl.playButton}>
                {props.caption}
            </button>
        </div>
    )
}

export { PlayButton }