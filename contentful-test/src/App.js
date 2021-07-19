import { useEffect, useState } from "react";
import { ModelProvider } from "./contexts/ModelContext";
import Display from "./Display";
import ProductPage from "./pages/ProductPage"





function App() {



  return (
    <ModelProvider>
      <Display />

    </ModelProvider>
  );
}

export default App;
