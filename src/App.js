import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import { Route, Routes, BrowserRouter , HashRouter } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";


function App() {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </HashRouter>
      </Container>
    </div>
  );
}

export default App;
