import Link from 'next/link';

const Courses = () => {
  // Fetch courses from your database

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {/* Example course list */}
        <li><Link href="/courses/course-1">Course 1</Link></li>
        <li><Link href="/courses/course-2">Course 2</Link></li>
      </ul>
    </div>
  );
};

export default Courses;
