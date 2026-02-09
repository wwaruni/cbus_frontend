import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './routes/AuthContext';
import { routesConfig } from './routes/RoutesConfig';
import ProtectedRoutes from './routes/ProtectedRoute';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          { routesConfig.map(( { path, element: Component, roles, isPublic }) => 
            <Route 
              key={path}
              path={path}
              element={
                <ProtectedRoutes roles={roles} isPublic={isPublic}>
                  <Component />
                </ProtectedRoutes>
              }
            />
          )}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
