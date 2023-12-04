import React from "react"
import lionImage from '../../images/lion.jpeg'
import {LeftBox, RightBox} from '../Treatment'

export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={lionImage} heading="AI-driven Personalization" text="- Use artificial intelligence to analyze user data and provide personalized recommendations.
- Adapt content and interventions based on individual progress and preferences."/>

<RightBox image={lionImage} heading="User Forums for Professionals" text="- Create a separate space for mental health professionals to discuss best practices and share insights.
- Encourage collaboration and learning within the professional community."/>

<LeftBox image={lionImage} heading="Interactive Workbooks" text="- Provide interactive digital workbooks for users to complete therapeutic exercises and activities.
- Offer structured programs addressing specific aspects of depression."/>

<RightBox image={lionImage} heading="Virtual Reality Exposure Therapy (VRET)" text="- Explore the use of virtual reality for exposure therapy, particularly for addressing specific phobias or anxieties.
- Ensure proper guidance and support during these virtual experiences."/>
        <div className="button-container">
            <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
        </div>
    </div>

    )
}