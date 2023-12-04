import React from "react"
import {LeftBox, RightBox} from '../Treatment'
import lionImage from '../../images/lion.jpeg'


export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={lionImage} heading="Daily Check-Ins" text="- Users often complete daily or weekly check-ins, answering questions related to their mood, thoughts, and behaviors. This data can be used to track progress and identify patterns."/>
            <RightBox image={lionImage} heading="Feedback and Reinforcement" text="- Apps provide feedback and reinforcement for users' efforts. They may offer rewards for completing exercises or for achieving goals, encouraging engagement."/>  
            <LeftBox image={lionImage} heading="Progress Monitoring" text="- The apps track and display users' progress over time through visual representations, charts, or reports. Users can see how their depressive symptoms change as they engage in CBT exercises."/>
            <RightBox image={lionImage} heading="Individualized Treatment" text="- CBT in these apps is tailored to each user's specific needs and progress. Algorithms adjust the content and interventions based on individual challenges and goals."/>
            <div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
            </div>
        </div>

    )
}