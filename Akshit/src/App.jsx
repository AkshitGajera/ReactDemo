import Dec from "./Dec";
import Heading from "./Heading"
import Sports from "./Sports"
import Footer from "./Footer";
import Number from "./Number";
import Mapp from "./Mapp";
import "./App.css"

function App() {

  return (
    <div class="mydiv">
      <div>
        <Heading></Heading>
        <hr />
      </div>
      <Sports></Sports>
      <hr />
      <Dec></Dec>
      <hr />
      <Footer></Footer>
      <hr />
      <Number></Number>
      <hr />
      <Mapp></Mapp>
    </div>

  );
}

export default App
