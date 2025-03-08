import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQueries = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/askSphere/api/v1/queries/getQueries");
        console.log(response);
        setQueries(response.data.data); // Set real queries from backend
      } catch (error) {
        console.error("Error fetching queries:", error);
        setError('Failed to fetch queries.');
        setQueries([]);
      } finally {
        setLoading(false);
      }
    };
    fetchQueries();
  }, []);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className='p-[40px] pt-[90px] mt-[20px] size-full'>
      <Link 
              to={"/queryform"} 
              className="mt-4 inline-block  bg-blue-600 mb-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Having Doubt?
            </Link>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {queries.length === 0 ? (
          <p className="text-center col-span-3 text-gray-500">No queries found.</p>
        ) : (
          queries.map((query) => (
            <div key={query._id} className='p-5 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition'>
              <h3 className='text-lg font-semibold text-gray-800'>{query.title}</h3>
              <p className='text-gray-600 mt-2'>{query.description.substring(0, 100)}...</p>
              <Link to={`/query/${query._id}`} className='block text-center mt-4'>
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition'>
                  View More
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
  
};

export default Queries;

// src/components/QueryListing.jsx

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const dummyQueries = [
//   { id: 1, title: 'Query Title 1', description: 'This is a brief description of the first query.' },
//   { id: 2, title: 'Query Title 2', description: 'This is a brief description of the second query.' },
//   { id: 3, title: 'Query Title 3', description: 'This is a brief description of the third query.' },
//   { id: 4, title: 'Query Title 4', description: 'This is a brief description of the fourth query.' },
//   { id: 5, title: 'Query Title 5', description: 'This is a brief description of the fifth query.' },
//   { id: 6, title: 'Query Title 6', description: 'This is a brief description of the sixth query.' }
// ];

// const QueryListing = () => {
//   const [queries, setQueries] = useState(dummyQueries);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchQueries = async () => {
//       setLoading(true);
//       try {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         setQueries(dummyQueries);
//       } catch (error) {
//         setError('Failed to fetch queries.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchQueries();
//   }, []);

//   if (loading) return <div className="text-center text-lg">Loading...</div>;
//   if (error) return <div className="text-red-500 text-center">{error}</div>;
// return (
//   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//     {queries.map((query) => (
//       <div key={query.id} className='p-5 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition'>
//         <h3 className='text-lg font-semibold text-gray-800'>{query.title}</h3>
//         <p className='text-gray-600 mt-2'>{query.description}</p>
//         <Link to={`/query/${query.id}`} className='block text-center mt-4'> {/* Corrected here */}
//           <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition'>
//             View More
//           </button>
//         </Link>
//       </div>
//     ))}
//   </div>
// );
  
// };

// export default QueryListing;



