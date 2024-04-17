import { useState } from "react";
import "./App.css";
import MainRoutes from "./routers/MainRoutes";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
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
