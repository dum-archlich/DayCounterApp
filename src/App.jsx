import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="ml-4 mt-4">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to the Day Counter App!
        </h2>
        <p className="mb-4">
          Use the date picker below to select a range of dates and calculate the
          number of days between them.
        </p>
        <Home />
      </div>
    </div>
  );
};

export default App;
