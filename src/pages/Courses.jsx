import React from 'react';
import { siteData } from '../data';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const programmingCourses = siteData.courses.filter(c => c.category === "Programming and AI");
  const researchCourses = siteData.courses.filter(c => c.category === "Research and Mentoring");

  return (
    <div className="courses-page">
      <section className="section bg-light text-center" style={{padding: '4rem 0', borderBottom: '1px solid var(--border-color)'}}>
        <div className="container">
          <h1>Our Courses & Programs</h1>
          <p style={{maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-light)', marginTop: '0.5rem'}}>
            Master the most in-demand skills in AI, Machine Learning, and Academic Research with our expert-led, one-on-one and live cohort programs.
          </p>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          {/* Programming & AI Courses Section */}
          {programmingCourses.length > 0 && (
            <div style={{marginBottom: '5rem'}}>
              <h2 style={{
                fontSize: '2.25rem',
                color: 'var(--primary-color)',
                marginBottom: '2.5rem',
                position: 'relative',
                display: 'inline-block',
                paddingBottom: '0.75rem'
              }}>
                Programming & AI Courses
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '60px',
                  height: '4px',
                  backgroundColor: 'var(--secondary-color)',
                  borderRadius: '2px'
                }}></span>
              </h2>
              <div className="grid grid-cols-3">
                {programmingCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )}

          {/* Research & Mentoring Section */}
          {researchCourses.length > 0 && (
            <div>
              <h2 style={{
                fontSize: '2.25rem',
                color: 'var(--primary-color)',
                marginBottom: '2.5rem',
                position: 'relative',
                display: 'inline-block',
                paddingBottom: '0.75rem'
              }}>
                Research & Mentorship
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '60px',
                  height: '4px',
                  backgroundColor: 'var(--secondary-color)',
                  borderRadius: '2px'
                }}></span>
              </h2>
              <div className="grid grid-cols-3">
                {researchCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;

