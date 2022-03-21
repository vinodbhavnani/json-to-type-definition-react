import React, { useState, useEffect } from 'react';
import './TypeDictator.css'

const TypeDictator = ({ value }) => {
    const [typeDef, setTypeDef] = useState()

    useEffect(() => {
        const obj = {};

        Object.keys(value).forEach((key) => {
            const type = typeof value[key];
            obj[key] = type;
        });
        setTypeDef(`const typeDef = ` + JSON.stringify(obj, null, 2))
    }, [value])
    

    return <div className='DictatorContainer'>
        {typeDef}
    </div>
};

export default TypeDictator;
