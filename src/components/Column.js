import React from 'react';
import Card from './Card';
import { StatusIcons, PriorityIcons } from './Icons';
import { ReactComponent as Menu } from '../icons_FEtask/3 dot menu.svg';
import { ReactComponent as Add } from '../icons_FEtask/add.svg';

const Column = ({ title, tickets, users, grouping }) => {
  const StatusIcon = StatusIcons[title] || null;
  const PriorityIcon = PriorityIcons[title] || null;
  
  const user = users.find((u) => u.name === title);

  const getInitials = (name) => {
    return name.split(' ').map((n) => n[0]).join('').toUpperCase();
  };

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left">
          
          {grouping === 'status' && StatusIcon && (
            <div className="status-icon">
              <StatusIcon />
            </div>
          )}
          
          {grouping === 'priority' && PriorityIcon && (
            <div className="priority-icon">
              <PriorityIcon />
            </div>
          )}
          
          {grouping === 'user' && user && (
            <div className="user-avatar">
              {user.profilePic ? (
                <img src={user.profilePic} alt={user.name} />
              ) : (
                <span>{getInitials(user.name)}</span>
              )}
            </div>
          )}
          <span className="column-title">
            {grouping === 'user' && user ? `${title}` : title}
          </span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-header-right">
          <button className="icon-button"><Add /></button>
          <button className="icon-button"><Menu /></button>
        </div>
      </div>
      <div className="column-content">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            user={users.find((u) => u.id === ticket.userId)}
            grouping={grouping}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
