import React, { useState } from 'react';
import './Login.css';
import api from '../services/api';

import logo from '../assets/logo_2.svg';

export default function Login({ history }) {
    const [username, setUserName] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await api.post('/devs', {
            username: username
        });

        const { _id } = response.data;

        history.push(`/devs/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tinder"/>
                <input
                    placeholder="Digite seu usuário do GitHUB"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}