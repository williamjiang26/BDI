import React from "react"
import lionImage from '../../images/lion.jpeg'
import {TreatmentHeader} from '../../components/Header';

export default function App(){
    return(
        <div class="container">
            <p class="treatment">Mindfulness and Relaxation Techniques</p>
            <img src={lionImage} alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Include guided meditation and mindfulness exercises to help users manage stress and anxiety.
   - Incorporate deep-breathing exercises and progressive muscle relaxation.
            </div>  
            <p class="treatment">Journaling </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Offer a digital journal for users to express their thoughts and emotions.
   - Include prompts for reflection and self-awareness.
            </div>  
            <p class="treatment">Peer Support</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Facilitate online support groups or forums where users can connect with others experiencing similar challenges.
   - Include features for anonymous sharing and community building.
            </div>  
            <p class="treatment">Therapist Support</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Provide access to licensed therapists through chat, video, or phone sessions.
   - Offer asynchronous messaging for ongoing support.
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