import React from "react"
import lionImage from '../../images/lion.jpeg'
import {TreatmentHeader} from '../../components/Header';

export default function App(){
    return(
        <div class="container">
            <p class="treatment">Medication Management</p>
            <img src={lionImage} alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Include features for users to track their medication schedules.
   - Provide educational content about medications commonly used to treat depression.

            </div>  
            <p class="treatment">Activity Planning </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Assist users in scheduling and tracking daily activities to promote a healthy routine.
   - Include reminders for important tasks and self-care activities.

            </div>  
            <p class="treatment">Goal Tracking</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Allow users to set and track personal goals for mental health improvement.
    - Provide positive reinforcement for achieving milestones.

            </div>  
            <p class="treatment">Positive Psychology Exercises</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Integrate exercises that focus on strengths, gratitude, and positive affirmations.
    - Promote activities that foster a sense of accomplishment and well-being.

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