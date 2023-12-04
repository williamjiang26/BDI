import React from "react"
import lionImage from '../../images/lion.jpeg'
import {LeftBox, RightBox} from '../Treatment'

export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={lionImage} heading="Family and Friends Portal" text=" - Provide a secure platform for users to involve their support network.- Educate friends and family about depression and how they can offer assistance."/>
            <RightBox image={modulesImage} heading="Educational Modules for Loved Ones" text="Comprehensive educational modules designed to inform and support loved ones. Offer insights into mental health conditions, coping strategies, and ways to provide effective support."/>
            <LeftBox image={telepsychiatryImage} heading="Telepsychiatry Services" text="Remote psychiatric consultations via video or phone calls. Provide convenient access to mental health professionals for evaluations, therapy sessions, and medication management."/>
            <RightBox image={stressImage} heading="Stress Management Techniques" text="A toolkit of techniques, including mindfulness, relaxation exercises, and stress-reduction strategies. Equip individuals with practical tools to manage stress and enhance overall well-being."/>
            <div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
            </div>
        </div>

    )
}