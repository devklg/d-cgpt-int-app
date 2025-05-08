import React from 'react';
import PropTypes from 'prop-types';
import Card from '../common/Card';

const FinancialSummary = ({ data }) => {
  return (
    <Card>
      <h2 className="text-2xl font-bold text-white mb-6">Financial Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-darkNavy p-4 rounded-lg shadow">
          <h3 className="text-white text-sm">Current Earnings</h3>
          <p className="text-gold text-xl font-semibold">${data.currentEarnings.toFixed(2)}</p>
        </div>
        <div className="bg-darkNavy p-4 rounded-lg shadow">
          <h3 className="text-white text-sm">Pending Commissions</h3>
          <p className="text-gold text-xl font-semibold">${data.pendingCommissions.toFixed(2)}</p>
        </div>
        <div className="bg-darkNavy p-4 rounded-lg shadow">
          <h3 className="text-white text-sm">Fast Start Bonuses</h3>
          <p className="text-gold text-xl font-semibold">${data.fastStartBonuses.toFixed(2)}</p>
        </div>
        <div className="bg-darkNavy p-4 rounded-lg shadow">
          <h3 className="text-white text-sm">Team Commissions</h3>
          <p className="text-gold text-xl font-semibold">${data.teamCommissions.toFixed(2)}</p>
        </div>
        <div className="bg-darkNavy p-4 rounded-lg shadow">
          <h3 className="text-white text-sm">Mega Matching Bonuses</h3>
          <p className="text-gold text-xl font-semibold">${data.megaMatchingBonuses.toFixed(2)}</p>
        </div>
        <div className="bg-darkNavy p-4 rounded-lg shadow">
          <h3 className="text-white text-sm">Rank Advancement Bonuses</h3>
          <p className="text-gold text-xl font-semibold">${data.rankAdvancementBonuses.toFixed(2)}</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">Recent Transactions</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-white">
          <thead>
            <tr>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Amount</th>
              <th className="text-left p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.recentTransactions.map(tx => (
              <tr key={tx.id} className="border-t border-gray-700">
                <td className="p-2">{tx.date.toLocaleDateString()}</td>
                <td className="p-2 capitalize">{tx.type.replace(/-/g, ' ')}</td>
                <td className="p-2 text-gold font-semibold">${tx.amount.toFixed(2)}</td>
                <td className="p-2">{tx.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

FinancialSummary.propTypes = {
  data: PropTypes.shape({
    currentEarnings: PropTypes.number,
    pendingCommissions: PropTypes.number,
    fastStartBonuses: PropTypes.number,
    teamCommissions: PropTypes.number,
    megaMatchingBonuses: PropTypes.number,
    rankAdvancementBonuses: PropTypes.number,
    recentTransactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        amount: PropTypes.number,
        date: PropTypes.instanceOf(Date),
        description: PropTypes.string
      })
    )
  }).isRequired
};

export default FinancialSummary;
