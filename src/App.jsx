import Body from "./components/Body";
import Headers from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Headers />
        <Body />
      </Provider>
    </>
  );
}

export default App;
