import { BVName } from "./components/Name";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <div className="fixed top-8 left-5 lg:top-10 lg:left-10">
        <BVName className="h-10 text-3xl" />
      </div>

      <Navigation></Navigation>
    </>
  );
}

export default App;
