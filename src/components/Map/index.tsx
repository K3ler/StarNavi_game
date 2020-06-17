import React from 'react'
import { IMap } from './interfaces'

import cl from './index.module.sass'
import Cells from './Cells'

const Map: React.FC<IMap> = (props: IMap) => {

    return (
        <div className={cl.map}>
            <table className={cl.mapCells}>
                <thead />
                <tbody>
                    <Cells />
                </tbody>
            </table>
        </div>
    )

}

export default Map