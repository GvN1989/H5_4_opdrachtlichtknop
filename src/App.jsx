import React, {useState} from 'react';
import './App.css';

function App() {

    const [ lightSwitch , toggleLightswitch] = useState(false);
    console.log(lightSwitch)

    return (
        <main className={lightSwitch===true ? 'on' : "off"}>
            <section>
                <div className="dot"></div>
                <button type="button" onClick={() => toggleLightswitch(!lightSwitch)}>
                    {lightSwitch === false ? 'Turn on' : 'Turn off'}
                </button>
            </section>
        </main>
    );
}

export default App;
