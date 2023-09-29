import Game from "./components/Game.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="text-center flex flex-col min-h-screen justify-between font-body">
      <div>
        <Header />
        <Game />
      </div>
      <Footer />
    </div>
  );
}

export default App;
