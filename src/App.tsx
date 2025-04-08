import './App.css'
import pic3 from './assets/pic3.png'
import { useState, useEffect } from 'react'
import { FaChevronDown, FaCog, FaMicrochip, FaCode, FaProjectDiagram, FaCheckCircle } from 'react-icons/fa'
import { createClient } from "@supabase/supabase-js";
import electronics from '../public/electronics.png'
import programing from '../public/programing.png'
import desgin from '../public/designthink.png'
import pic1 from '../public/pic1.jpg'
import vexworld from '../public/vexworld.png'
import robot from '../public/robot.png'
import qrcode from '../public/qr_code.png'

const supabase = createClient(import.meta.env.VITE_REACT_APP_URL, import.meta.env.VITE_REACT_APP_KEY);

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [NAME, setName] = useState('');
  const [EMAIL, setEmail] = useState('');
  const [MESSAGE, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const key = import.meta.env.VITE_KEY;
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
              <img src="/reimagine.png" alt="Re-imagine Robotics Logo" className="logo-image" />
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

      <header className="hero" style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(232, 208, 50, 0.9), rgba(232, 208, 50, 0.7)), url(${robot})` 
      }}>
        <div className="hero-content">
          <h1 className="hero-title">Re-imagine Robotics</h1>
          <h2 className="hero-subtitle">Building Future Engineers</h2>
          <button className="cta-button" onClick={() => window.open('https://forms.gle/LRnv4SBBLyEqH5AV7', '_blank')}>Join Our Program</button>
        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <p>Explore Our Program</p>
          <FaChevronDown className="chevron-down" />
        </div>
      </header>

      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">ABOUT THE PROGRAM</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={pic1} alt="Students working on robotics" />
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
                <img src={electronics} alt="The Electronics" className="program-image" />
                <p>Learn how to connect brain with mechanical parts, sensors and batteries & program the brain to work with remote. Students master electronic integration and control systems essential for robot functionality.</p>
              </div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <FaCode className="icon" />
              </div>
              <h3>The Programming</h3>
              <div className="program-content">
                <img src={programing} alt="The Programming" className="program-image" />
                <p>Program the robot using modkit, vex code IQ, RobotC programming languages to run in autonomous and driver mode. Students develop logical thinking and problem-solving skills through coding challenges.</p>
              </div>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <FaProjectDiagram className="icon" />
              </div>
              <h3>Engineering Design Process</h3>
              <div className="program-content">
                <img src={desgin} alt="Engineering Design Process" className="program-image" />
                <p>Follow the rigorous Engineering Design Process throughout to think and work like an Engineer and learn real world STEM! Students iteratively design, build, test, and refine their solutions to complex problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="section achievement-section">
        <div className="container">
          <div className="achievement-container">
            <div className="achievement-header">
              <h2 className="section-title">CONGRATULATIONS</h2>
              <div className="trophy-animation">
                <div className="trophy">🏆</div>
              </div>
              <h3 className="achievement-subtitle">to the teams for VEX <strong>WORLDS 2025 QUALIFICATION!</strong></h3>
            </div>
            
            <img src={vexworld} alt="" className="program-image"/>

            <div className="achievement-cards">
              <div className="achievement-card">
                <h4>Team 770A</h4>
                <p>Re-imagine Robotics Elementary Team qualified for the 2024 VEX Worlds Championship at the GA State Tournament. Their exceptional performance earned them a spot among top teams, showcasing their skill and strategy.</p>
              </div>
              
              <div className="achievement-card">
                <h4>Multiple Awards</h4>
                <p>The teams secured several regional awards, including Excellence, Skills, and Tournament Champions, leading to their qualification for the Georgia State Tournament. Their success further culminated in advancing to the VEX Worlds Championship as few of the top teams from Georgia.</p>
              </div>
              
              <div className="achievement-card">
                <h4>Elite Qualification</h4>
                <p>They secured 1 of 6 spots to Worlds from GA, competing against 157 teams. This achievement highlights their technical expertise, teamwork, and determination to succeed at the highest level.</p>
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
                <br/>
                <a href="/Summer Camp 2025 Flyer.pdf" download className="signup-link">
                  Download Summer Camp Flyer
                </a>
                <p>or scan the QR code</p>
                <div className="qr-placeholder">
                  <img src={qrcode} alt="QR Code" className="qr-code-image" />
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us a message</h3>
              <form action={key} method="POST">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
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
          <span className="credit-line">Website made possible by <strong>Phoenix Tech Solutions</strong></span>
          <p>&copy; {new Date().getFullYear()} Re-imagine Robotics. All rights reserved.</p>
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
