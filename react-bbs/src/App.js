import BackImg from "./1237.jpg";
import "./App.css";
import BBsMain from "./Main/BBsMain";

function App() {
  const background = {
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    overflow: "auto",
    height: "100wh 50vh",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>&#9958; REACT BBS 2020 &#9958;</h3>
        <p>&#9830; React로 구현하는 BBS Project &#9830;</p>
      </header>
      <BBsMain />
      <footer className="footer">
        <address>CopyRigh &copy; als3478@naver.com</address>
      </footer>
    </div>
  );
}

export default App;
