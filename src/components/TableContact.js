import React from 'react'

const TableContact = ({data, exit}) => {
  return (
    <div className="form-wrapper">
        <form>
            <fieldset>
                <legend><button onClick={exit}>X</button>פרטי איש קשר</legend>
                
                <label>שם: {data.name}</label>
                <br/>

                <label>טלפון: {data.phone}</label>
                <br/>

                <label>אחר: {data.other}</label>
                <br/>
            </fieldset>
        </form>
    </div>
  )
}

export default TableContact