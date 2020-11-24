import BackImg from "./00.jpg";
import "./App.css";
import BucketMain from "./main/BucketMain";

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
        <h2>&#128746; MY BUCKET LIST&#128746;</h2>
      </header>
      <BucketMain />
      <footer className="footer">
        <address>CopyRigh &copy; als3478@naver.com</address>
      </footer>
    </div>
  );
}

export default App;
