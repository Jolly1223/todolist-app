import React from 'react'
import {useHistory} from 'react-router-dom'

const Home = () => {
const history = useHistory()


    const handleOnClick = () => {
        history.push('/todolist')
    }
    return (
        <div className="home-main">
            <h1>Welcome to my ToDo list</h1>
            <button type="button" class="btn btn-primary" onClick={handleOnClick}>Start Now!</button>
        </div>
    )
}

export default Home
