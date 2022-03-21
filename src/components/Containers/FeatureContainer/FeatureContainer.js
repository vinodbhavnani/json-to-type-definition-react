import React, { useState, useEffect } from 'react';
import Editor from '../../Editor';
import TypeDictator from '../../TypeDictator';
import './FeatureContainer.css';

const FeatureContainer = () => {
    const [value, setValue] = useState('');
    const [js, setJS] = useState({});
    
    const handleChange = (value) => {
        setValue(value);
    }

    useEffect(() => {
        try {
            setJS(JSON.parse(value));
        }
        catch(err) {
            console.error(err);
        }
    }, [value])

    return <div className="FeatureContainer">
        <Editor value={value} setValue={handleChange} />
        <TypeDictator value={js} />
    </div>
};

export default FeatureContainer;
