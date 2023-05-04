import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/loginPage';
import CreateAccountPage from './pages/createAccount';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar>
      </NavBar>
      <div id="page-body">
        <Routes>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/articles" element={<ArticleListPage/>}></Route>
        <Route path="/articles/:articleId" element={<ArticlePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/create-account' element={<CreateAccountPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
