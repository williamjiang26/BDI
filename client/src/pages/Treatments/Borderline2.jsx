import React from "react"
import lionImage from '../../images/lion.jpeg'
import {TreatmentHeader} from '../../components/Header';

export default function App(){
    return(
        <div class="container">
            <p class="treatment">Art and Creative Therapy</p>
            <img src={lionImage} alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Incorporate creative exercises such as art, music, or writing therapy.
    - Provide a space for users to express themselves through different forms of art.


            </div>  
            <p class="treatment">Virtual Reality (VR) Therapy</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Explore the potential of VR for immersive therapeutic experiences.
    - Create virtual environments conducive to relaxation, mindfulness, or exposure therapy.


            </div>  
            <p class="treatment">Integration with Wearable Devices</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Connect with fitness trackers or smartwatches to monitor physical activity and sleep patterns.
    - Use real-time data to provide personalized recommendations.


            </div>  
            <p class="treatment">Language Preferences</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Offer the option to use the tool in different languages to cater to a diverse user base.
    - Consider cultural nuances in content and interactions.



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