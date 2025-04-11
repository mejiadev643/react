import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Cargar perezosamente los componentes
const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const PrivateRoute = lazy(() => import('./routes/PrivateRoute'));

function App() {
  return (
    <Routes>
      {/* Ruta Login no necesita lazy loading si ya está optimizada */}
      <Route path="/login" element={<Login />} />

      {/* Rutas con lazy loading envueltas en Suspense */}
      <Route 
        path="/" 
        element={
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        } 
      />
      
      <Route 
        path="/dashboard" 
        element={
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          </Suspense>
        } 
      />
    </Routes>
  );
}

export default App;
