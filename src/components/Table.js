import React, { useState, useEffect } from 'react'
import TableRow from './TableRow'
import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'

const Table = ({malag_info, setShowForm}) => {
    const [data, setData] = useState([])
    const collectionRef = collection(db, "data")

    const deletePost = async (id) => {
        const post = doc(db, "data", id)
        await deleteDoc(post)
        window.location.reload(false)
    };

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collectionRef)
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            //console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getPosts()
        
    }, [/*deletePost*/])

    return (
        <table>
            <thead>
                <tr>
                    <th/>
                    {Object.keys(malag_info).map(key => <th key={key}>{malag_info[key].title}</th>)}
                    <th/>
                </tr>
            </thead>

            <tbody>
                {/* <tr>
                    <th>סינון</th>
                    {Object.keys(malag_info).map(key => <td key={key}><input type="search"></input></td>)}
                    <th/>
                </tr> */}

                <tr>
                    <th>
                        <button onClick={() => setShowForm(true)}>הוספת הצעה חדשה</button>
                    </th>
                </tr>

                {data.map((val, key) =>
                    <TableRow
                        key={key}
                        row={key+1}
                        info={malag_info}
                        data={val}
                        deleteRow={() => deletePost(val.id)}
                    />
                )}
            </tbody>
        </table>
    )
}

export default Table