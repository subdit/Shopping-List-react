import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
// use Default props to check if we have the api call coming in or not or just check if the Title is there
Header.defaultProps = {
  title: 'Default Title'
};

export default Header;
