import React from 'react'

export default function Item({item, updateDocument, deleteDocument}){
    return(
        <div className="row">
            <input type="checkbox" checked={!item.active} onClick={()=>{updateDocument({...item, active:!item.active})}}/>
            <span>{item.text}</span>
            <button onClick={()=>{deleteDocument(item)}}>Apagar</button>
        </div>
    )
}