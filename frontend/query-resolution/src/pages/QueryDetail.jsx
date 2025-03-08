import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const QueryDetail = () => {
  const { queryId } = useParams(); // Get query ID from URL
  const [query, setQuery] = useState(null);
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQueryDetails = async () => {
      try {
        // Fetch Query Details
        const response = await axios.get(`http://localhost:8080/askSphere/api/v1/queries/getQueryById/${queryId}`);
        console.log("query: ",response);
        setQuery(response.data.data);
      } catch (err) {
        console.error("Error fetching query:", err);
        setError("Failed to load query details.");
      }
    };

    const fetchSolutions = async () => {
      try {
        // Fetch Solutions for this Query
        const response = await axios.get(`http://localhost:8080/askSphere/api/v1/solutions/getSolutions/${queryId}`);
        console.log("solution :",response);
        setSolutions(response.data.data || []);
        console.log('sol:: ',solutions);
      } catch (err) {
        console.error("Error fetching solutions:", err);
        setSolutions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchQueryDetails();
    fetchSolutions();
  }, [queryId]);

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!query) return <div className="text-center text-red-500">Query not found.</div>;

  return (
    <div className='p-[40px] pt-[90px]  mt-[20px] size-full'>
    <div className="p-6 pt-20 max-w-4xl mx-auto">
      {/* Query Details */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">{query.title}</h2>
        <p className="mt-2 text-gray-600">{query.description}</p>
        
        {query.image && (
          <img 
            src={`http://localhost:8080/uploads/queries/${query.image}`} 
            alt="Query Attachment" 
            className="mt-4 w-full max-h-[300px] object-fit rounded-lg"
          />
        )}

        <p className="mt-3 text-gray-500 text-sm">
          <strong>Posted By:</strong> {query.postedBy.username} | <strong>Created At:</strong> {new Date(query.createdAt).toLocaleString()}
        </p>
      </div>

      {/* Solutions Section /solutionform/:queryId*/}
      <Link 
        to={`/solutionform/${queryId}`} 
        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Post a Solution
      </Link>
      <h3 className="mt-6 text-xl font-semibold text-gray-800">Solutions:</h3>
      {solutions.length > 0 ? (
        <div className="mt-4 space-y-4">
          {solutions.map(solution => (
            <div key={solution._id} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-700">{solution.solutionText}</p>
              {solution.solutionImage && (
                <img 
                  src={`http://localhost:8080/uploads/solutions/${solution.solutionImage}`} 
                  alt="Solution Attachment" 
                  className="mt-3 w-full h-full object-fit rounded-lg"
                />
              )}
              <p className="mt-2 text-gray-500 text-sm">
                <strong>Posted By:</strong> {solution.postedBy.username}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-2">No solutions available for this query.</p>
      )}
    </div>
    </div>
  );
};

export default QueryDetail;



// import React from 'react';
// import { useParams } from 'react-router-dom';

// const dummyQueries = [
//   { id: 1, title: 'Query Title 1', description: 'Detailed description of the first query.' },
//   { id: 2, title: 'Query Title 2', description: 'Detailed description of the second query.' },
//   { id: 3, title: 'Query Title 3', description: 'Detailed description of the third query.' },
//   { id: 4, title: 'Query Title 4', description: 'Detailed description of the fourth query.' },
//   { id: 5, title: 'Query Title 5', description: 'Detailed description of the fifth query.' },
//   { id: 6, title: 'Query Title 6', description: 'Detailed description of the sixth query.' }
// ];

// const dummySolutions = {
//   1: [ { id: 1, text: 'Solution 1 for Query 1' }, { id: 2, text: 'Solution 2 for Query 1' } ],
//   2: [ { id: 3, text: 'Solution 1 for Query 2' } ],
//   3: [],
//   4: [ { id: 4, text: 'Solution 1 for Query 4' } ],
//   5: [ { id: 5, text: 'Solution 1 for Query 5' } ],
//   6: [ { id: 6, text: 'Solution 1 for Query 6' } ]
// };

// const QueryDetail = () => {
//   const { queryId } = useParams();
//   const query = dummyQueries.find(q => q.id === parseInt(queryId));
//   const solutions = dummySolutions[queryId] || [];

//   if (!query) {
//     return <div className='text-center text-red-500'>Query not found.</div>;
//   }

//   return (
//     <div className='p-[40px] pt-[90px]  mt-[20px] size-full'>
//     <div className='bg-white p-6 rounded-lg shadow-md'>
//       <h2 className='text-2xl font-bold text-gray-800'>{query.title}</h2>
//       <p className='mt-2 text-gray-600'>{query.description}</p>
//       <h3 className='mt-4 text-xl font-semibold text-gray-800'>Solutions:</h3>
//       {solutions.length > 0 ? (
//         <ul className='list-disc list-inside mt-2 text-gray-700'>
//           {solutions.map(solution => (
//             <li key={solution.id} className='mt-1'>{solution.text}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className='text-gray-500 mt-2'>No solutions available for this query.</p>
//       )}
//     </div>
//     </div>
//   );
// };

// export default QueryDetail;