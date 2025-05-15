import { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Login from './component/login';
import Signup from './component/Signup';
import First from './component/First';
import Register from './component/Register';
import Inter from './component/interior';
import Ep from './component/Ep';
import Contact from './component/Contact'; 
import Videos from './component/Videos';
import Generators from './component/Generators';  
import Rreg from './component/Rreg';
import Admin from './component/Admin';
import { auth } from './component/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    
    return unsubscribe;
  }, []);
  
  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  
  if (loading) return <div>Loading...</div>;
  if (!currentUser) return <Navigate to="/login" state={{ from: location }} />;
  return children;
};

// Dashboard component
const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const handleContinue = () => {
    navigate('/first');
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>
      <p className="mb-4">You are logged in as: {currentUser?.email}</p>
      
      <button 
        onClick={handleContinue}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
      >
        Continue to Main Page
      </button>
      
      <button 
        onClick={() => auth.signOut()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Default route now redirects to First page or login based on auth */}
          <Route path="/" element={
            <AuthWrapper>
              <First />
            </AuthWrapper>
          } />
          
          {/* Authentication routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/generators" element={<Generators />} />
          <Route path="/rreg" element={<Rreg />} />
          
          {/* Interior and other content routes */}
          <Route path="/interior" element={
            <AuthWrapper>
              <Inter key={window.location.pathname} />
            </AuthWrapper>
          } />
          
          <Route path="/ep" element={
            <AuthWrapper>
              <Ep key={window.location.pathname} />
            </AuthWrapper>
          } />
          
          <Route path="/contact" element={
            <AuthWrapper>
              <Contact key={window.location.pathname} />
            </AuthWrapper>
          } />
          
          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/first"
            element={
              <AuthWrapper>
                <First key={window.location.pathname} />
              </AuthWrapper>
            }
          />
          
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

// Helper component to handle authentication consistently
const AuthWrapper = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  
  if (loading) return <div>Loading...</div>;
  
  // For interior, EP, contact, and first pages - redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  
  return children;
};

export default App;