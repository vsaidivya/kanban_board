import React from 'react';
import { PriorityIcons } from './Icons';
import { StatusIcons } from './Icons';

const Card = ({ ticket, user, grouping }) => {
  const StatusIcon = StatusIcons[ticket.status] || null;
  const PriorityIcon = PriorityIcons[ticket.priority] || null;
  console.log(PriorityIcon)
  
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="card">
      <div className="card-header">
        <span>{ticket.id}</span>
        {grouping !== 'user' && user && (
          <div className="user-avatar" title={user.name}>
            {getInitials(user.name)}
          </div>
        )}
      </div>
      <div className="card-content">
        {grouping !== 'status' && StatusIcon && (
          <div className="status-icon">
            <StatusIcon />
          </div>
        )}
        <span className="card-title">{ticket.title}</span>
      </div>
      <div className="card-footer">
        {grouping !== 'priority' && PriorityIcon && (
          <div className="priority-icon">
            <PriorityIcon />
          </div>
        )}
        <div className="tag feature-request">
          <span className="dot"></span>
          <span>{ticket.tag}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

