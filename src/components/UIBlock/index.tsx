import React from 'react'

import cl from './index.module.sass'
import { IUIBlock } from './interface'
import { useSelector, RootStateOrAny } from 'react-redux'

const UIBlock: React.FC<IUIBlock> = (props: IUIBlock) => {

    return (
        <div className={`${cl.block} ${props.status ? cl.show : ''}`}>
            <div className={cl.loader}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export { UIBlock }