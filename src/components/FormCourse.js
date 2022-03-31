import React, { useState } from 'react'

const FormCourse = (props) => {
    const [checkedAvg,   setCheckedAvg]   = useState(false)
    const [checkedMed,   setCheckedMed]   = useState(false)
    const [checkedDay,   setCheckedDay]   = useState(false)
    const [checkedHours, setCheckedHours] = useState(false)

    return (
        <fieldset>
            <legend>{props.title}<input type="checkbox" checked={props.courseActive} onChange={() => props.setCourseActive(!props.courseActive)}/></legend>

            {props.courseActive &&
            <>
                <label>מספר קורס</label>
                <input type="number" onChange={(e) => props.setCourseNum(e.target.value)} />
                <br />

                <label>שם קורס</label>
                <input type="text"onChange={(e) => props.setCourseName(e.target.value)} />
                <br/>

                <input type="checkbox" value={checkedAvg} onChange={() => setCheckedAvg(!checkedAvg)} />
                <label>ממוצע</label>
                <input disabled={!checkedAvg} type="range" min="50" max="100" value={props.courseAvg} onChange={(e) => props.setCourseAvg(e.target.value)} />
                {checkedAvg && <output>{props.courseAvg}{props.title === "מחפש/ת" && " ומעלה"}</output>}
                <br/>

                <input type="checkbox" value={checkedMed} onChange={() => setCheckedMed(!checkedMed)} />
                <label>חציון</label>
                <input disabled={!checkedMed} type="range" min="50" max="100" value={props.courseMed} onChange={(e) => props.setCourseMed(e.target.value)} />
                {checkedMed && <output>{props.courseMed}{props.title === "מחפש/ת" && " ומעלה"}</output>}
                <br/>

                <input type="checkbox" value={checkedDay} onChange={() => setCheckedDay(!checkedDay)} />
                <label>יום</label>
                <select disabled={!checkedDay} id="day" onChange={(e) => props.setCourseDay(e.target.value)}>
                    {['ראשון','שני','שלישי','רביעי','חמישי'].map(day => <option key={day} value={day}>{day}</option>)}
                </select>
                <br />

                <input type="checkbox" value={checkedHours} onChange={() => setCheckedHours(!checkedHours)} />
                <label>שעות שבועיות</label>
                <input disabled={!checkedHours} type="number" onChange={(e) => props.setCourseHours(e.target.value)} />
                <br/>

                <label>הערות</label>
                <input type="text" onChange={(e) => props.setCourseComments(e.target.value)} />
                <br/>
            </>
            }
        </fieldset>
    )
}

export default FormCourse