import React from "react";

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="grid">
        <p style={{gridColumn: '2/10'}}>Search results for "{title}"</p>
      </div>
    </div>
  );
};

export default Header;
