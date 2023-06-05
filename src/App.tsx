import { CardExample } from "./components";
import { ProtectedLayout } from "./layout";

function App() {
  return (
    <ProtectedLayout version="1.0.0">
      <>
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
        <CardExample />
        <br />
      </>
    </ProtectedLayout>
  );
}

export default App;
