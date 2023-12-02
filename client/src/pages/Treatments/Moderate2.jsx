import React from "react"
import {TreatmentHeader} from '../../components/Header';


export default function App(){
    return(
        <div class="container">
            <p class="treatment">Goal Setting and Achievement </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - CBT in these apps incorporates goal setting. Users set achievable, specific, and measurable goals for themselves. They can then track their progress toward these goals, which fosters a sense of accomplishment.            </div>  
            <p class="treatment">Identifying Cognitive Distortions </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Apps teach users to recognize common cognitive distortions, such as all-or-nothing thinking, overgeneralization, or personalization. This helps individuals gain insight into how their thought patterns contribute to their depressive feelings.            </div>  
            <p class="treatment">Challenging Negative Beliefs </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - The apps encourage users to challenge and reframe negative beliefs. They provide tools and prompts for identifying more balanced and realistic perspectives on situations and events.
            </div>  
            <p class="treatment">Mindfulness Integration</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Some apps integrate mindfulness techniques within CBT. Mindfulness helps individuals stay present and nonjudgmental, reducing rumination and promoting emotional regulation.            </div>  
            <div class="video-container">
                <iframe width="840" height="630"
                    src="https://www.youtube.com/embed/bcW6HOJr5Cg?si=IQZa55O6ESHxW_eW">
                </iframe>
            </div>
            <TreatmentHeader/>
        </div>

    )
}