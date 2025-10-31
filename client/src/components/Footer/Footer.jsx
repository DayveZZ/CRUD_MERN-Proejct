import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-neutral-950 text-neutral-400 text-sm py-6">
        <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-neutral-500">&copy; 2025 Your Company</p>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-neutral-100 transition-colors">
              Privacy
            </a>
            <a href="#" class="hover:text-neutral-100 transition-colors">
              Terms
            </a>
            <a href="#" class="hover:text-neutral-100 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
