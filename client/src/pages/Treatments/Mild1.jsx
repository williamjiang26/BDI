import React from "react"
import psychoImage from '../../images/psycho.webp'
import moodImage from '../../images/mood.png'
import selfImage from '../../images/self.jpeg'
import cbtImage from '../../images/cbt.jpeg'

import {LeftBox, RightBox, Video} from '../Treatment'

export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={psychoImage} heading="Psychoeducation" text="Information about Depression: Provide users with educational content about depression. This includes explanations of what depression is, its common symptoms (such as persistent sadness, changes in appetite, and sleep disturbances), and the potential causes of depression, including genetic, environmental, and psychological factors.

Understanding Treatment Options: Users are informed about the various treatment options available for depression. This can include psychotherapy (like CBT), medication, lifestyle changes, and self-help strategies.

Importance of Self-Care: Users gain knowledge about the importance of self-care in managing depression. They learn about maintaining a healthy lifestyle through diet, exercise, sleep, and stress management. Self-care is emphasized as a crucial part of the overall treatment plan.

Seeking Professional Help: These apps stress the significance of seeking professional help when needed. Users are educated about the importance of consulting with mental health professionals, such as therapists, psychiatrists, or counselors, to receive appropriate treatment and support.
"/>
            <RightBox image={moodImage} heading="Mood and Symptom Tracking" text="Regular Input: Users are prompted to regularly input their mood, energy level, and other relevant symptoms, such as sleep quality and appetite changes. This can be done daily or as needed.

Tracking Progress: These apps enable users to track their progress over time. By comparing their entries, users and healthcare providers can identify trends, patterns, and triggers related to their depressive symptoms.

Visual Representation: Graphical representations, such as charts or graphs, visually display mood fluctuations over time. This provides a clear and accessible way for users and professionals to assess the trajectory of their mental health.

Data-Informed Decision-Making: Mood and symptom tracking data can help users make informed decisions about their mental health. Users can use this information to evaluate the effectiveness of self-help strategies, therapy, or medication and make necessary adjustments to their treatment plan.

Communication with Healthcare Providers: Users can share the mood and symptom tracking data with their healthcare providers during therapy or medical appointments. This information helps professionals better understand the user's condition and make treatment recommendations accordingly.

Mindfulness Exercises: https://www.youtube.com/watch?v=bcW6HOJr5Cg
https://www.youtube.com/watch?v=5If1LFZ1CQA
https://www.youtube.com/watch?v=xRxT9cOKiM8
https://www.youtube.com/watch?v=O-6f5wQXSu8
https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/self-care/"/>
            <LeftBox image={selfImage} heading="Self-Assessment" text="- Incorporate depression screening tools for users to assess the severity of their symptoms.- Offer personalized feedback based on assessment results."/>
            <RightBox image={cbtImage} heading="Cognitive Behavioral Therapy (CBT)" text="- Integrate CBT exercises and modules to help users identify and challenge negative thought patterns.- Provide interactive tools for goal-setting and problem-solving."/>
            <Video link="https://www.youtube.com/embed/bcW6HOJr5Cg?si=IQZa55O6ESHxW_eW"/>
            <div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
            </div>
        </div>

    )
}