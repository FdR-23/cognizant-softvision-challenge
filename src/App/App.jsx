import React from "react";

import logo from "../assets/logo.png";

import styles from "./App.module.scss";
import CardSteps from "./components/CardSteps";
import useCandidateContext from "./hook/useCandidateContext";
function App() {
  const {state} = useCandidateContext();

  return (
    <main className={styles.main}>
      {/* <img alt="Softvision" src={logo} width={320} />
      <h1 className={styles.title}>Lets get this party started</h1> */}
      <p>a</p>

      <div className={styles.cartCandidate}>
        {state?.steps &&
          state.steps.map((element, index) => (
            <CardSteps key={index} candidate={element.candidate} name={element.value} />
          ))}
      </div>
    </main>
  );
}

export default App;
