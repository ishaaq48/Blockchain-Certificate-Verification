import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {

     useEffect(() => {
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
      logoutBtn.addEventListener("click", async (e) => {
        e.preventDefault(); // prevent the default link click

        try {
          const response = await fetch("http://localhost:8000/api/auth/logout", {
            method: "POST",
            credentials: "include",
          });

          if (response.ok) {
            alert("Logged out successfully!");
            window.location.href = "/login.html"; // ✅ Redirect to login
          } else {
            alert("Logout failed. Try again!");
          }
        } catch (error) {
          console.error("Logout Error:", error);
          alert("Error logging out");
        }
      });
    }

    // Optional cleanup
    return () => {
      if (logoutBtn) {
        logoutBtn.removeEventListener("click", () => {});
      }
    };
  }, []);
   
  return (
    <div>
    <header >
        <div className="container" >
            <div className="logo">
                <img src="/blockchain (1).png" alt="Logo" className="logo-icon" style={{width: "40px", height: "40px"}}></img>
                <h1>Certify<span>Now</span></h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="login.html" className="cta-button" id="login-button">Login</a></li>
                    <li><a href="login.html" className="cta-button" id="signup-button">Signup</a></li>
                    <li><a href="login.html" className="cta-button" id="logoutBtn" >logout</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section className="hero">
        <div className="video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
          >
          <source src="/videoplayback.webm" type="video/webm" />
          Your browser does not support the video tag.
          </video>
        </div>
    

        <div className="hero-content">
            <h1>Verify Your Certificates Instantly</h1>
            <p>Ensure authenticity and trust in your qualifications.</p>
            <button id="cta-button"> <a href="verify.html" className="get-started-btn "> Get Started </a></button>
        </div>
    </section>
    <section>
        <section id="how-it-works" className="how-it-works">
            <div className="container">

                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step" data-aos="zoom-out-left">
                        <div className="step-icon">
                            <i className="fas fa-pencil-alt"></i> 
                        </div>
                        <h3>Enter Certificate Details</h3>
                        <p>Fill in the required information about the certificate you want to verify.</p>
                    </div>
                    <div className="step" data-aos="zoom-out-left">
                        <div className="step-icon">
                            <i className="fas fa-check-circle"></i> 
                        </div>
                        <h3>Click Verify</h3>
                        <p>Press the verify button to initiate the verification process.</p>
                    </div>
                    <div className="step" data-aos="zoom-out-left">
                        <div className="step-icon">
                            <i className="fas fa-thumbs-up"></i> 
                        </div>
                        <h3>Get Results</h3>
                        <p>Receive instant results confirming the authenticity of the certificate.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="benefits" className="benefits">
            <div className="container">
                <h2>Benefits of Using Our Service</h2>
                <div className="benefit-list">
                    <div className="benefit" data-aos="fade-up">
                        <div className="benefit-icon">✔️</div>
                        <h3>Fast Verification</h3>
                        <p>Get instant results without the hassle of long waiting times.</p>
                    </div>
                    <div className="benefit" data-aos="fade-up">
                        <div className="benefit-icon">🔒</div>
                        <h3>Secure Process</h3>
                        <p>Your data is protected with industry-standard security measures.</p>
                    </div>
                    <div className="benefit" data-aos="fade-down">
                        <div className="benefit-icon">✅</div>
                        <h3>Trusted by Institutions</h3>
                        <p>Our service is recognized and trusted by educational institutions worldwide.</p>
                    </div>
                    <div className="benefit" data-aos="fade-down">
                        <div className="benefit-icon">📈</div>
                        <h3>Easy to Use</h3>
                        <p>Our user-friendly interface makes verification a breeze.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="use-cases" className="use-cases">
            <div className="container">
                <h2>Use Cases</h2>
                <div className="use-case-list">
                    <div className="use-case" data-aos="flip-down">
                        <h3>For Employers</h3>
                        <p>Verify the qualifications of potential candidates quickly and efficiently to ensure you hire the best talent.</p>
                    </div>
                    <div className="use-case" data-aos="flip-up">
                        <h3>For Educational Institutions</h3>
                        <p>Confirm the authenticity of certificates presented by students and applicants to maintain academic integrity.</p>
                    </div>
                    <div className="use-case" data-aos="flip-down">
                        <h3>For Job Seekers</h3>
                        <p>Provide verified proof of your qualifications to potential employers, enhancing your credibility.</p>
                    </div>
                    <div className="use-case" data-aos="flip-up">
                        <h3>For Government Agencies</h3>
                        <p>Ensure that the qualifications of applicants for licenses and permits are legitimate and verified.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="faqs" className="faqs">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                    <div className="faq-item">
                        <div className="faq-question" onclick="toggleAnswer(this)">
                            <h3>What is certificate verification?</h3>
                            <span className="toggle-icon">+</span>
                        </div>
                        <div className="faq-answer">
                            <p>Certificate verification is the process of confirming the authenticity of a certificate issued by an educational institution or organization.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question" onclick="toggleAnswer(this)">
                            <h3>How long does the verification process take?</h3>
                            <span className="toggle-icon">+</span>
                        </div>
                        <div className="faq-answer">
                            <p>The verification process is typically instant, providing you with immediate results.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question" onclick="toggleAnswer(this)">
                            <h3>Is my data secure?</h3>
                            <span className="toggle-icon">+</span>
                        </div>
                        <div className="faq-answer">
                            <p>Yes, we use industry-standard security measures to protect your data during the verification process.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question" onclick="toggleAnswer(this)">
                            <h3>Can I verify multiple certificates at once?</h3>
                            <span className="toggle-icon">+</span>
                        </div>
                        <div className="faq-answer">
                            <p>Currently, our service allows for one certificate verification at a time, but we are working on expanding this feature.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="cta" className="cta">
            <div className="container">
                <h2>Ready to Verify Your Certificates?</h2>
                <p>Join thousands of satisfied users who trust our service for quick and secure certificate verification.</p>
                <button id="cta-button">Get Started Now</button>
            </div>
        </section>
    </section>
    <footer className="footer">
        <div className="container">
            <p>&copy; 2023 CertVerify. All rights reserved.</p>
        </div>
    </footer>
</div> 
  );
}

export default App;
