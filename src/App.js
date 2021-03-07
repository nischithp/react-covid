import { Card } from "./components/Card";
import { API } from "./components/API";
import CountryDropDown from "./components/CountryDropDown";


function App() {
  return (
    <div>
      <center>
        <div className="container px-9 py-8 my-6 max-w-6xl rounded-xl shadow-xl">
          <h1 className="text-2xl font-bold text-blue-600">Select Country</h1>
          <CountryDropDown></CountryDropDown>
        </div>
      </center>
    </div>
  );
};

export default App;
