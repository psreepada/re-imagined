import './App.css'
import pic3 from './assets/pic3.png'
import { useState, useEffect } from 'react'
import { FaChevronDown, FaCog, FaMicrochip, FaCode, FaProjectDiagram, FaCheckCircle } from 'react-icons/fa'
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://zrnpcmbnjxtiojdersgq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpybnBjbWJuanh0aW9qZGVyc2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNTIzOTgsImV4cCI6MjA1NzgyODM5OH0.rTcCBUknC7KhJ9xa3GkBmXtF2N7srDSEEbgtUOONIRE");

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [NAME, setName] = useState('');
  const [EMAIL, setEmail] = useState('');
  const [MESSAGE, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const testimonials = [
    {
      text: "It has been my honor and privilege to know and work with Mini during the past 7 years. She began working with my robotics teams as a parent volunteer, and very quickly took on the role of a dedicated judge, donating her time and talents to teams from all over the World. Now, she is bringing these opportunities to a new generation in a new community. Mini has always been an example of service above self and she continues to inspire all who know her.",
      author: "Ms Shelli Brasher",
      position: "Sr. Administrator of Strategic Initiatives",
      organization: "REC Foundation"
    },
    {
      text: "Working alongside Mini Goal over the past several years has been an absolute privilege. She is not only an exceptionally experienced judge but also a remarkable mentor for those new to the judging process. Mini's dedication to her role is truly inspiring. Her wealth of experience in judging brings a level of expertise and insight that is invaluable. Mini has an uncanny ability to dissect complex situations and provide clear, well-reasoned judgments. Her attention to detail and commitment to fairness have set a high standard for judging in our field.",
      author: "Wilbert Best",
      position: "Worlds Judge Advisor Volunteer",
      organization: ""
    },
    {
      text: "Mini Goel was very instrumental in helping me, my first year as a Vex Coach. Before competitions Mini would come in and give our teams practice with interviewing skills. She mentored our teams and myself, in the entire design notebook process. With Mini's guidance, one of our Teams made it to World's our first year and we came home with a World trophy for the Design Notebook in our division.",
      author: "Terri Plunk",
      position: "Stem, Project Lead the Way",
      organization: "Schilling Farms Elementary School"
    }
  ];

  const contact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!NAME || !EMAIL || !MESSAGE) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact')
        .insert({
          name: NAME,
          email: EMAIL,
          message: MESSAGE
        });
        
      if (error) throw error;
      
      setName('');
      setEmail('');
      setMessage('');
      
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]); 

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <div className="container header-container">
          <div className="logo-container">
            <a href="#" className="logo-link">
              <div className="logo-placeholder">R</div>
              <h1 className="header-title">Re-imagine Robotics</h1>
            </a>
          </div>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => document.querySelector('.main-nav')?.classList.toggle('active')}
          >
            ☰
          </button>
          <nav className="main-nav">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#components">Program</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Re-imagine Robotics</h1>
          <h2 className="hero-subtitle">Building Future Engineers</h2>
          <button className="cta-button">Join Our Program</button>
        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <p>Explore Our Program</p>
          <FaChevronDown className="chevron-down" />
        </div>
      </header>

      <section id="achievements" className="section achievement-section">
        <div className="container">
          <div className="achievement-container">
            <div className="achievement-header">
              <h2 className="section-title">CONGRATULATIONS</h2>
              <div className="trophy-animation">
                <div className="trophy">🏆</div>
              </div>
              <h3 className="achievement-subtitle">to the teams for VEX WORLDS 2024 QUALIFICATION!</h3>
            </div>
            
            <div className="achievement-cards">
              <div className="achievement-card">
                <h4>Team 770A & 770B</h4>
                <p>Re-imagine Robotics Elementary Teams have qualified for 2024 VEX Worlds Championship during last Saturday's GA State Tournament.</p>
              </div>
              
              <div className="achievement-card">
                <h4>Multiple Awards</h4>
                <p>Both teams were qualified to GA States with multiple awards such as Excellence, Skills, Tournament Champions, Design, Innovate, etc during the regional events.</p>
              </div>
              
              <div className="achievement-card">
                <h4>Elite Qualification</h4>
                <p>They earned 2 out of 5 spots qualifying for Worlds from the state of GA out of a total 142 teams. This is a tremendous achievement by both teams!</p>
              </div>
            </div>
            
            <div className="competition-info">
              <div className="competition-banner">
                <h3>Vex IQ Robotics Challenge 2023-2024</h3>
              </div>
              <div className="competition-links">
                <a href="https://youtu.be/tuQ8Xz6yAdQ?si=9olNeEflpE3zy5_B" target="_blank" rel="noopener noreferrer" className="competition-link">
                  Watch Competition Video
                </a>
                <a href="https://www.flickr.com/photos/recf/albums/72177720307990577" target="_blank" rel="noopener noreferrer" className="competition-link">
                  View Photo Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">ABOUT THE PROGRAM</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={pic3} alt="Students working on robotics" />
            </div>
            <div className="about-text">
              <div className="about-card">
                <h3>A Transformative Journey</h3>
                <p>Our program offers a transformative journey for students in grades 4 through 8, guiding them from being participants to emerging as confident leaders. Spanning the entire school year, the program paves the way for an exciting competition season that kicks off in May.</p>
              </div>
              
              <div className="about-card">
                <h3>Collaborative Learning</h3>
                <p>Throughout the year, students gather and collaborate twice a week, dedicating a total of four hours to their learning and growth. This program goes beyond traditional education, encompassing a holistic approach to foster all-round development.</p>
              </div>
              
              <div className="about-card">
                <h3>Real-World Experience</h3>
                <p>Students are given the opportunity to engage in various activities, including volunteering alongside their parents at Vex competitions, where they can witness the excitement and challenges of the field firsthand.</p>
              </div>
              
              <div className="about-card">
                <h3>Expert Guidance</h3>
                <p>To further enhance their learning experience, Georgia Tech students are available as mentors during the competition season, providing valuable guidance. Our STEM education curriculum is delivered by mentors who possess extensive experience, ensuring that students receive top-notch instruction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="section program-section">
        <div className="container">
          <h2 className="section-title">OUR PROGRAM COMPONENTS</h2>
          
          <div className="program-grid">
            <div className="program-card">
              <div className="program-icon">
                <FaCog className="icon" />
              </div>
              <h3>The Mechanics</h3>
              <div className="program-content">
                <img src={pic3} alt="The Mechanics" className="program-image" />
                <p>Create a Robot using every mechanical part you need including wheels, sprockets, gear motors, servo, etc. Students learn to select appropriate components and assemble them into functional mechanical systems.</p>
              </div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <FaMicrochip className="icon" />
              </div>
              <h3>The Electronics</h3>
              <div className="program-content">
                <img src={pic3} alt="The Electronics" className="program-image" />
                <p>Learn how to connect brain with mechanical parts, sensors and batteries & program the brain to work with remote. Students master electronic integration and control systems essential for robot functionality.</p>
              </div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <FaCode className="icon" />
              </div>
              <h3>The Programming</h3>
              <div className="program-content">
                <img src={pic3} alt="The Programming" className="program-image" />
                <p>Program the robot using modkit, vex code IQ, RobotC programming languages to run in autonomous and driver mode. Students develop logical thinking and problem-solving skills through coding challenges.</p>
              </div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <FaProjectDiagram className="icon" />
              </div>
              <h3>Engineering Design Process</h3>
              <div className="program-content">
                <img src={pic3} alt="Engineering Design Process" className="program-image" />
                <p>Follow the rigorous Engineering Design Process throughout to think and work like an Engineer and learn real world STEM! Students iteratively design, build, test, and refine their solutions to complex problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Testimonials</h2>
          <div className="testimonial-slider">
            <div className="testimonial-container">
              <div className="testimonial">
                <p className="testimonial-text">{testimonials[activeTestimonial].text}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonials[activeTestimonial].author}</p>
                  <p className="author-position">{testimonials[activeTestimonial].position}</p>
                  {testimonials[activeTestimonial].organization && (
                    <p className="author-organization">{testimonials[activeTestimonial].organization}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`dot ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <p>Email: <a href="mailto:reimaginerobotix@gmail.com">reimaginerobotix@gmail.com</a></p>
              <div className="signup-options">
                <p>Express your interest:</p>
                <a href="https://forms.gle/LRnv4SBBLyEqH5AV7" target="_blank" rel="noopener noreferrer" className="signup-link">
                  Fill in the form
                </a>
                <p>or scan the QR code</p>
                <div className="qr-placeholder">
                  <div className="qr-code-image"></div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us a message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required value={NAME} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required value={EMAIL} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows={5} required value={MESSAGE} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button 
                  type="button" 
                  className={`submit-button ${isSubmitting ? 'loading' : ''}`}
                  onClick={contact}
                  disabled={isSubmitting || !NAME || !EMAIL || !MESSAGE}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3 style={{color: '#e8d032'}}>Re-imagine Robotics</h3>
            <p style={{color: '#c9b428'}}>Building Future Engineers</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#components">Program</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Re-imagine Robotics. All rights reserved.</p>
          <p className="credit-line">Website made possible by Phoenix Tech Solutions</p>
        </div>
      </footer>

      {showSuccess && (
        <div className="success-popup">
          <FaCheckCircle className="success-icon" />
          <p>Message sent successfully!</p>
        </div>
      )}
    </div>
  )
}

export default App
