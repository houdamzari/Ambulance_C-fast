import './App.css';
import Ambulance from "./Header/Ambulance";
import Container from "./Header/Container";
import Header from "./Header/Header";
import CardSection from "./Services/CardSection";
import Spacer from "./Utilities/Spacer";
import About from "./About/About";
import Footer from "./Footer/Footer";

  function App() {
    return (
      <>
      <Header/>
        <Spacer margin="15rem"/>
        <About />

        <CardSection />
        <Spacer margin="15rem"/>
        <Footer />
      </>
  );
}

export default App;
