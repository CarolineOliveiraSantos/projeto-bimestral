import React from 'react';
import { Link } from 'react-router-dom';


import { Container } from './styles';

export default function Login() {
    return (
        <Container>
            <section>
                <form>
                    <div>Login</div>
                    <label htmlFor="">Email:</label><input type="text" />
                    <label htmlFor="">Senha:</label><input type="password" />
                    <button type="submit">Entrar</button>
                </form>
                <Link className="link" to="/recupera">Esqueceu a senha?</Link>
                <Link className="link" to="/cadastro">Criar conta</Link>
            </section>
        </Container>
    );
}


