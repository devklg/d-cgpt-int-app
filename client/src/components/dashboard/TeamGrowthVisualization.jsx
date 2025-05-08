// src/components/dashboard/TeamGrowthVisualization.jsx
import React from 'react';
import PropTypes from 'prop-types';

const TeamGrowthVisualization = ({ userData, teamData }) => {
  return (
    <div className="bg-darkNavy p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-white mb-4">Team Growth Overview</h2>

      <div className="grid grid-cols-2 gap-4 text-white">
        <div>
          <h3 className="font-semibold">Left Leg</h3>
          <p>{teamData.leftLeg.name}</p>
          <p>Members: {teamData.leftLegCount}</p>
        </div>
        <div>
          <h3 className="font-semibold">Right Leg</h3>
          <p>{teamData.rightLeg.name}</p>
          <p>Members: {teamData.rightLegCount}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gold mb-2">Total Team Members</h3>
        <p className="text-white text-3xl font-bold">{teamData.totalMembers}</p>
        <p className="text-sm text-gray-300">+{teamData.newMembersToday} today</p>
      </div>

      <div className="mt-6">
        <div className="bg-navy p-4 rounded-lg">
          <p className="text-white text-sm mb-2">Left Leg Volume: <span className="text-gold font-semibold">{teamData.leftLegVolume}</span></p>
          <p className="text-white text-sm mb-2">Right Leg Volume: <span className="text-gold font-semibold">{teamData.rightLegVolume}</span></p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-white text-sm">
          As your team grows, your volume increases. Build both legs evenly for optimal cycle bonuses and rank advancement!
        </p>
      </div>
    </div>
  );
};

TeamGrowthVisualization.propTypes = {
  userData: PropTypes.object.isRequired,
  teamData: PropTypes.shape({
    totalMembers: PropTypes.number,
    newMembersToday: PropTypes.number,
    leftLeg: PropTypes.shape({ name: PropTypes.string }),
    rightLeg: PropTypes.shape({ name: PropTypes.string }),
    leftLegCount: PropTypes.number,
    rightLegCount: PropTypes.number,
    leftLegVolume: PropTypes.number,
    rightLegVolume: PropTypes.number,
  }).isRequired,
};

export default TeamGrowthVisualization;
