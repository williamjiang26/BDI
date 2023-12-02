import React from "react"
import lionImage from '../../images/lion.jpeg'
import {TreatmentHeader} from '../../components/Header';

export default function App(){
    return(
        <div class="container">
            <p class="treatment">Gamification</p>
            <img src={lionImage} alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Integrate game-like elements to engage users and make the platform more interactive.
    - Reward users for completing activities and achieving goals.

            </div>  
            <p class="treatment">Regular Check-Ins</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Schedule automated check-ins to monitor users' well-being and gather feedback.
    - Adjust the program based on user responses and evolving needs.

            </div>  
            <p class="treatment">Mood Tracking</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Allow users to log and track their daily moods to identify patterns and triggers.
    - Provide insights into how activities and events correlate with mood fluctuations.

            </div>  
            <p class="treatment">Nutritional Guidance</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Offer information on the impact of nutrition on mental health.
    - Include tips and resources for maintaining a balanced and mood-supportive diet.


            </div>  
            <div class="video-container">
                <iframe width="840" height="630"
                    src="https://www.youtube.com/embed/bcW6HOJr5Cg?si=IQZa55O6ESHxW_eW">
                </iframe>
            </div>
            <TreatmentHeader/>
        </div>

    )
}