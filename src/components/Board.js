import React from 'react';
import Column from './Column';

const Board = ({ tickets, users, grouping, sorting }) => {
  const getPriorityName = (priority) => {
    const priorities = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No priority'
    };
    return priorities[priority];
  };

  const getGroupedTickets = () => {
    let groups = {};

    if (grouping === 'status') {
      groups = {
        'Backlog': [],
        'Todo': [],
        'In progress': [],
        'Done': [],
        'Cancelled': []
      };
      tickets.forEach(ticket => {
        if (groups[ticket.status]) {
          groups[ticket.status].push(ticket);
        }
      });
    } else if (grouping === 'user') {
      users.forEach(user => {
        groups[user.name] = [];
      });
      tickets.forEach(ticket => {
        const user = users.find(u => u.id === ticket.userId);
        if (user && groups[user.name]) {
          groups[user.name].push(ticket);
        }
      });
    } else if (grouping === 'priority') {
      [4,3,2,1,0].forEach(priority => {
        groups[getPriorityName(priority)] = [];
      });
      tickets.forEach(ticket => {
        const priorityName = getPriorityName(ticket.priority);
        if (groups[priorityName]) {
          groups[priorityName].push(ticket);
        }
      });
    }

    
    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groups;
  };

  const groupedTickets = getGroupedTickets();

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([groupName, tickets]) => (
        <Column
          key={groupName}
          title={groupName}
          tickets={tickets}
          users={users}
          grouping={grouping}
        />
      ))}
    </div>
  );
};

export default Board;

