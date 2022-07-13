import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
