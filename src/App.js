import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Navbar from "./components/header/navbar/Navbar";
import Up from "./components/header/upp/Up";
import Info from "./components/info/Info";
import Servers from "./components/servers/Servers";
import ServersTwo from "./components/servers/ServersTwo";




function App() {
  return (
      <div className="App">
        <Up/>
        <Navbar/>
        <Info />
        <Servers />
        <ServersTwo />
        <Education />
        <Contact/>
      </div>
  );
}

export default App;
