import { Route, Routes } from "react-router-dom";
import { BVName } from "./components/Name";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="fixed top-8 left-5 lg:top-10 lg:left-10">
        <BVName className="h-10 text-3xl" />
      </div>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}
