import React from 'react';

const adviceData = [
  {
    title: 'When everything feels like too much it\'s time to find your balance.',
    description: 'Long hours, endless to-do lists, and constant pressure can take a toll on your mental health. If you\'re feeling burned out, schedule some downtime.',
    image: '/path/to/image1.jpg' // replace with actual image path
  },
  {
    title: 'Every relationship has its challenges, let\'s work through them together.',
    description: 'Whether it\'s tension with a partner, misunderstandings with friends, or family drama that seems to fester, relationship struggles can leave you emotionally drained and confused.',
    image: '/path/to/image2.jpg' // replace with actual image path
  },
  {
    title: 'Stuck, overwhelmed, or always running out of time.',
    description: 'Procrastination often hides deeper issues like anxiety, perfectionism, or burnout. Infuse help so you know what\'s really going on.',
    image: '/path/to/image3.jpg' // replace with actual image path
  },
  {
    title: 'You are enough even if it doesn’t feel that way right now.',
    description: 'Low self-esteem can make everyday decisions feel heavy, relationships feel insecure, and life feel like it’s happening without you.',
    image: '/path/to/image4.jpg' // replace with actual image path
  },
  {
    title: 'Sometimes, it’s just... everything.',
    description: 'Life is complicated. Maybe it’s not the single issue just stress, confusion, or feeling stuck.',
    image: '/path/to/image5.jpg' // replace with actual image path
  }
];

const AdviceSection = () => {
  return (
    <div className="bg-dark-blue p-8">
      {adviceData.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0"
          />
          <div className="text-white md:ml-8">
            <h2 className="text-3xl font-bold">{item.title}</h2>
            <p className="mt-4 text-lg">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdviceSection;
