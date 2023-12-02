import React from "react"
import lionImage from '../../images/lion.jpeg'
export default function App(){
    return(
        <div class="container">
            <p class="treatment">Family and Friends Portal:</p>
            <img src={lionImage} alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Provide a secure platform for users to involve their support network.
    - Educate friends and family about depression and how they can offer assistance.
            </div>  
            <p class="treatment">Educational Modules for Loved Ones</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Develop modules to help family and friends understand depression and how to support someone going through it.
    - Include communication tips and strategies for offering effective support.
            </div>  
            <p class="treatment">Telepsychiatry Services</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Integrate telepsychiatry services for users who may benefit from medication management.
    - Ensure secure and confidential video consultations with licensed psychiatrists.
            </div>  
            <p class="treatment">Stress Management Techniques</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Offer a variety of stress reduction techniques such as progressive muscle relaxation, biofeedback, or guided imagery.
    - Provide step-by-step instructions for users to practice these techniques.

            </div>  
            <div class="video-container">
                <iframe width="840" height="630"
                    src="https://www.youtube.com/embed/bcW6HOJr5Cg?si=IQZa55O6ESHxW_eW">
                </iframe>
            </div>
        </div>

    )
}