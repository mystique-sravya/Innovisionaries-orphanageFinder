import React from 'react';

const noticesData = [
  {
    id: 1,
    orphanageName: 'ABC Orphanage',
    notice: 'Urgent need of clothes for children.',
  },
  {
    id: 2,
    orphanageName: 'Hope Center',
    notice: 'Looking for volunteers to help with tutoring.',
  },
  // Add more notices data as needed
];

const NoticesSection = () => {
  return (
    <div className="notices-section">
      <h3>Notices</h3>
      {noticesData.map((notice) => (
        <div key={notice.id}>
          <h4>{notice.orphanageName}</h4>
          <p>{notice.notice}</p>
        </div>
      ))}
    </div>
  );
};

export default NoticesSection;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  import React from 'react';

const noticesData = [
  {
    id: 1,
    orphanageName: 'ABC Orphanage',
    notice: 'Urgent need of clothes for children.',
  },
  {
    id: 2,
    orphanageName: 'Hope Center',
    notice: 'Looking for volunteers to help with tutoring.',
  },
  // Add more notices data as needed
];

const NoticesSection = () => {
  return (
    <div className="notices-section">
      <h3>Notices</h3>
      {noticesData.map((notice) => (
        <div key={notice.id}>
          <h4>{notice.orphanageName}</h4>
          <p>{notice.notice}</p>
        </div>
      ))}
    </div>
  );
};

export default NoticesSection;
