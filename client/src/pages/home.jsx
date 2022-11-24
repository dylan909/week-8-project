import React from "react";
import ProfileSection from "../components/profileSection";
import './home.css'

const Home= () => {
    return (
        <div className="Home">
            <ProfileSection/>
            <div className="postSide">Posts</div>
            <div className="RightSide">RightSide</div>

        </div>
    )
}


export default Home 