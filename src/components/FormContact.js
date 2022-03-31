import React from 'react'

const FormContact = (props) => {
  return (
    <fieldset>
        <legend>{props.title}</legend>
        
        <label>שם</label>
        <input type="text" onChange={(e) => props.setContactName(e.target.value)} />
        <br/>

        <label>טלפון</label>
        <input type="tel" onChange={(e) => props.setContactTele(e.target.value)} />
        <br/>

        <label>אחר</label>
        <input type="text" onChange={(e) => props.setContactElse(e.target.value)} />
        <br/>
    </fieldset>
  )
}

export default FormContact