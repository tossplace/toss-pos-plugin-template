import "./App.css";
import { posPluginSdk } from "@tossplace/pos-plugin-sdk";

function App() {
  return (
    <main>
      <button
        onClick={() => {
          posPluginSdk.toast.open("Hello, World!");
        }}
      >
        Toast Open
      </button>
    </main>
  );
}

export default App;
