import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Dashboard/Home';
import Orders from './pages/Dashboard/Orders';
import Products from './pages/Dashboard/Products';
import Manage from './pages/Dashboard/Manage';
import Account from './pages/Dashboard/Account';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path='orders'>
              <Route index element={<Orders />} />
              <Route path=':state' element={<Orders />} />
            </Route>
            <Route path='products' element={<Products />} />
            <Route path="manage" element={<Manage />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
