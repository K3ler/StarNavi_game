import React from 'react'
import { IMap } from './interfaces'

import cl from './index.module.sass'
import Cells from './Cells'
import { connect } from 'react-redux'
import { generateMapField } from '../../redux/actions/mapActions'

const Map: React.FC<IMap> = (props: IMap) => {

    const newGameClick = () => {
        props.generateMapField(15)
    }

    return (
        <div className={cl.map}>
            <table className={cl.mapCells}>
                <thead />
                <tbody>
                    <Cells cells={props.cells} />
                </tbody>
            </table>
        </div>
    )
}

const MapToState = (state: any) => {
    return {
        cells: state.Map.cells
    }
}

const MapToDispatch = (dispatch: any) => {
    return {
        generateMapField: (size: number) => dispatch(generateMapField(size))
    }
}

export default connect(MapToState, MapToDispatch)(Map)