import FullScreenSpinner from "components/shared-components/FullScreenSpinner";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";

const isLoading = () => <FullScreenSpinner isLoading />;
window.document.title = "Zeedas App";
const App = () => (
  <div className="App">
    <BrowserRouter>
      <Suspense fallback={isLoading()}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  </div>
);

export default App;
