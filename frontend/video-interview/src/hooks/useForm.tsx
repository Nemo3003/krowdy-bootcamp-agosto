import {useState} from 'react';

export const useForm = (initialValue = {})=>{
    const [formState, setFormState] = useState(initialValue);

    const onInputChange = ({target}: any) =>{
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const onResetForm = ()=>{
        setFormState(initialValue);
    };
    return{
        formState,
        onInputChange,
        onResetForm,
    };

};