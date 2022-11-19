import './App.css';
import { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import  Home  from './pages/Home'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Suspense>
        <ToastContainer
            autoClose={5000}
        />
        <Container >
            <Routes>
                <Route 
                    path="/"
                    element={<Home />}
                />
            </Routes>
        </Container>
    </Suspense>
);
}

export default App;
