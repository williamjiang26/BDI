import React from "react"
import lionImage from '../../images/lion.jpeg'
import {LeftBox, RightBox} from '../Treatment'

export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={lionImage} heading="Personalized Resource Library" text="Tailored repositories of information, coping tools, and therapeutic resources curated to individual needs. Offer easy access to articles, exercises, and multimedia content supporting mental health journey."/>
            <RightBox image={lionImage} heading="Crisis Response Plan" text="Structured plans outlining steps during emotional crises. Include coping strategies, emergency contacts, and personalized directives to manage distressing situations effectively."/>
            <LeftBox image={lionImage} heading="Integration with E-Health Records" text="Seamless integration of treatment progress, notes, and insights into electronic health records. Facilitates comprehensive and collaborative care among healthcare providers."/>
            <RightBox image={lionImage} heading="Weekly Challenges" text="Engaging weekly activities designed to foster growth and skill-building. Encourage small, achievable steps toward personal goals, enhancing motivation and self-efficacy."/>
            <div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
            </div>
        </div>

    )
}