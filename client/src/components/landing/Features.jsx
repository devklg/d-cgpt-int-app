import React from 'react';

const Features = () => {
  return (
    <section className="bg-darkNavy text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gold mb-2">Instant Video Email</h3>
          <p>Send powerful video messages to anyone, anywhere, instantly.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gold mb-2">1-Minute Commissions</h3>
          <p>Get rewarded fast when your referrals take action.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gold mb-2">Global Opportunity</h3>
          <p>Build an international team from your laptop or phone.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

