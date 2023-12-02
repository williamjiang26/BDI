import React from "react"
import { Link } from 'react-router-dom';

export default function Treatments(){
    return (
        <>
            <h1> <a style={{ color: 'red' }}>Severity levels:</a> Not Severe</h1>
                <Link to='/nonsevere'>
                    <a alt='Treatment Page 1'>Treatment Page 1</a>
                </Link>  
            <h1> <a style={{ color: 'red' }}>Severity levels:</a> Borderline clinical depression and moderate depression</h1>
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
                </ol>
                

            <h1> <a style={{ color: 'red' }}>Severity levels:</a> Mild mood disturbances</h1>
                <ol>
                    <li>
                       <Link to='/mild1'>
                            <a alt='Treatment Page 1'>Treatment Page 1</a>
                        </Link>  
                    </li>
                    <li>
                       <Link to='/mild2'>
                            <a alt='Treatment Page 2'>Treatment Page 2</a>
                        </Link>  
                    </li>
                   <li>
                        <Link to='/mild3'>
                            <a alt='Treatment Page 3'>Treatment Page 3</a>
                        </Link>  
                   </li>
                   <li>
                       <Link to='/mild4'>
                            <a alt='Treatment Page 4'>Treatment Page 4</a>
                        </Link>  
                    </li>
                    <li>
                       <Link to='/mild5'>
                            <a alt='Treatment Page 5'>Treatment Page 5</a>
                        </Link>  
                    </li>
                   <li>
                        <Link to='/mild6'>
                            <a alt='Treatment Page 6'>Treatment Page 6</a>
                        </Link>  
                   </li>
                   <li>
                       <Link to='/mild7'>
                            <a alt='Treatment Page 7'>Treatment Page 7</a>
                        </Link>  
                    </li>
                    <li>
                       <Link to='/mild8'>
                            <a alt='Treatment Page 8'>Treatment Page 8</a>
                        </Link>  
                    </li>
                   <li>
                        <Link to='/mild9'>
                            <a alt='Treatment Page 9'>Treatment Page 9</a>
                        </Link>  
                   </li>
                </ol>
<h1> <a style={{ color: 'red' }}>Severity levels:</a> Most Severe</h1>    
                <Link to='/severe'>
                    <a alt='Treatment Page 1'>Treatment Page 1</a>
                </Link>  
        </>
    )
}