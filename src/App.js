import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import NavBar from './components/partials/NavBar'
import Home from './components/routes/Home'
import Bobas from './components/routes/Bobas'
import Boba from './components/routes/Boba'
import EditBoba from './components/routes/EditBoba'
import NewBoba from './components/routes/NewBoba'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />

          <Route 
            path='/bobas'
            element={<Bobas />}
          />

          <Route 
            path='/bobas/new'
            element={<NewBoba />}
          />

          <Route 
            path='/bobas/:id'
            element={<Boba />}
          />

          <Route 
            path='/bobas/:id/edit'
            element={<EditBoba />}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
