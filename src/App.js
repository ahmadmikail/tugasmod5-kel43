import './App.css';
import { React} from "react";
import Cardlist from './Component/Cardlist';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
          <BrowserRouter>
        <header className="navv">
          <div
            className="title"
            style={{
              position: "relative",
              left: "45%",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <h2>Kelompok 43</h2>
          </div>
          </header>
          <Switch>
          <Route path="/" exact component={Cardlist} />
        </Switch>
        </BrowserRouter>
        );
}
