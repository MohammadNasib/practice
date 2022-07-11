import React, { useState } from 'react';
import unionNames from './data.json';

export default function Union({ upazilla }) {
    const unionArray = unionNames[upazilla];
    const [unionName, setUnionName] = useState();

    function setUnionFunc(e) {
        setUnionName(e.target.value);
    }

    console.log(`union name is : ${unionName}`);

    return (
        <>
            <label htmlFor='union'>Choose an union: </label>

            <select name='union' id='union' value={unionName} onChange={setUnionFunc}>
                {unionArray.map((union, id) => (
                    <option value={union} key={id}>
                        {union}
                    </option>
                ))}
            </select>
        </>
    );
}
