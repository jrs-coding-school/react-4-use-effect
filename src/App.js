import './App.css';
import ClickCounter from './components/ClickCounter';
import UseEffectDemo from './components/UseEffectDemo';
import { ToastProvider } from './toasts/ToastService';

function App() {

  return (
    <ToastProvider>
      <div className="App">
        <h1>useEffect()</h1>
        <p>
          Or should it be called useSyncronization() or useLifecycle() ?
        </p>
        <p>
          For now just look at what it does, then you can understand how it works.
        </p>

        <UseEffectDemo />

        <h2>useEffect()</h2>
        <p>
          The useEffect hook accepts two parameters: a callback function and a "dependency list."
        </p>
        <p>
          You should have two questions. When does this callback function execute? What is a dependency list?
        </p>
        <p>
          The callback function will execute whenever the component renders (or rerenders.)
          The first render will happen when the component is initialized. Subsequent rerenders
          will occur when any state values are updated. <b>() => setFoo(bar)</b>
        </p>
        <p>
          The dependency list is an optional parameter that gives you more control
          over when the callback function will execute. If you provide this dependency list
          as an array of state values (or other identifiers in your function component), then
          the callback function will only execute when the component rerenders due to
          those values changing.
        </p>
        <h2>Use Cases</h2>
        <p>
          The definition of what the useEffect hook is should give you a hint
          for when and how to use it. The use effect hook accepts a callback function
          that will execute whenever the component renders or rerenders.
        </p>
        <p>
          So we can say that useEffect should be used when you want to execute some code
          after a state value is done updating.
        </p>
        <p>
          However, useEffect can be used for much more than that.
        </p>
        <h3>State Changes</h3>
        <p>
          By defining a dependency list that contains a state value, your useEffect callback will execute 'on update'
        </p>
        <p>
          Example: when this count updates, two toasts will pop on the screen.
          One after the setCount() function is invoked. The other in a useEffect
          hook after the state actually updates.
        </p>
        <ClickCounter />
        <p>
          * Keep in mind, the callback function will execute on the first render,
          so just use an if statment that checks <b>if (count > 0)</b>
        </p>

        <h3>Lifecycle Hooks</h3>
        <p>
          We saw useEffect working with a state value update and we called that 'on update.'
          In general, the lifecycle of a component follows these steps:
        </p>
        <ol>
          <li>on initialization (born)</li>
          <li>on update (repeatable)</li>
          <li>on destroy (dies)</li>
        </ol>
        <p>
          If we define a dependency list as an empty array <b>[ ]</b>, then
          our callback function will only execute when the component renders for
          the first time, and then no state value changes will cause the function
          to execute again.
        </p>
        <p>
        (empty array -> no values -> no changes)
        </p>
        <p>
          In short, an empty dependency list (empty array) really means 'onInit'
        </p>
        <p style={{ textAlign: 'left', paddingLeft: '3rem' }}><b>
        useEffect(() => {'{'}<br />
          console.log("Hello world!");<br />
          {'}'}, []);
        </b></p>
      </div>
    </ToastProvider>
  );
}

export default App;
