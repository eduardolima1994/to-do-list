import React, {useState} from 'react'

export default function Item({item, updateDocument, deleteDocument}){

    const [tempText, setTempText] = useState("")

    return(
        <div className="row">
            <input type="checkbox" checked={!item.active} onClick={()=>{updateDocument({...item, active:!item.active})}}/>
            
            {((item.edit) || (item.text ==="")) ? (
                <input 
                    type="text" 
                    placeholder={item.text} 
                    onChange={(e) => {setTempText(e.target.value)}} 
                    onBlur={() => {updateDocument({...item, text: tempText, edit:false})}} 
                />
            ) : 
                <span 
                    onClick={() => {updateDocument({...item, edit:true})}}
                    style={item.active ? {} : {textDecoration: "line-through"}}
                >{item.text}</span>
            }
            
            <button onClick={()=>{deleteDocument(item)}}>Apagar</button>
        </div>
    )
}