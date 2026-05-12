

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App bg-light min-vh-100">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src={process.env.PUBLIC_URL + '/octofitapp-small.svg'} alt="OctoFit Logo" className="octofit-logo" />
              OctoFit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <Routes>
                <Route path="/activities" element={<Activities />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/users" element={<Users />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/" element={
                  <div className="card shadow mb-4">
                    <div className="card-body text-center">
                      <h1 className="display-5 mb-3 text-primary">Welcome to OctoFit Tracker!</h1>
                      <p className="lead">Track your fitness, join teams, and compete on the leaderboard!</p>
                      <Link className="btn btn-primary btn-lg m-2" to="/activities">View Activities</Link>
                      <Link className="btn btn-outline-secondary btn-lg m-2" to="/leaderboard">View Leaderboard</Link>
                    </div>
                  </div>
                } />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
