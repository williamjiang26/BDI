import React from "react"
import sleepHygieneImage from '../../images/sleep.jpeg'
import physicalActivityImage from '../../images/exercise.avif'
import emergencySupportImage from '../../images/emer.jpeg'
import progressTrackingImage from '../../images/pos.jpeg'
import {LeftBox, RightBox} from '../Treatment'

export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={sleepHygieneImage} heading="Sleep Hygiene" text="Practices promoting healthy sleep patterns and routines. Focus on optimizing the sleep environment, bedtime rituals, and habits to enhance quality rest and overall well-being."/>
            <RightBox image={physicalActivityImage} heading="Physical Activity Integration" text="Incorporating exercise into daily routines. Encourage movement and physical well-being, improving mood, reducing stress, and enhancing overall health."/>
            <LeftBox image={emergencySupportImage} heading="Emergency Support" text="Strategies and resources for immediate crisis management. Provide guidance, emergency contacts, and coping mechanisms during critical situations."/>
            <RightBox image={progressTrackingImage} heading="Progress Tracking" text="Tools to monitor and assess treatment progress. Enable individuals and therapists to track improvements, adjust strategies, and celebrate milestones."/>
            <div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
            </div>
        </div>

    )
}