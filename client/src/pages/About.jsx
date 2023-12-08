import React from 'react';
import  masthead from '../images/bg-masthead.jpg'
import  img1 from '../images/demo-image-01.jpg'
import  img2 from '../images/demo-image-02.jpg'
import  img3 from '../images/bg-signup.jpg'
import img4 from '../images/ipad.png'
export default function About() {
  return (
    
    

      <section class="projects-section bg-light" id="projects">
        <h1 className='text-center text-white'>About</h1>
            <div class="container px-4 px-lg-5">
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={masthead} alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-white text-center text-lg-left">
                            <h4>Tailored to Your Unique Journey </h4>
                            <p class="text-black-50 mb-0">We understand that everyone's experience with depression is unique. That's why our app employs cutting-edge technology to personalize your therapy journey. Through advanced algorithms and user input, we curate a customized plan that aligns with your specific needs, preferences, and goals.</p>
                        </div>
                    </div>
                </div>
                <h1 className='text-2xl font-bold text-white mb-4 text-slate-800'>
                Features to Brighten Your Day
                </h1>
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={img1} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Guided Activities</h4>
                                    <p class="mb-0 text-white-50">Engage in evidence-based therapy activities, including mindfulness exercises, cognitive behavioral techniques, and mood tracking. Our guided activities are crafted by mental health professionals to help you build resilience and foster a positive mindset.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={img2} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Journaling and Reflection</h4>
                                    <p class="mb-0 text-white-50">Express your thoughts and feelings through our intuitive journaling feature. Documenting your experiences can be a powerful tool for self-discovery and emotional release.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={img1} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Virtual Support Communities</h4>
                                    <p class="mb-0 text-white-50">Connect with individuals who understand what you're going through. Our virtual support communities provide a safe space to share experiences, gain insights, and offer support to others on a similar journey.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={img2} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Progress Tracking</h4>
                                    <p class="mb-0 text-white-50">Celebrate your victories, no matter how small. Track your progress over time and gain valuable insights into your mental health journey.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    
     
    
  );
}
