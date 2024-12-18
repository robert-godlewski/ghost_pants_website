import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Components
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
import CreatePost from './pages/CreatePost';
import OnePost from './pages/OnePost';
import UpdatePost from './pages/UpdatePost';

function Logout() {
  localStorage.clear()
  return <Navigate to='/landing/'/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterAndLogout/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route 
          path='/post/create' 
          element={<ProtectedRoute><CreatePost/></ProtectedRoute>}
        />
        <Route path='/post/read/:slug' element={<OnePost />}/>
        <Route 
          path='/post/edit/:slug' 
          element={<ProtectedRoute><UpdatePost/></ProtectedRoute>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
