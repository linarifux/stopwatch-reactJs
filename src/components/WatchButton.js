import React from 'react'

const WatchButton = ({buttonName, handleAction, isActive}) => {
    return (
        <div>
            <button onClick={()=> handleAction(buttonName)} disabled={isActive}>{buttonName}</button>
        </div>
    )
}

export default WatchButton
