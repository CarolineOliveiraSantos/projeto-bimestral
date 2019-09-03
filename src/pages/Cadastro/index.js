import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
export default function Cadastro() {
    return (
        <Container>
            <section>
                <form>
                    <div>Crie sua conta</div>
                    <label htmlFor="">Nome:</label><input type="text" />
                    <label htmlFor="">Email:</label><input type="text" />
                    <label htmlFor="">Senha:</label><input type="password" />
                    <button type="submit">Criar conta</button>
                </form>
                <Link className="link" to="/">Voltar ao Login</Link>
            </section>
        </Container>
    );
}
