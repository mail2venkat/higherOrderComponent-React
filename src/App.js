import UserInfo from "./UserInfo";
import UserBasicDetails from "./UserBasicDetails";
import UserFinanceDetails from "./UserFinanceDetails";

function App() {
  return (
    <div className="App">
      <h1>Higher Order Component</h1>
      <UserBasicDetails />
      <hr />
      <UserFinanceDetails />
    </div>
  );
}

export default App;
