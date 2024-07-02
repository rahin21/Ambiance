// import React, { useEffect, useState } from "react";
// import TableMenu from "../Tables/TableMenu";

// function  Tables() {
//   const [data, setData] = useState(null)
//   const [isLoading, setLoading] = useState(true)
//   useEffect(() => {
//     fetch("http://localhost:3000/api/menu/")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);    
//         setLoading(false)
//       })
//       .catch((error) => console.log(error));
//   }, []);
//   console.log(data);
//   if (isLoading) return <p>Loading...</p>
//   if (!data) return <p>No profile data</p>
//   return (
//     <div>
//       {data.length > 0 ? (
//         data.map((menu) => (
//           <TableMenu key={menu.id} data={menu} />
//         ))
//       ) : (
//         <p>Loading...</p> // Optional: Loading state or message
//       )}
//     </div>
//   );
// }

// export default Tables;
