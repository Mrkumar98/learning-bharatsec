import { useRouter } from 'next/router';

const Course = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch course data based on id

  return (
    <div>
      <h1>Course: {id}</h1>
      {/* Display course content here */}
    </div>
  );
};

export default Course;
