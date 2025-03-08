import React from 'react';

const QueryCard = ({ title, description }) => {
  return (
    <div className='p-5 rounded-lg shadow-md border border-gray-300 flex flex-col items-center'>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='text-gray-700 mt-2 text-center'>{description}</p>
      <button className='mt-3 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition self-center'>
        View More
      </button>
    </div>
  );
};

const Queries = () => {
  const queryData = [
    { title: 'Query Title 1', description: 'This is a brief description of the query...' },
    { title: 'Query Title 2', description: 'This is a brief description of the query...' },
    { title: 'Query Title 3', description: 'This is a brief description of the query...' },
    { title: 'Query Title 4', description: 'This is a brief description of the query...' },
    { title: 'Query Title 5', description: 'This is a brief description of the query...' },
    { title: 'Query Title 6', description: 'This is a brief description of the query...' }
  ];

  return (
    <div className='flex items-center justify-center min-h-screen text-black p-6'>
      <div className='w-full max-w-6xl p-8'>
        <h1 className='text-3xl font-bold text-center mb-6'>Recent Queries</h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {queryData.map((query, index) => (
            <QueryCard key={index} title={query.title} description={query.description} />
          ))}
        </div>
        
        <div className='flex justify-center mt-6'>
          <button className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md'>
            View All Queries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Queries;