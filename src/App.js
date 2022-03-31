import "./scss/App.scss"
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";

const App = () => {
  return(
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  )
}

export default App;




