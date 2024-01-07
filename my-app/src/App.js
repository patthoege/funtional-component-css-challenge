import css from './App.module.css';
import EventClass from './components/EventClass';
import EventsFunctional from './components/EventsFunctional';

// import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
    {/* Add your components here */}
      {/* <Sidebar /> */}
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike"/>
      {/* <StatefulGreetingWithCallback /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <NavBarSimple /> */}
      {/* <EventsFunctional /> */}
      {/* <EventClass /> */}
    </div>
  );
}

export default App;