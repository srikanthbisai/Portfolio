import React from 'react'

const Navbar = () => {
  return (
    <div className="p-4 flex bg-gray-600 space-x-96">
      <div> Portfolio</div>
      <div className="w-full ">
        <nav>
          <ul className="flex space-x-14">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Education</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar