import { Link} from "react-scroll"

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-transparent z-50 flex justify-center">
    <ul className="flex space-x-4 p-4 border bg-[rgb(244,55,67)] rounded-full mt-4 font-bold font-serif text-blue-800">
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          activeClass="active"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          activeClass="active"
        >
          Skills
        </Link>
      </li>

      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          activeClass="active"
        >
          Education
        </Link>
      </li>
      
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          activeClass="active"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          activeClass="active"
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          activeClass="active"
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
