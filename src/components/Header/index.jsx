import { Container, Profile, Input } from './styles';

export function Header(){
    return(
        <Container>
            <Profile>
                <h2> RocketMovies </h2>

                <Input 
                    type='text'
                    placeholder='Pesquisar pelo título'
                />

                <div>
                    <strong>Leonardo Albano</strong>
                    <span>Sair</span>
                </div>
                <img src="https://github.com/leonardoalbano.png" 
                        alt="Foto Usuário" 
                />
            </Profile>
            
        </Container>
    );
};