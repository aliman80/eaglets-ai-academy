import React from 'react';
import { siteData } from '../data';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  // Ordered categories list
  const orderedCategories = [
    "Programming and AI",
    "School and College Academic Courses",
    "Islamic Short Courses",
    "Research and Mentoring",
    "Medical Career Counselling and Professional Guidance"
  ];

  const categoryTitles = {
    "Programming and AI": "Programming & AI Courses",
    "School and College Academic Courses": "School & College Academic Courses",
    "Islamic Short Courses": "Islamic Short Courses",
    "Research and Mentoring": "Research & Mentorship",
    "Medical Career Counselling and Professional Guidance": "Medical Career Counselling & Guidance"
  };

  return (
    <div className="courses-page">
      <section className="section bg-light text-center" style={{padding: '4rem 0', borderBottom: '1px solid var(--border-color)'}}>
        <div className="container">
          <h1>Our Courses & Programs</h1>
          <p style={{maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-light)', marginTop: '0.5rem'}}>
            Explore our diverse academy offerings covering cutting-edge Artificial Intelligence, school/college academic support, rich Islamic courses, and expert medical/research mentoring.
          </p>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          {orderedCategories.map((catKey, index) => {
            const courses = siteData.courses.filter(c => c.category === catKey);
            if (courses.length === 0) return null;
            
            const title = categoryTitles[catKey] || catKey;
            const isLast = index === orderedCategories.length - 1 || 
              orderedCategories.slice(index + 1).every(nextKey => siteData.courses.filter(c => c.category === nextKey).length === 0);

            return (
              <div key={catKey} style={{marginBottom: isLast ? '0' : '5rem'}}>
                <h2 style={{
                  fontSize: '2.25rem',
                  color: 'var(--primary-color)',
                  marginBottom: '2.5rem',
                  position: 'relative',
                  display: 'inline-block',
                  paddingBottom: '0.75rem'
                }}>
                  {title}
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
                  {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Courses;


