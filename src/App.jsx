import { Provider } from "react-redux";
import "./App.css";
import { Pages } from "./Components/Pages/Pages";
import "./i18n";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Pages />
        {/*<TutorialMain /> */}
      </div>
    </Provider>
  );
}
export default App;
