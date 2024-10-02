import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/navbar';
// import ProfileCard from './pages/profil/profil';
import Footer from '../src/components/footer';
import Home from './pages/HomePages/Home';
import Overview from './pages/OveviewPages/Overview';
import AboutMe from './pages/AboutPages/AboutMe';
import SkillPengalaman from './pages/SkillPengalamanPages/SkillPengalaman';



function App() {
  return (
    <Router  >
       <Navbar/>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Home />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/SkillPengalaman" element={<SkillPengalaman />} />

        {/* <Route path="/SkillPengalaman " element={<SkillPengalaman />} /> */}
          </Routes>
         <Footer/>
         {/* <Routes><Route path="/profile" element={<ProfileCard />} />  // Menambahkan ProfileCard di rute /profile
        <Route path="*" element={<div>404 Not Found</div>} /> // Menangani unmatched paths
    </Routes> */}
    </Router>
  );
}

export default App;


// export default App;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [portfolio, setPortfolio] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/portfolio')
//       .then(response => {
//         setPortfolio(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching portfolio:', error);
//       });
//   }, []);

//   return (
//     <div className="p-6">
//       <header className="text-center mb-6">
//         <h1 className="text-4xl font-bold">{portfolio?.name}</h1>
//         <p className="text-xl">{portfolio?.title}</p>
//       </header>
//       <section className="mb-6">
//         <h2 className="text-2xl font-semibold mb-4">Skills</h2>
//         <ul className="list-disc pl-5">
//           {portfolio?.skills.map(skill => (
//             <li key={skill} className="text-lg">{skill}</li>
//           ))}
//         </ul>
//       </section>
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Projects</h2>
//         <ul className="list-disc pl-5">
//           {portfolio?.projects.map(project => (
//             <li key={project.title} className="text-lg">
//               <strong>{project.title}</strong>: {project.description}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default App;