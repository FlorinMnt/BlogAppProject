import './App.css'
import { Home } from './pages/Home/home'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { NavBar } from './components/navBar/NavBar'
import { CreateBlogPost } from './pages/createBlogPost/CreateBlogPost'
import { FullBlog } from './components/fullBlog/FullBlog'

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fullBlog" element={<FullBlog />} />
            <Route path="/createBlogPost" element={<CreateBlogPost />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
