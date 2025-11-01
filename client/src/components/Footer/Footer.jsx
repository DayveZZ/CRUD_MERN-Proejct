import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral-950 text-neutral-200 text-sm py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500">&copy; 2025 Your Company</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-neutral-100 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-neutral-100 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-neutral-100 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
