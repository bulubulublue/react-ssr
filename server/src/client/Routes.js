import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

// export default () => {
//   return (
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route path="/users" element={<UsersList />} />
//     </Routes>
//   )
// }

export default [
  {
    path: '/',
    element: <Home />,
    exact: true,
  },
  {
    loadData,
    path: '/users',
    element: UsersList,
  },
];
