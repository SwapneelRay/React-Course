import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import './Examples.css'
import TabButton from "../../components/TabButton/TabButton.jsx";
import Section from "../Section.jsx";
export default function Examples(){
    const [val, setVal] = useState("");
  // let tabContent = <p>please select a topic</p>;
  // if(val){
  //   <div id="tab-content">
  //             <h3>{EXAMPLES[val].title}</h3>
  //             <p>{EXAMPLES[val].description}</p>
  //             <pre>
  //               <code>{EXAMPLES[val].code}</code>
  //             </pre>
  //   </div>
  // }
  function selectHandler(selected) {
    setVal(selected);
    //console.log(val)
  }
    return(
        <Section title="Examples" id="examples">
          <menu>
            <TabButton
              isSelected={val === "components" ? "active" : undefined}
              onClick={() => selectHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={val === "JSX" ? "active" : undefined}
              onClick={() => selectHandler("JSX")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={val === "Props" ? "active" : undefined}
              onClick={() => selectHandler("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={val === "State" ? "active" : undefined}
              onClick={() => selectHandler("State")}
            >
              State
            </TabButton>
          </menu>
          {!val ? (
            <p>please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[val].title}</h3>
              <p>{EXAMPLES[val].description}</p>
              <pre>
                <code>{EXAMPLES[val].code}</code>
              </pre>
            </div>
          )}
          {/* {tabContent} */}
        </Section>
    );
}