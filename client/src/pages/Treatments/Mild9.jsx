import React from "react"
import lionImage from '../../images/lion.jpeg'
export default function App(){
    return(
        <div class="container">
            <p class="treatment">AI-driven Personalization</p>
            <img src={lionImage} alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Use artificial intelligence to analyze user data and provide personalized recommendations.
    - Adapt content and interventions based on individual progress and preferences.



            </div>  
            <p class="treatment">User Forums for Professionals</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Create a separate space for mental health professionals to discuss best practices and share insights.
    - Encourage collaboration and learning within the professional community.

            </div>  
            <p class="treatment">Interactive Workbooks</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Provide interactive digital workbooks for users to complete therapeutic exercises and activities.
    - Offer structured programs addressing specific aspects of depression.


            </div>  
            <p class="treatment">Virtual Reality Exposure Therapy (VRET)</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Explore the use of virtual reality for exposure therapy, particularly for addressing specific phobias or anxieties.
    - Ensure proper guidance and support during these virtual experiences.



            </div>  
            <div class="video-container">
                <iframe width="840" height="630"
                    src="https://www.youtube.com/embed/bcW6HOJr5Cg?si=IQZa55O6ESHxW_eW">
                </iframe>
            </div>
        </div>

    )
}