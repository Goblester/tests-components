import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id:number)=>void
}

function Affair({affair, deleteAffairCallback}: AffairPropsType) {
    const deleteCallback = () => {
        deleteAffairCallback(affair._id);
    }// need to fix

    return (
        <div>
            {affair.name} |
            <span>{affair.priority} |</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
