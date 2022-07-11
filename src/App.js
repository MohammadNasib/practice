import { useState } from 'react';
import './app.css';
import Union from './Union';

function App() {
    const [upazillaName, setUpazillaName] = useState('cox');

    function onSelectFunc(e) {
        setUpazillaName(e.target.value);
    }
    console.log(`upazilla name is : ${upazillaName}`);

    return (
        <div className='App'>
            <input type='search' name='search' id='search' />

            <div className='upazillaBox'>
                <label htmlFor='upazilla'>Choose an upazilla: </label>

                <select name='upazilla' id='upazilla' value={upazillaName} onChange={onSelectFunc}>
                    <option value='cox'>cox</option>
                    <option value='ukiya'>ukiya</option>
                    <option value='ramo'>ramo</option>
                </select>
            </div>

            <Union upazilla={upazillaName} />
        </div>
    );
}

export default App;
