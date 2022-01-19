//Principal Component
import AppRouters from "./AppRouters";
import { Provider } from "react-redux";
import globalState from "./redux/store/store";

function App() {
  return (
    <Provider store={globalState}>
      <AppRouters/>
    </Provider>
  );
}

export default App;
