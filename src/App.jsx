import MainRoutes from "./routers/MainRoutes";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "./App.css";
function App() {
  return (
    <main>
      <Header />
      <MainRoutes />
      <Footer/>
    </main>
  );
}

export default App;
