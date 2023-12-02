import React from "react"
import lionImage from '../../images/lion.jpeg'
export default function App(){
    return(
        <div class="container">
            <p class="treatment">Personalized Resource Library</p>
            <img src={lionImage} alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Curate a library of articles, videos, and audio content on various topics related to mental health.
    - Tailor content recommendations based on users' preferences and needs.

            </div>  
            <p class="treatment">Crisis Response Plan</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Assist users in creating a crisis response plan outlining coping strategies during acute distress.
    - Include emergency contacts and steps to take in case of a crisis.

            </div>  
            <p class="treatment">Integration with E-Health Records</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Allow users to securely integrate their mental health data with electronic health records.
    - Facilitate communication between the online tool and healthcare providers.

            </div>  
            <p class="treatment">Weekly Challenges</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Implement weekly challenges to encourage users to step out of their comfort zones and try new activities.
    - Foster a sense of achievement and personal growth.


            </div>  
            <div class="video-container">
                <iframe width="840" height="630"
                    src="https://www.youtube.com/embed/bcW6HOJr5Cg?si=IQZa55O6ESHxW_eW">
                </iframe>
            </div>
        </div>

    )
}