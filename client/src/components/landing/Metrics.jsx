 import React from 'react';
 
const Metrics = () => {
  const emailStats = [
    { value: '347B', label: 'Emails Sent Daily' },
    { value: '300%', label: 'Higher Engagement' },
    { value: '60%', label: 'Business Email Volume' },
    { value: '99%', label: 'Check Email Daily' },
  ];

  const tfStats = [
    { value: '140+', label: 'Countries Reached' },
    { value: '1 Minute', label: 'Payout Speed' },
    { value: '$ Millions Paid', label: 'Compensation' },
    { value: 'Live Updates', label: 'Real-Time Powerline' },
  ];

  return (
    <section className="bg-darkNavy py-12">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">The Massive Email Economy</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          In 2025, 347 billion emails are sent daily – yet most go unnoticed. Video email gets 300% more engagement than text emails.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white mb-10">
        {emailStats.map((item, i) => (
          <div key={i}>
            <p className="text-4xl font-extrabold text-gold">{item.value}</p>
            <p className="mt-2 text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
        {tfStats.map((item, i) => (
          <div key={i}>
            <p className="text-3xl font-bold text-gold">{item.value}</p>
            <p className="mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
