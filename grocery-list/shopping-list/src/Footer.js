import React from 'react';

const Footer = ({ length }) => {
  // const today = new Date();

  return (
    <footer>
      {/* <p>Copyrignt &copy; {today.getFullYear()}</p> */}
      <p>
        {length} List {length === 1 || length === 0 ? 'item' : 'items'}
      </p>
    </footer>
  );
};
export default Footer;
