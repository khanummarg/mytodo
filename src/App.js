import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Pages/toDo/Todo";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import NotFound from "./components/Pages/NotFound/NotFound";
import NavMenu from "./components/NavMenu/NavMenu";
import SingleTask from "./components/Pages/SingleTask/SingleTask";
import Hoc from "./demo/HOC/Hoc";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Hoc>
        jadkflsj
        <About />
      </Hoc>
      <Hoc />
      
    <BrowserRouter>
      <NavMenu />
        <Switch>
        <Route path="/" component={Todo} exact= {true} />
          <Route path="/home" component={Todo} exact= {true} />
          <Route path="/about" component={About} exact= {true} />
          <Route path="/contact" component={Contact} exact= {true} />
          <Route path="/task/:taskId" component={SingleTask} exact= {true} />
          <Route path="/not-found" component={NotFound} exact= {true} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
