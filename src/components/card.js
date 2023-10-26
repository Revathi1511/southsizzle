// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function CardComponent({ foodName }) {
//   const regionNames = ["Chennai", "Kerala", "Karnataka", "Andhra"];
//   const [selectedRegion, setSelectedRegion] = useState('');

//   const handleRegionChange = (event) => {
//     setSelectedRegion(event.target.value);
//   };

//   return (
//     <div>
//       <div className="card mt-12">
//         <div className="card-body">
//           <h5 className="card-title">{foodName}</h5>
//           <div className="container w-80">
//             <select
//               className="m-2 h-100 bg-warning" // Changed the class to bg-warning
//               value={selectedRegion}
//               onChange={handleRegionChange}
//             >
//               <option value="">Select a region</option>
//               {regionNames.map((region, index) => (
//                 <option key={index} value={region}>
//                   {region}
//                 </option>
//               ))}
//             </select>
//             {selectedRegion && (
//               <Link to={`/region/${selectedRegion}`} className="btn btn-primary mt-4">
//                 Go to {selectedRegion} Restaurant
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function CardComponent({ foodName }) {
//   const regionNames = ["Chennai", "Kerala", "Karnataka", "Andhra"];
//   const [selectedRegion, setSelectedRegion] = useState('');

//   const handleRegionChange = (event) => {
//     setSelectedRegion(event.target.value);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '20vh', background: 'white' }}>
//       <div className="card rounded" style={{ width: '300px' }}>
//         <div className="card-body">
//           <h5 className="card-title">{foodName}</h5>
//           <div className="container">
//             <select
//               className="form-select bg-warning mb-3"
//               value={selectedRegion}
//               onChange={handleRegionChange}
//             >
//               <option value="">Select a region</option>
//               {regionNames.map((region, index) => (
//                 <option key={index} value={region}>
//                   {region}
//                 </option>
//               ))}
//             </select>
//             <div className="d-grid">
//               {selectedRegion && (
//                 <Link to={`/region/${selectedRegion}`} className="btn btn-warning">
//                   Go to {selectedRegion} Restaurant
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CardComponent({ foodName, onRegionChange }) {
  const regionNames = ["Chennai", "Kerala", "Karnataka", "Andhra"];
  const favoriteFoodsList = [
    "Dosa", "Idli", "Vada", "Sambar", "Rasam", "Upma", "Pongal",
    "Biryani", "Kerala Fish Curry", "Appam", "Thali",
    "Banana Leaf Meals", "Masala Dosa", "Filter Coffee"
  ];

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedFavorite, setSelectedFavorite] = useState('');
  const navigate = useNavigate(); // Hook to handle navigation

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    onRegionChange(event.target.value);
  };

  const handleFavoriteChange = (event) => {
    setSelectedFavorite(event.target.value);
    navigate(`/food/${event.target.value}`); // Navigate to the selected favorite food page
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '20vh', background: 'white' }}>
      <div className="card rounded" style={{ width: '300px' }}>
        <div className="card-body">
          <h5 className="card-title">{foodName}</h5>
          <div className="container">
            <select
              className="form-select bg-warning mb-3"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="">Select a region</option>
              {regionNames.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <div className="d-grid">
              {selectedRegion && (
                <Link to={`/region/${selectedRegion}`} className="btn btn-warning">
                  Go to {selectedRegion} Restaurant
                </Link>
              )}
            </div>
          </div>

          {/* Dropdown for Favorite Foods */}
          <div className="container">
            <select
              className="form-select mb-3"
              value={selectedFavorite}
              onChange={handleFavoriteChange}
            >
              <option value="">Select a favorite food</option>
              {favoriteFoodsList.map((food, index) => (
                <option key={index} value={food}>
                  {food}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}


