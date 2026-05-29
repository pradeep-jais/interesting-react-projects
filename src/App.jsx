import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer/";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./route/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main">
        <Breadcrumbs />
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
