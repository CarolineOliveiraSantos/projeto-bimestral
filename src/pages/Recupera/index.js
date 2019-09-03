import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
export default function Recupera() {
    return (
        <Container>
            <section>
                <form>
                    <div>Recuperar senha</div>
                    <label htmlFor="">Email:</label><input type="text" />
                    <button type="submit">Enviar</button>
                </form>
                <Link className="link" to="/">Voltar ao Login</Link>
            </section>
        </Container>
    );
}