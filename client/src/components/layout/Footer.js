import React from 'react';
import './Footer.css';

export default () => {
  return (
    <footer>
      Copyright &copy; {new Date().getFullYear()} Jay Park
      <a href="https://github.com/jjayp4rk">
        <i className="fab fa-github fa-1.5x" />
      </a>
      <a href="https://www.linkedin.com/in/je-park/">
        <i className="fab fa-linkedin fa-1.5x" />
      </a>
    </footer>
  );
};
