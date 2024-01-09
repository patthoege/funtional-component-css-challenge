import css from './App.module.css';
// import EventClass from './components/EventClass';
// import EventsFunctional from './components/EventsFunctional';
// import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import NavBarSimple from './components/NavBarSimple';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import NestingComponents from './components/NestingComponents';
// import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import NavBarForm from "./components/NavBarForm"
// import RenderingLists from './components/RenderingLists';
import Content from './components/Content'


function App() {
  return (
    <div className={css.App}>
    {/* Add your components here */}
      {/* <Sidebar /> */}
      {/* <StatefulGreeting greeting="I'm a stateful class component!" name="Mike"/> */}
      {/* <StatefulGreetingWithCallback /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <NavBarSimple /> */}
      {/* <EventsFunctional /> */}
      {/* <EventClass /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <ConditionalRenderingFunctional connected={false} /> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}
      <NavBarForm />
      {/* <RenderingLists /> */}
      <Content />
    </div>
  );
}

export default App;