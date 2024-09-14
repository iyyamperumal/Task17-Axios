import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import UserForm from './components/userform'
import Users from './components/users'

const DefaultElement = () => {
  return (
    <>
      <h4>No page found,please check the URL</h4>
      <Link to="/">Home</Link>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/add-user' element={<UserForm />} />
        <Route path='*' element={<DefaultElement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
