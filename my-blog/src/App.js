import './App.css';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Josh's Blog</h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/list" element={<ArticleListPage/>}/>
            <Route path="/list/:articleId" element={<ArticlePage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
