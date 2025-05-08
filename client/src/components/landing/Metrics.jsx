import React from 'react';
import React from 'react';

const Metrics = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-4">The Massive Email Economy</h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8">
        In 2025, 347 billion emails are sent daily – yet most go unnoticed. Video email gets 300% more engagement than text emails.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-extrabold text-gold">347B</div>
          <div className="mt-2 text-gray-300">Emails Sent Daily</div>
        </div>
        <div>
          <div className="text-4xl font-extrabold text-gold">300%</div>
          <div className="mt-2 text-gray-300">Higher Engagement</div>
        </div>
        <div>
          <div className="text-4xl font-extrabold text-gold">60%</div>
          <div className="mt-2 text-gray-300">Business Email Volume</div>
        </div>
        <div>
          <div className="text-4xl font-extrabold text-gold">99%</div>
          <div className="mt-2 text-gray-300">Check Email Daily</div>
        </div>
      </div>
    </section>
  );
};

const metrics = [
  { label: 'Countries Reached', value: '140+' },
  { label: 'Payout Speed', value: '1 Minute' },
  { label: 'Compensation', value: '$ Millions Paid' },
  { label: 'Real-Time Powerline', value: 'Live Updates' },
];

const Metrics = () => {
  return (
    <section className="bg-darkNavy py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
        {metrics.map((item, index) => (
          <div key={index}>
            <p className="text-3xl font-bold text-gold">{item.value}</p>
            <p className="text-sm mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;