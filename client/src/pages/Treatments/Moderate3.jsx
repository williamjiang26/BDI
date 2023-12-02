import React from "react"
import {TreatmentHeader} from '../../components/Header';


export default function App(){
    return(
        <div class="container">
            <p class="treatment">Daily Check-Ins </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Users often complete daily or weekly check-ins, answering questions related to their mood, thoughts, and behaviors. This data can be used to track progress and identify patterns.
            </div>  
            <p class="treatment">Feedback and Reinforcement </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Apps provide feedback and reinforcement for users' efforts. They may offer rewards for completing exercises or for achieving goals, encouraging engagement.
            </div>  
            <p class="treatment">Progress Monitoring </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - The apps track and display users' progress over time through visual representations, charts, or reports. Users can see how their depressive symptoms change as they engage in CBT exercises.
            </div>  
            <p class="treatment">Individualized Treatment</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - CBT in these apps is tailored to each user's specific needs and progress. Algorithms adjust the content and interventions based on individual challenges and goals.            </div>  
            <div class="video-container">
                <iframe width="840" height="630"
                    src="https://www.youtube.com/embed/bcW6HOJr5Cg?si=IQZa55O6ESHxW_eW">
                </iframe>
            </div>
            <TreatmentHeader/>
        </div>

    )
}