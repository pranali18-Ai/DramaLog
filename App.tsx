import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DramaProvider } from './context/DramaContext';
import { Layout } from './components/Layout';
import { Discovery } from './pages/Discovery';
import { MyList } from './pages/MyList';
import { DramaDetails } from './pages/DramaDetails';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DramaProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Discovery />} />
              <Route path="/list" element={<MyList />} />
              <Route path="/drama/:id" element={<DramaDetails />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </Router>
      </DramaProvider>
    </AuthProvider>
  );
};

export default App;
