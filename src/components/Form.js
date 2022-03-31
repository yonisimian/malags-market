import React, { useState } from 'react'
import FormCourse from './FormCourse'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { auth, db } from '../firebase'
import FormContact from './FormContact'

const Form = ({exit, malag_info}) => {
    const [course1Num,  setCourse1Num]    = useState(malag_info.courseNum  .defaultValue)
    const [course1Name, setCourse1Name]   = useState(malag_info.courseName .defaultValue)
    const [course1Avg,  setCourse1Avg]    = useState(malag_info.courseAvg  .defaultValue)
    const [course1Med,  setCourse1Med]    = useState(malag_info.courseMed  .defaultValue)
    const [course1Day,  setCourse1Day]    = useState(malag_info.courseDay  .defaultValue)
    const [course1Hours, setCourse1Hours] = useState(malag_info.courseHours.defaultValue)
    const [course1Comments,  setCourse1Comments]  = useState(malag_info.courseComments.defaultValue)
    const [course1Active,    setCourse1Active]    = useState(true)

    const [course2Num,  setCourse2Num]    = useState(malag_info.courseNum  .defaultValue)
    const [course2Name, setCourse2Name]   = useState(malag_info.courseName .defaultValue)
    const [course2Avg,  setCourse2Avg]    = useState(malag_info.courseAvg  .defaultValue)
    const [course2Med,  setCourse2Med]    = useState(malag_info.courseMed  .defaultValue)
    const [course2Day,  setCourse2Day]    = useState(malag_info.courseDay  .defaultValue)
    const [course2Hours, setCourse2Hours] = useState(malag_info.courseHours.defaultValue)
    const [course2Comments,  setCourse2Comments]  = useState(malag_info.courseComments.defaultValue)
    const [course2Active,    setCourse2Active]    = useState(false)

    const [contactName, setContactName] = useState("")
    const [contactTele, setContactTele] = useState(0)
    const [contactElse, setContactElse] = useState("")

    const collectionRef = collection(db, "data")
    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdAt = Timestamp.now()
        await addDoc(collectionRef, {
            createdAt,
            createdBy: auth.currentUser.uid,
            give: {
                isGiving:        course1Active,  
                courseNum:       course1Num,
                courseName:      course1Name,
                courseAvg:       course1Avg,
                courseMed:       course1Med,
                courseDay:       course1Day,
                courseHours:     course1Hours,
                courseComments:  course1Comments
            },
            take: {
                isTaking:        course2Active,  
                courseNum:       course2Num,
                courseName:      course2Name,
                courseAvg:       course2Avg,
                courseMed:       course2Med,
                courseDay:       course2Day,
                courseHours:     course2Hours,
                courseComments:  course2Comments
            },
            contact: {
                name:  contactName,
                phone: contactTele,
                other: contactElse
            }
        })
        window.location.reload(false);
    }


    return (
        <div className="form-wrapper">
            <form>
                <button onClick={exit}>X</button>
                <FormCourse
                    title="מוסר/ת" 
                    courseAvg          = {course1Avg}
                    courseMed          = {course1Med}
                    courseActive       = {course1Active}
                    setCourseNum       = {setCourse1Num}
                    setCourseName      = {setCourse1Name}
                    setCourseAvg       = {setCourse1Avg}
                    setCourseMed       = {setCourse1Med}
                    setCourseDay       = {setCourse1Day}
                    setCourseHours     = {setCourse1Hours}
                    setCourseComments  = {setCourse1Comments}
                    setCourseActive    = {setCourse1Active}
                />
                <FormCourse
                    title="מחפש/ת" 
                    courseAvg          = {course2Avg}
                    courseMed          = {course2Med}
                    courseActive       = {course2Active}
                    setCourseNum       = {setCourse2Num}
                    setCourseName      = {setCourse2Name}
                    setCourseAvg       = {setCourse2Avg}
                    setCourseMed       = {setCourse2Med}
                    setCourseDay       = {setCourse2Day}
                    setCourseHours     = {setCourse2Hours}
                    setCourseComments  = {setCourse2Comments}
                    setCourseActive    = {setCourse2Active}
                />
                <FormContact
                    title="פרטי יצירת קשר"
                    setContactName={setContactName}
                    setContactTele={setContactTele}
                    setContactElse={setContactElse}
                />

                <input type="submit" value="שגר!" onClick={handleSubmit}></input>
            </form>
        </div>
    )
}

export default Form