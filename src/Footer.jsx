import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="HeroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/thikaylanguyen/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
               <svg width="32" height="32" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>linkedin [#161]</title>
                <desc>Created with Sketch.</desc>
                <g fill="none" fill-rule="evenodd">
                <g transform="translate(-180 -7479)" fill="#000">
                <g transform="translate(56 160)">
                <path d="m144 7339h-4v-6.999c0-1.92-0.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991v6.999h-4v-13h4v1.462s1.255-2.202 4.083-2.202c2.829 0 4.917 1.726 4.917 5.298v8.442zm-17.558-15.079c-1.349 0-2.442-1.102-2.442-2.461 0-1.358 1.093-2.46 2.442-2.46 1.348 0 2.441 1.102 2.441 2.46 1e-3 1.359-1.093 2.461-2.441 2.461zm-2.442 15.079h5v-13h-5v13z"></path>
                </g>
                </g>
                </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nguyenkayla"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none">
                        <title>github [#142]</title>
                        <desc>Created with Sketch.</desc>
                        <g fill="none" fill-rule="evenodd">
                        <g transform="translate(-140 -7559)" fill="#000">
                        <g transform="translate(56 160)">
                        <path d="m94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-0.507 0.101-0.687-0.219-0.687-0.492 0-0.338 0.012-1.442 0.012-2.814 0-0.956-0.32-1.58-0.679-1.898 2.227-0.254 4.567-1.121 4.567-5.059 0-1.12-0.388-2.034-1.03-2.752 0.104-0.259 0.447-1.302-0.098-2.714 0 0-0.838-0.275-2.747 1.051-0.799-0.227-1.655-0.341-2.505-0.345-0.85 4e-3 -1.705 0.118-2.503 0.345-1.911-1.326-2.751-1.051-2.751-1.051-0.543 1.412-0.2 2.455-0.097 2.714-0.639 0.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-0.286 0.256-0.545 0.708-0.635 1.371-0.57 0.262-2.018 0.715-2.91-0.852 0 0-0.529-0.985-1.533-1.057 0 0-0.975-0.013-0.068 0.623 0 0 0.655 0.315 1.11 1.5 0 0 0.587 1.83 3.369 1.21 5e-3 0.857 0.014 1.665 0.014 1.909 0 0.271-0.184 0.588-0.683 0.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"></path>
                        </g>
                        </g>
                        </g>
                        </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by Kayla</p>
      </div>
    </footer>
  );
}

export default Footer;