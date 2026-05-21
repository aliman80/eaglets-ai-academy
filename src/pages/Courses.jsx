import React from 'react';
import { siteData } from '../data';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  return (
    <div className="courses-page">
      <section className="section bg-light text-center" style={{padding: '4rem 0', borderBottom: '1px solid var(--border-color)'}}>
        <div className="container">
          <h1>Our Courses</h1>
          <p style={{maxWidth: '600px', margin: '0 auto'}}>
            Master the most in-demand skills in AI, Machine Learning, and Research with our expert-led programs.
          </p>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          {[...new Set(siteData.courses.map(c => c.category))].map(category => (
            <div key={category} style={{marginBottom: '4rem'}}>
              <h2 style={{borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.5rem', marginBottom: '2rem'}}>{category}</h2>
              <div className="grid grid-cols-3">
                {siteData.courses.filter(c => c.category === category).map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
