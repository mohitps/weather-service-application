import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element={<NotFound />} />
          <Route path="profile" element={<Profile/>}/>
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
