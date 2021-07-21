import { useEffect, useState } from "react";
import { ModelProvider } from "./contexts/ModelContext";
import { EntriesProvider } from "./contexts/EntriesContext";
import Display from "./Display";
import ProductPage from "./pages/ProductPage"





function App() {



  return (
    <ModelProvider>
      <EntriesProvider>
        <Display />
      </EntriesProvider>
    </ModelProvider>
  );
}

export default App;
