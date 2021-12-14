import React, { useState } from 'react';

function SubmitUrl() {
    let [urlVal, setUrlVal] = useState('');

    const handleUrlInput = (e) => {
        let inputVal = e.target.value;
        setUrlVal(inputVal);
    }

    return (
        <input type="url" placeholder="Enter URL here" onChange={handleUrlInput} />
    )
}