import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Jane Doe',
      feedback: 'Talk Fusion has transformed the way I communicate with my clients.',
    },
    {
      name: 'John Smith',
      feedback: 'The instant payouts are a game-changer!',
    },
    {
      name: 'Emily Johnson',
      feedback: 'I love the user-friendly dashboard and the support team is fantastic.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded shadow">
              <p className="mb-4">"{testimonial.feedback}"</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
