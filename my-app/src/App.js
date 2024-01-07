import css from './App.module.css';

// import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
    {/* Add your components here */}
      {/* <Sidebar /> */}
      {/* <StatefulGreeting greeting="I'm a stateful class component!" name="Mike"/> */}
      {/* <StatefulGreetingWithCallback /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      <NavBarSimple />
    </div>
  );
}

export default App;