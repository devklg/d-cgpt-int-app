import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkNavy text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Magnificent Worldwide. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
