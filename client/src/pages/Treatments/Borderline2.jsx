import React from "react"
import ArtImage from '../../images/art.jpeg'
import VrImage from '../../images/vr.jpeg'
import wearImage from '../../images/wearable.webp'
import lang from '../../images/lang.jpeg'

import {LeftBox, RightBox} from '../Treatment'


export default function App(){
    return(
        <div class="treatment-section">
            <LeftBox image={ArtImage} heading="Art and Creative Therapy" text="- Incorporate creative exercises such as art, music, or writing therapy.
    - Provide a space for users to express themselves through different forms of art."/>
            <RightBox image={VrImage} heading="Virtual Reality (VR) Therapy" text="- Explore the potential of VR for immersive therapeutic experiences.
    - Create virtual environments conducive to relaxation, mindfulness, or exposure therapy."/>
            <LeftBox image={wearImage} heading="Integration with Wearable Devices" text="- Connect with fitness trackers or smartwatches to monitor physical activity and sleep patterns.
    - Use real-time data to provide personalized recommendations."/>
            <RightBox image={lang} heading="Language Preferences" text="- Offer the option to use the tool in different languages to cater to a diverse user base.
    - Consider cultural nuances in content and interactions."/>
        <div className="button-container">
                <a href="/graph" className="btn btn-white btn-animate ">View Graph</a>
        </div>
    </div>

    )
}