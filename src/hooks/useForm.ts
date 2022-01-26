import { useState } from 'react';

export const useForm = <T>(initialValues: T) => {

    const [ formValues, setFormValues ] = useState(initialValues);

    const onChange = (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setFormValues(initialValues);
    };

    return {
        resetForm,
        onChange,
        formValues,
        setFormValues,
        initialValues
    };

};


