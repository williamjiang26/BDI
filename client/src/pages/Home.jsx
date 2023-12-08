import React from 'react';
import ipad from '../images/ipad.png'

export default function Home() {
  return (
    <body id="page-top">
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">Qilin Therapy</h1>
                        <h2 class="text-white-50 mx-auto mt-2 mb-5">A handy solution to depression.</h2>
                        <a class="btn btn-primary" href="/bdi">Get Diagnosed</a>
                    </div>
                </div>
            </div>
        </header>
     
        <section class="about-section text-center" id="about">
            <div class="container px-2 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-4">Welcome to Qilin Therapy: Your Companion on the Journey to Mental Wellness</h2>
                        <p class="text-white-50">
      Life's challenges can be overwhelming, and at times, we all need a little extra support
      to navigate through them. Qilin Therapy is here to offer you a helping hand on your path to mental well-being. Our innovative and user-friendly mobile application is designed to provide convenient access to effective therapy tools, empowering you to manage and overcome depression right from the palm of your hand.
      Embrace Healing Anytime, Anywhere
      Say goodbye to traditional barriers to therapy. With Qilin Therapy, you have the freedom to access support whenever and wherever you need it. Our mobile app allows you to engage in therapy activities, receive personalized guidance, and track your progress seamlessly from the comfort of your own space.
      
                            
                        </p>
                    </div>
                </div>
                <img class="img-fluid" src={ipad} alt="..." />
            </div>
        </section>

        <section class="signup-section" id="signup">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Sign up today and take the first step in reclaiming control over your life. Because your mental health matters, and support is just a tap away.</h2>
                       
                            <div class="">
                                <a href="/sign-up" class="btn btn-primary">Sign Up</a>
                            </div>
                            
                        
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-section bg-black">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Address</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">123 Sesame Street, Orlando FL</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Contact</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a href="/contact">Qilin@feedback.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Phone</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">+1 (555) 902-8832</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </section>

        <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Your Privacy Matters
      Rest assured, your privacy is our priority.  Qilin Therapy is committed to maintaining the confidentiality of your information. Our secure platform ensures that your personal data is protected, allowing you to focus on your well-being with peace of mind.      
      Join Us on the Path to Wellness
      Embark on a transformative journey toward mental wellness with Qilin Therapy. Copyright &copy; Qilins Co. 2023</div></footer>
  
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    
      
        
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
   
      </body>
  );
}
