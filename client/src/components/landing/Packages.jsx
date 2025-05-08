import React from 'react';

function Packages() {
  const packages = [
    {
      name: 'Starter',
      price: '$99',
      features: ['Basic Video Email', 'Limited Templates', 'Email Support'],
    },
    {
      name: 'Elite',
      price: '$199',
      features: ['All Starter Features', 'Advanced Templates', 'Priority Support'],
    },
    {
      name: 'Pro',
      price: '$299',
      features: ['All Elite Features', 'Custom Branding', 'Dedicated Support'],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Choose Your Package</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="border p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">{pkg.name}</h3>
              <p className="text-2xl font-bold mb-4">{pkg.price}</p>
              <ul className="mb-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Select</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
