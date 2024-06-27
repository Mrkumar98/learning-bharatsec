// components/CourseCard.js
const CourseCard = ({ course }) => (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button>View Course</button>
    </div>
  );
  
  export default CourseCard;
  