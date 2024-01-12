import css from './App.module.css';
import ClassCounter from "./components/ClassCounter";
import HooksCounter from './components/HooksCounter';
// import SearchBar from './components/SearchBar';
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
// import NavBarForm from "./components/NavBarForm"
// import RenderingLists from './components/RenderingLists';
// import Content from './components/Content'
// import ControlledForm from './components/ControlledForm';
// import UncontrolledForm from './components/UncontrolledForm';
// import Clock from "./components/Clock";
// import LifeCyclesCDM from "./components/LifeCyclesCDM";
// import LifeCyclesCDU from "./components/LifeCyclesCDU";
// import LifeCyclesCWU from "./components/LifeCyclesCWU";


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
      {/* <NavBarForm /> */}
      {/* <RenderingLists /> */}
      {/* <Content /> */}
      {/* <Clock /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <SearchBar /> */}
      <HooksCounter />
      <ClassCounter />
    </div>
  );
}

export default App;