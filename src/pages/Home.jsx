import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data';
import CourseCard from '../components/CourseCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1>{siteData.tagline}</h1>
          <p className="hero-subtitle">
            {siteData.subtitle}
          </p>
          <div className="hero-actions">
            <Link to="/courses" className="btn btn-primary">View Courses</Link>
            <Link to="/register" className="btn btn-accent">Register Now</Link>
            <Link to="/contact" className="btn btn-outline" style={{backgroundColor: 'transparent', color: 'white', borderColor: 'white'}}>Book Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container text-center">
          <h2>Why Choose Our Academy?</h2>
          <div className="grid grid-cols-3 mt-8">
            <div className="card">
              <h3>Live Classes</h3>
              <p>Interactive sessions with real-time Q&A. No pre-recorded boredom.</p>
            </div>
            <div className="card">
              <h3>Practical Coding</h3>
              <p>Build real-world projects with Python, PyTorch, and Scikit-Learn.</p>
            </div>
            <div className="card">
              <h3>Research Guidance</h3>
              <p>Learn how to read papers, design experiments, and publish your work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section">
        <div className="container">
          <div className="flex" style={{justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
            <h2>Featured Courses</h2>
            <Link to="/courses" className="btn btn-outline">View All</Link>
          </div>
          <div className="grid grid-cols-3">
            {siteData.courses.slice(0, 3).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-8">Who Can Join?</h2>
          <div className="grid grid-cols-3" style={{textAlign: 'center', gap: '1rem'}}>
            <div className="card" style={{padding: '1.5rem'}}>School students & O/A Level students</div>
            <div className="card" style={{padding: '1.5rem'}}>College & University students</div>
            <div className="card" style={{padding: '1.5rem'}}>MBBS students & Doctors preparing for exams</div>
            <div className="card" style={{padding: '1.5rem'}}>Researchers and PhD students</div>
            <div className="card" style={{padding: '1.5rem'}}>Professionals interested in AI and research</div>
            <div className="card" style={{padding: '1.5rem'}}>Learners interested in Islamic short courses</div>
          </div>
        </div>
      </section>

      {/* International Scientists Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="card" style={{border: '2px solid var(--primary-color)', background: 'linear-gradient(to right, #ffffff, #f0f4f8)'}}>
            <h2 style={{color: 'var(--primary-color)', marginBottom: '1rem'}}>Research Lessons with Leading International Scientists</h2>
            <p className="mb-4">
              Our learners may get access to research-oriented lessons, seminars, mentoring sessions, and academic discussions with experienced researchers and scientists from different international regions, including:
            </p>
            <ul className="mb-4" style={{listStylePosition: 'inside', paddingLeft: '1rem'}}>
              <li>Abu Dhabi / UAE</li>
              <li>Ireland</li>
              <li>United Kingdom</li>
              <li>Philippines</li>
              <li>Other international academic and research networks</li>
            </ul>
            <h4 className="mb-2">Sample Discussion Topics:</h4>
            <div className="grid grid-cols-2 mb-4" style={{gap: '0.5rem', fontSize: '0.95rem'}}>
              <div>• How to select a research problem</div>
              <div>• How to write a strong research proposal</div>
              <div>• How to publish in good journals and conferences</div>
              <div>• How to improve academic writing</div>
              <div>• How to build a research profile</div>
              <div>• How to prepare for PhD and postdoctoral opportunities</div>
              <div>• How to use AI tools responsibly in research</div>
              <div>• How to collaborate internationally</div>
            </div>
            <div className="mb-6 text-sm" style={{color: 'var(--gray)'}}>
              <em>*Note: Guest sessions and international mentoring opportunities will depend on expert availability and scheduling.</em>
            </div>
            <Link to="/register?course=research-guidance" className="btn btn-primary">Register Interest for Research Lessons</Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-light text-center">
        <div className="container">
          <h2 className="mb-8">Pricing & Fees</h2>
          <div className="grid grid-cols-2" style={{gap: '2rem'}}>
            <div className="card">
              <h3 className="mb-4" style={{color: 'var(--secondary-color)'}}>Group Classes</h3>
              <p style={{fontSize: '1.5rem', fontWeight: 'bold', margin: '1rem 0'}}>{siteData.pricing.group}</p>
              <p className="text-gray text-sm">Perfect for school, college, and short courses.</p>
            </div>
            <div className="card">
              <h3 className="mb-4" style={{color: 'var(--primary-color)'}}>Individual & Mentoring</h3>
              <ul style={{listStyle: 'none', padding: 0, textAlign: 'left', display: 'inline-block'}}>
                <li style={{marginBottom: '0.5rem'}}><strong>Individual Course:</strong> {siteData.pricing.individual}</li>
                <li style={{marginBottom: '0.5rem'}}><strong>One-to-one Mentoring:</strong> {siteData.pricing.mentoring}</li>
                <li style={{marginBottom: '0.5rem'}}><strong>Research Guidance:</strong> {siteData.pricing.research}</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm" style={{color: 'var(--gray)'}}>
            <strong>International Research Lessons:</strong> {siteData.pricing.international}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
