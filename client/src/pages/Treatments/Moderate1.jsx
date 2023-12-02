import React from "react"
import lionImage from '../../images/lion.jpeg'
export default function App(){
    return(
        <div class="container">
            <p class="treatment">CBT Exercises </p>
            <img src={lionImage} alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Apps integrate CBT exercises that guide users through structured activities designed to identify and challenge negative thought patterns. For example, users might be prompted to record their negative thoughts and then explore the evidence supporting or contradicting those thoughts.
            </div>  
            <p class="treatment">Thought Journals </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Users are encouraged to maintain thought journals, where they can document their automatic, negative thoughts as they occur. The app assists in analyzing these thoughts and identifying cognitive distortions, such as black-and-white thinking or catastrophizing.
            </div>  
            <p class="treatment">Behavioral Activation </p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Apps often include components related to behavioral activation, a core aspect of CBT. Users are encouraged to engage in activities that bring them a sense of achievement and pleasure, even when they don't feel like it. The app may help users schedule and monitor these activities.
            </div>  
            <p class="treatment">Coping Strategies</p>
            <img src="" alt="Description"/>
            <div class="content">
                <p class="description"/>
                - Users learn a range of coping strategies that help them manage distressing emotions. These strategies may include relaxation techniques, problem-solving skills, and stress management tools.
            </div>  
            <div class="video-container">
                <iframe width="840" height="630"
                    src="https://www.youtube.com/embed/bcW6HOJr5Cg?si=IQZa55O6ESHxW_eW">
                </iframe>
            </div>
        </div>

    )
}