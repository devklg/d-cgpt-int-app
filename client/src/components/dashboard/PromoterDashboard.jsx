// PromoterDashboard.jsx

import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; 
import { useTeam } from '../../hooks/useTeam';
import Header from '../../components/components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import TeamGrowthVisualization from '../components/dashboard/TeamGrowthVisualization';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import FinancialSummary from '../components/dashboard/FinancialSummary';
import UserProfile from '../components/dashboard/UserProfile'; 
const PromoterDashboard = () => {
  const { user } = useAuth();
  const { teamData, loading, error, refreshTeamData } = useTeam();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-navy">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Error Loading Dashboard</h2>
          <p className="text-white mb-8">{error}</p>
          <Button onClick={refreshTeamData}>Try Again</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const mockFinancialData = {
    currentEarnings: 2450.75,
    pendingCommissions: 325.50,
    fastStartBonuses: 1200.00,
    teamCommissions: 875.25,
    megaMatchingBonuses: 375.50,
    rankAdvancementBonuses: 0,
    recentTransactions: []
  };

  const mockTeamData = {
    totalMembers: 32,
    newMembersToday: 5,
    leftLeg: { name: 'John D.' },
    leftLegCount: 14,
    rightLeg: { name: 'Sarah M.' },
    rightLegCount: 18,
    leftLegVolume: 1250,
    rightLegVolume: 1875
  };

  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-white mr-3">
                Welcome, {user?.firstName}!
              </h1>
              <div className="bg-gold text-navy text-xs font-bold px-2 py-1 rounded">
                {user?.rank?.toUpperCase() || 'ASSOCIATE'}
              </div>
            </div>
            <p className="text-white mt-2">
              Your Talk Fusion business dashboard
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button
              size="small"
              onClick={() => {
                navigator.clipboard.writeText(`https://getpaidin1minute.com/?ref=${user?.referralCode || 'yourusercode'}`);
                alert('Link copied to clipboard!');
              }}
            >
              Share Link
            </Button>
            <Button
              variant="secondary"
              size="small"
              onClick={refreshTeamData}
            >
              Refresh
            </Button>
          </div>
        </div>

        <div className="flex border-b border-gray-700 mb-8">
          {['dashboard', 'team', 'reports', 'tools'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-white font-medium ${activeTab === tab ? 'border-b-2 border-gold' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <FinancialSummary data={mockFinancialData} />
              <Card>
                <h2 className="text-2xl font-bold text-white mb-6">Your Team Structure</h2>
                <TeamGrowthVisualization userData={user} teamData={mockTeamData} />
              </Card>
              <ActivityFeed />
            </div>
            <div className="space-y-8">
              <UserProfile user={user} />
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="bg-darkNavy rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Team Management</h2>
            <p className="text-white">Team management interface would go here...</p>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="bg-darkNavy rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Reports & Analytics</h2>
            <p className="text-white">Reports and analytics interface would go here...</p>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="bg-darkNavy rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Marketing Tools</h2>
            <p className="text-white">Marketing tools interface would go here...</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

