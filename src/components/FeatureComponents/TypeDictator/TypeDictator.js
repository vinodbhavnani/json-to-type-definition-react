import React, { useState, useEffect } from 'react';
import './TypeDictator.css'

const TypeDictator = ({ value }) => {
    const [typeDef, setTypeDef] = useState();

    const checkAndFormType = (obj) => {
        let result = `type TypeDef = { `;
        Object.keys(obj).forEach((key) => {
            const type = typeof obj[key];
            if (Array.isArray(obj[key])) {
                let type = obj[key].length ? typeof obj[key][0] : '';
                obj[key].forEach((val) => {
                    if (typeof val !== type) type = 'any'
                });
                result += `${key}: ${type}[]; `;
            } else if (['string', 'number', 'boolean', 'object'].includes(type)) {
                result += `${key}: ${type}; `
            }
        });
        result += ' }';
        return result;
    }

    useEffect(() => {       
        setTypeDef(checkAndFormType(value));
    }, [value])
    

    return <div className='DictatorContainer'>
        {typeDef}
    </div>
};

export default TypeDictator;
