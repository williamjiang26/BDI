import React from 'react';
import { useSelector } from 'react-redux';
import {Line} from 'react-chartjs-2';
import { useState, useEffect } from 'react';


function App() {
    const [scores, setScores] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
    const userId = currentUser.email; // Assuming the user's email is the userId
  
    useEffect(() => {
      const getScores = async () => {
        try {
          const res = await fetch(`/api/user/graph`);
          const data = await res.json();
          console.log(data)
          if (res.ok) {
            setScores(data.scores);
          } else {
            console.error('Failed to fetch scores:', data.error);
          }
        } catch (error) {
          console.error('Error fetching scores:', error);
        }
      };
  
      getScores();
    }, [userId]); // Add userId to dependency array to re-fetch scores when userId changes
  
    return (
      <div>
        {scores.map((score, index) => (
          <div key={index}>{/* Render score details here */}</div>
        ))}
      </div>
    );
  }
  
const state = {
labels: ['January', 'February', 'March',
        'April', 'May'],
datasets: [
    {
    label: 'Rainfall',
    fill: false,
    lineTension: 0.5,
    backgroundColor: 'rgba(75,192,192,1)',
    borderColor: 'rgba(0,0,0,1)',
    borderWidth: 2,
    data: [65, 59, 80, 81, 56]
    }
]
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Line
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }

export default App;
