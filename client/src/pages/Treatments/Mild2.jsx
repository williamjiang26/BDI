import React from "react"
import lionImage from '../../images/lion.jpeg'
import {LeftBox, RightBox} from '../Treatment'

export default function App(){
    return(
        <div class="treatment-section">
           <LeftBox image={lionImage} heading="Mindfulness and Relaxation Techniques" text="Practices fostering present-moment awareness and relaxation. Techniques include deep breathing, guided meditation, and progressive muscle relaxation, aiding in stress reduction and emotional regulation."/>

<RightBox image={lionImage} heading="Journaling" text="Structured writing exercises promoting self-reflection and emotional expression. Encourage individuals to explore thoughts and emotions, aiding in understanding and processing experiences."/>

<LeftBox image={lionImage} heading="Peer Support" text="Interactive communities offering understanding, empathy, and shared experiences. Foster a sense of belonging, providing mutual support, and reducing feelings of isolation."/>

<RightBox image={lionImage} heading="Therapist Support" text="Professional guidance and support from licensed therapists. Offer personalized interventions, coping strategies, and tools tailored to individual needs and treatment goals."/>
<div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
            </div>
        </div>

    )
}