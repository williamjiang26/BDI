import React from "react"
import lionImage from '../../images/lion.jpeg'
import {LeftBox, RightBox} from '../Treatment'
export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={lionImage} heading="Gamification" text="Gamified interventions leverage the engaging and motivational elements found in games to create interactive tools and platforms aimed at managing and alleviating depression symptoms. These interventions often integrate game mechanics and principles into mental health practices, making therapy exercises and self-improvement activities more enjoyable and accessible."/>
            <RightBox image={lionImage} heading="Regular Check-Ins" text=" Schedule automated check-ins to monitor users' well-being and gather feedback.
            Adjust the program based on user responses and evolving needs."/>
            <LeftBox image={lionImage} heading="Mood Tracking" text= "Allow users to log and track their daily moods to identify patterns and triggers. Provide insights into how activities and events correlate with mood fluctuations." />
            <RightBox image={lionImage} heading="Nutritional Guidance" text="Offer information on the impact of nutrition on mental health.
                Include tips and resources for maintaining a balanced and mood-supportive diet."/>
            <div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
            </div>
            
        </div>
    )
}