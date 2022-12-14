import { BrowserRouter} from "react-router-dom";
import { Router } from "./routes/Router";
import ScrollToTop from "./components/ScrollToTop";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Router />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
