import { Card } from "./components/Card";
import { API } from "./components/API";
import CountryDropDown from "./components/CountryDropDown";


function App() {
  return (
    <div>
      <center>
        {/* <API country="India"></API> */}
        <br></br>
        <div className="px-9 py-8 max-h-10 max-w-xs">
        Select Country:<CountryDropDown></CountryDropDown>
        </div>
        {/* <Card></Card> */}


      </center>

    </div>
  );
};

export default App;
