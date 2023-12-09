import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-gray-800 p-4">
          <div className="container mx-auto text-white text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold text-white mb-4 md:mb-0">
                Stay Connected
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-purple-300 transition duration-300"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-purple-300 transition duration-300"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-purple-300 transition duration-300"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
            <div className="text-white text-center mt-4">
              &copy; 2023 NoteWizard. All Rights Reserved.
            </div>
          </div>
        </footer>
        
      </div>
    </>
  );
};

export default Footer;
