
import React from 'react';
import Card from '../common/Card';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: 'join',
      name: 'Emily Chen',
      message: 'joined your team.',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'rank-up',
      name: 'Michael Johnson',
      message: 'advanced to 1-Star.',
      time: '4 hours ago'
    },
    {
      id: 3,
      type: 'bonus',
      name: 'Sarah Williams',
      message: 'earned a Fast Start Bonus.',
      time: '1 day ago'
    }
  ];

  return (
    <Card>
      <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start">
            <div className="bg-gold text-navy font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
              {activity.name.charAt(0)}
            </div>
            <div>
              <p className="text-white">
                <span className="font-medium text-gold">{activity.name}</span> {activity.message}
              </p>
              <p className="text-gray-400 text-sm">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ActivityFeed