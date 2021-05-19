import React from "react";
import {useHistory} from 'react-router-dom'

export const InfoPage:React.FC = () => {
    const history = useHistory()
     return (
         <>
            <h1>Information about </h1>
            <p>Version app: 1.0.0</p>
            <p>Dev: Pankratov E.</p>
            <p>End of application: 19.05.21</p>
            <button className='btn indigo darken-4' onClick={() => history.push('/')}>Back to to-do list</button>
         </>
     )
}