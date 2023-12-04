import React from "react"
import lionImage from '../../images/lion.jpeg'
import {LeftBox, RightBox} from '../Treatment'

export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={medicationImage} heading="Medication Management" text="Structured plans for medication intake, dosage, and progress tracking. Support individuals in adhering to prescribed medications, ensuring consistency and efficacy."/>
            <RightBox image={activityPlanningImage} heading="Activity Planning" text="Structured scheduling of meaningful and enjoyable activities. Aimed at combating inertia, promoting engagement, and restoring vitality."/>
            <LeftBox image={goalTrackingImage} heading="Goal Tracking" text="Tools for setting, monitoring, and achieving personal objectives. Foster motivation, accountability, and a sense of accomplishment."/>
            <RightBox image={positivePsychologyImage} heading="Positive Psychology Exercises" text="Activities emphasizing strengths, gratitude, and positive emotions. Enhance well-being by focusing on optimism, resilience, and personal growth."/>
            <div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
            </div>
        </div>

    )
}