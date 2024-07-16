import MainPage from "./pages/MainPage";
import FlowbiteProvider from "./providers/FlowbiteProvider";
import { THEME } from "./theme";

function App() {
  return (
    <FlowbiteProvider theme={{ theme: THEME }}>
      <MainPage />
    </FlowbiteProvider>
  );
}

export default App;
