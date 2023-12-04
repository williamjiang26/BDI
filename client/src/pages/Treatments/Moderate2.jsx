import React from "react"
import {LeftBox, RightBox} from '../Treatment'
import lionImage from '../../images/lion.jpeg'

export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={lionImage} heading="Goal Setting and Achievement" text="- CBT in these apps incorporates goal setting. Users set achievable, specific, and measurable goals for themselves. They can then track their progress toward these goals, which fosters a sense of accomplishment."/>
            <RightBox image={lionImage} heading="Identifying Cognitive Distortions" text="- Apps teach users to recognize common cognitive distortions, such as all-or-nothing thinking, overgeneralization, or personalization. This helps individuals gain insight into how their thought patterns contribute to their depressive feelings."/>
            <LeftBox image={lionImage} heading="Challenging Negative Beliefs" text="- The apps encourage users to challenge and reframe negative beliefs. They provide tools and prompts for identifying more balanced and realistic perspectives on situations and events."/>
            <RightBox image={lionImage} heading="Mindfulness Integration" text="- Some apps integrate mindfulness techniques within CBT. Mindfulness helps individuals stay present and nonjudgmental, reducing rumination and promoting emotional regulation."/>
            <div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
            </div>
        </div>
    )
}