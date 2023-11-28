import React from "react"
import { Link } from 'react-router-dom';

export default function Treatments(){
    return (
        <>
            <h1> <a style={{ color: 'red' }}>Severity levels:</a> Borderline clinical depression and moderate depression</h1>
                <ol>
                    <li>
                       <Link to='/treatment3'>
                            <a alt='CBT Exercises'>CBT Exercises</a>
                        </Link>  
                    </li>
                   <li>
                        <Link to='/treatment4'>
                            <a alt='Thought Journals'>Thought Journals</a>
                        </Link>  
                   </li>
                   <li>
                       <Link to='/treatment5'>
                            <a alt='Behavioral Activation'>Behavioral Activation</a>
                        </Link>  
                    </li>
                   <li>
                        <Link to='/treatment6'>
                            <a alt='Coping Strategies'>Coping Strategies</a>
                        </Link>  
                   </li>
                   <li>
                       <Link to='/treatment7'>
                            <a alt='Goal Setting and Achievement'>Goal Setting and Achievement</a>
                        </Link>  
                    </li>
                   <li>
                        <Link to='/treatment8'>
                            <a alt='Identifying Cognitive Distortions'>Identifying Cognitive Distortions</a>
                        </Link>  
                   </li>
                </ol>
                

            <h1> <a style={{ color: 'red' }}>Severity levels:</a> Mild mood disturbances</h1>
                <ol>
                    <li>
                       <Link to='/treatment1'>
                            <a alt='Psycho Education'>Psycho Education</a>
                        </Link>  
                    </li>
                   <li>
                        <Link to='/treatment2'>
                            <a alt='Mood and Symptom Tracking'>Mood and Symptom Tracking</a>
                        </Link>  
                   </li>
                    
                </ol>
                
        </>
    )
}