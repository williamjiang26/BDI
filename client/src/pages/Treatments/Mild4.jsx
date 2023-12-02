import React from "react"
import lionImage from '../../images/lion.jpeg'
import {TreatmentHeader} from '../../components/Header';

export default function App(){
    return(
        <div class="container">
            <p class="treatment">Sleep Hygiene </p>
            <img src={lionImage} alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Offer guidance on improving sleep habits and addressing insomnia.
    - Provide tools for tracking sleep patterns and identifying potential issues.
            </div>  
            <p class="treatment">Physical Activity Integration </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Encourage regular exercise through workout plans or activity tracking.
    - Highlight the link between physical activity and mental well-being.
            </div>  
            <p class="treatment">Emergency Support</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Include crisis intervention resources, such as helplines and crisis text lines.
    - Implement safety planning tools for users at risk of self-harm.
            </div>  
            <p class="treatment">Progress Tracking</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Provide visualizations of users' progress over time.
    - Use data analytics to identify patterns and offer personalized recommendations.

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