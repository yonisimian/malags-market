import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'

const Main = () => {
  const malag_info = {
    courseNum:      {title: 'מספר קורס',  defaultValue: 0 },
    courseName:     {title: 'שם קורס'  ,  defaultValue: ''  },
    courseAvg:      {title: 'ממוצע'    ,  defaultValue: 0 },
    courseMed:      {title: 'חציון'    ,  defaultValue: 0 },
    courseDay:      {title: 'יום'      ,  defaultValue: ''  },
    courseHours:    {title: 'שעות'     ,  defaultValue: 0 },
    courseComments: {title: 'הערות'    ,  defaultValue: ''  },
  }
  const [showForm, setShowForm] = useState(false)

  return (
    <main>
      <h2>כותרת לטבלה, כנראה</h2>
      <Table malag_info={malag_info} setShowForm={setShowForm} />
      {showForm && <Form exit={() => setShowForm(false)} malag_info={malag_info} />}
    </main>
  )
}

export default Main