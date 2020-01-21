// import React, { useState, useEffect } from "react";
// import "./css/App.css";
// import Animator from "./containers/Animator";
// import MenuBar from "./containers/MenuBar";
// import Logo from "./images/BIT-BY-BIT.png";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import {
//   BrowserRouter as Router,
//   Route,
//   NavLink,
//   Switch,
//   Redirect,
//   Link
// } from "react-router-dom";
// import API from "./adapters/API";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [validatedUser, setValidatedUser] = useState(false);

//   const logout = () => {
//     setUser(null);
//     API.clearToken();
//   };

//   const handleUser = user => {
//     setUser(user);
//   };

//   useEffect(() => {
//     if (API.hasToken()) {
//       API.validate()
//         .then(handleUser)
//         .then(() => setValidatedUser(true))
//         .catch(errorPromise => {
//           errorPromise.then(data => setError(data));
//         });
//     } else {
//       setValidatedUser(true);
//     }
//   }, []);

//   return (
//     <div className="App">
//       <img src={Logo} />
//       {error && <div style={{ color: "red" }}>{JSON.stringify(error)}</div>}
//       <Router>
//         <Switch>
//           <Route exact path="/signup">
//             {!user ? (
//               <div>
//                 <Signup onSuccess={handleUser} user={user} />
//                 Already have an account? Please <Link to="/login">log in </Link>
//                 instead.
//               </div>
//             ) : (
//               <Redirect to="/" />
//             )}
//           </Route>
//           <Route exact path="/login">
//             {!user ? (
//               <div>
//                 <Login onSuccess={handleUser} user={user} />
//                 Don't have an account? Please <Link to="/signup">sign up </Link>
//                 instead.
//               </div>
//             ) : (
//               <Redirect to="/" />
//             )}
//           </Route>
//           <Route exact path="/">
//             {user ? (
//               <div>
//                 <p>
//                   Logged in as {user.username}{" - "}
//                   <Link onClick={() => logout()}>logout</Link>
//                 </p>
//                 <Animator />
//               </div>
//             ) : (
//               <Redirect to="/signup" />
//             )}
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import './css/App.css';
import Gallery from './containers/Gallery';
import Logo from "./images/BIT-BY-BIT.png";

  
const App = () => (

  <div className="App">
    <img src={Logo} />
    {/* <Animator /> */}
    <Gallery />
  </div>

)

export default App;