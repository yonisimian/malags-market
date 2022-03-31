import React, { useState } from 'react'
import { auth } from '../firebase'
import TableContact from './TableContact'

const TableRow = ({row, info, data, deleteRow}) => {
  const [showContact, setShowContact] = useState(false)

  return (
    <tr>
        <th>{row}</th>
        {Object.keys(info).map(key => <td key={key}>{data.give[key] === info[key].defaultValue ? "" : data.give[key]}</td>)}
        <td><button onClick={() => setShowContact(true)}>בחר/י</button></td>
        {(auth.currentUser.uid === data.createdBy) && <td><button onClick={() => deleteRow()}>מחק/י</button></td>}
        {showContact && <TableContact data={data.contact} exit={() => setShowContact(false)} />}
    </tr>
  )
}

export default TableRow 