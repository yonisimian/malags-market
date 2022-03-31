import React from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = ({setIsAuth}) => {
    const signInWithGoogle = (e) => {
        e.preventDefault()
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
        })
    }

    return (
        <main>
            <div className="form-wrapper">
                <form>
                    <fieldset>
                        <legend>התחברות</legend>
                        <p>אמת או חובה, חובה עליך להתחבר נגעתי בארץץץץ</p>
                        <button onClick={signInWithGoogle}>התחברות באמצעות גוגל</button>
                    </fieldset>
                </form>
            </div>
        </main>
    )
}

export default Login