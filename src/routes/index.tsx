import { Routes, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const AppRoutes = () => (
  <Routes>
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="*" element={<div />} />
  </Routes>
);

export default AppRoutes;
