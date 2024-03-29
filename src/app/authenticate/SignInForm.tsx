'use client'

import { useState, ChangeEvent, FormEvent } from 'react';

type FormState = {
    signInUsername: string;
    signInPassword: string;
};

export default function SignInForm() {
    
    const [form, setForm] = useState<FormState>({
        signInUsername: '',
        signInPassword: '',
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setForm({
            signInUsername: '',
            signInPassword: '',
        });
        alert(form.signInUsername + ' ' + form.signInPassword)
    };

    return(
        <div>
            Sign-In
            <form onSubmit={handleSubmit}>
                <div>
                   <label htmlFor='signInUsername'>Username</label>
                   <input id='signInUsername' type='text' value={form.signInUsername} onChange={handleChange} required={true}></input>
                </div>
                <div>
                    <label htmlFor='signInPassword'>Password</label>
                    <input id='signInPassword' type='password' value={form.signInPassword} onChange={handleChange} required={true}></input>
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};