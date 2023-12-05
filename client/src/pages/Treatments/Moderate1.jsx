import React from "react"
import copingImage from '../../images/coping.webp'
import cbtImage from '../../images/cbt.png'
import journals from '../../images/journals.jpeg'
import behavior from '../../images/behavior.webp'

import {LeftBox, RightBox} from '../Treatment'

export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={cbtImage} heading="CBT Exercises" text="CBT exercises form a transformative toolkit, unraveling thought-behavior connections. Through techniques like cognitive restructuring and behavioral interventions, they reframe negative thoughts, alter behaviors, and enhance self-awareness. These exercises, incorporating mindfulness and relaxation, equip individuals with practical strategies to challenge unhelpful patterns. Personalized and practical, they empower resilient mindsets, fostering adaptive responses and real-life problem-solving skills, ultimately guiding individuals towards emotional balance and lasting positive change."/>
            <RightBox image={journals} heading="Thought Journals" text="Thought Journals are insightful tools capturing the intricate interplay between thoughts, emotions, and actions in a concise format. By documenting specific situations, associated emotions, automatic thoughts, and resulting behaviors, they unveil patterns. These journals prompt reflection, encouraging individuals to identify cognitive distortions and challenge them with rational alternatives. They empower self-awareness, offering a structured means to dissect and reframe thoughts, fostering resilience and informed decision-making. Thought Journals serve as personal compasses, guiding individuals towards a deeper understanding of their mental landscapes, empowering them to navigate challenges with clarity and purpose."/>
            <LeftBox image={behavior} heading="Behavioral Activation" text="Behavioral Activation sparks transformative change by re-engaging individuals in meaningful activities, elevating mood and restoring vitality. Focused on scheduling and implementing positive behaviors aligned with personal values, it combats depression's inertia. By breaking the cycle of avoidance, it fosters gradual exposure to enjoyable or fulfilling tasks, boosting confidence and self-efficacy. This approach encourages small, achievable steps, cultivating a sense of accomplishment and purpose. Behavioral Activation acts as a catalyst for momentum, reshaping routines, and reviving enthusiasm for life, ultimately restoring balance by reconnecting individuals with the vibrant fabric of their everyday experiences."/>
            <RightBox image={copingImage} heading="Coping Strategies" text="Coping strategies are versatile tools empowering individuals to navigate life's challenges with resilience and adaptability. They encompass a spectrum of techniques—ranging from mindfulness to problem-solving and social support—that bolster emotional well-being. Mindfulness practices cultivate present-moment awareness, fostering calm amidst chaos. Problem-solving strategies equip individuals with structured approaches to overcome obstacles, promoting effective decision-making. Social support encourages seeking help and connection, providing a vital safety net during adversity. Coping strategies, tailored to individual needs, serve as anchors, fortifying mental fortitude, and offering pathways to manage stress, build resilience, and navigate life's complexities with strength and grace."/>        
            <div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
            </div>
        </div>
    )
}