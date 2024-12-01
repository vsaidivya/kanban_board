import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Display } from '../icons_FEtask/Display.svg';
import { ReactComponent as Down } from '../icons_FEtask/down.svg';


const Navbar = ({ grouping, setGrouping, sorting, setSorting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="display-button" onClick={toggleDropdown}>
          <Display />
          <span>Display</span>
          <Down />
        </button>

        {isOpen && (
          <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-option">
              <span>Grouping</span>
              <select 
                value={grouping}
                onChange={(e) => setGrouping(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-option">
              <span>Ordering</span>
              <select
                value={sorting}
                onChange={(e) => setSorting(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

