import {useState} from 'react';

export const useTabs = initialValues => {
    const [values, setValues] = useState(initialValues);
    
    return [
        values,
        e => {
            setValues({
                oldId: values.newId,
                newId: e.target.name}
            );
        }
    ]
}