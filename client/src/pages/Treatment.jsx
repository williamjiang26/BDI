import React from "react"
import { Link } from 'react-router-dom';

export default function Treatments(){
    return (
        <div className="lion button-container">
            <h1 className="text-white"> <a style={{ color: 'red' }}>Severity levels:</a> Not Severe</h1>
                <Link to='/nonsevere'>
                    <a alt='Not Severe'>Not Severe</a>
                </Link>  

                <h1 className="text-white"> <a style={{ color: 'red' }}>Severity levels:</a> Mild mood disturbances</h1>
                <ol>
                    <li>
                       <Link to='/mild1'>
                            <a alt='Mild 1'>Mild 1</a>
                        </Link>  
                    </li>
                    <li>
                       <Link to='/mild2'>
                            <a alt='Mild 2'>Mild 2</a>
                        </Link>  
                    </li>
                   <li>
                        <Link to='/mild3'>
                            <a alt='Mild 3'>Mild 3</a>
                        </Link>  
                   </li>
                   <li>
                       <Link to='/mild4'>
                            <a alt='Mild 4'>Mild 4</a>
                        </Link>  
                </li>
            <h1 className="text-white"> <a style={{ color: 'red' }}>Severity levels:</a> Moderate depression</h1>
                <ol>
                    <li>
                       <Link to='/moderate1'>
                            <a alt='Moderate 1'>Moderate 1</a>
                        </Link>  
                    </li>
                   <li>
                        <Link to='/moderate2'>
                            <a alt='Moderate 2'>Moderate 2</a>
                        </Link>  
                   </li>
                   <li>
                       <Link to='/moderate3'>
                            <a alt='Moderate 3'>Moderate 3</a>
                        </Link>  
                    </li>
                    <li>
                        <Link to='/moderate4'>
                            <a alt='Treatment Page 4'>Moderate 4</a>
                        </Link>  
                   </li>
                </ol>
                <h1 className="text-white"> <a style={{ color: 'red' }}>Severity levels:</a> Borderline clinical depression</h1>
                    <li>
                       <Link to='/borderline1'>
                            <a alt='Borderline 1'>Borderline 1</a>
                        </Link>  
                    </li>
                   <li>
                        <Link to='/borderline2'>
                            <a alt='Borderline 2'>Borderline 2</a>
                        </Link>  
                   </li>
                   <li>
                       <Link to='/borderline3'>
                            <a alt='Borderline 3'>Borderline 3</a>
                        </Link>  
                    </li>
                    <li>
                       <Link to='/borderline4'>
                            <a alt='Borderline 4'>Borderline 4</a>
                        </Link>  
                    </li>
                   
                </ol>
            <h1 className="text-white"> <a style={{ color: 'red' }}>Severity levels:</a> Most Severe</h1>    
                <Link to='/severe'>
                    <a alt='Severe'>Severe</a>
                </Link>  
        </div>
    )
}
export function LeftBox({image, heading, text}){
    return(<div class = "box">
    <img class= "img-thumbnail " src={image} alt="Description"/>
        <div class="content-left">
            <p class="treatment ">{heading}</p>
            {text}        
        </div>  
    </div>
   )
}
export function RightBox({image, heading, text}){
    return(
    <div class = "box">
        <div class="content-right">
        <p class="treatment">{heading}</p>
        {text}
        </div>  
        <img class= "img-thumbnail" src={image} alt="Description"/>
    </div>)
}
export function Video({link}){
    return (<div class="video-container">
    <iframe width="600" height="400"
        src={link}>
    </iframe>
</div>)
}