// components/Layout.js
const Layout = ({ children }) => (
    <div>
      <header>
        <h1>BharatSec Learning</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
  
  export default Layout;
  