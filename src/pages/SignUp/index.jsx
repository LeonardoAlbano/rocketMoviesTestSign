import { Container, Form, Background } from './styles';
import { Input } from "../../components/Input";
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import { Button } from '../../components/Button'

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>
                    RocketMovies
                </h1>

                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={ FiLogIn}
                />

                <Input 
                    placeholder="E-mail"
                    type="email"
                    icon={ FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={ FiLock}
                />

                <Button title="Cadastrar" />

                <a href="#">
                    Voltar para o Login
                </a>          

            </Form>

            <Background />
        </Container>
    )
}