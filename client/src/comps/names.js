import React from 'react'



const Names = ({names}) => {

    return (
        <div>
            <ul>
                {
                    names.map( (item,key) => {return (<li>{item.name}</li>)})
                }
            </ul>
        </div>
    )
}

export default Names;