import { Container } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";


 export function Details() {
    return(
        <Container>
            <Header />

            <Section title="Marcadores">
                <Tag title="express" />
                <Tag title="express" />
            </Section>


            <Button title="Voltar"/>

        </Container>

    )
 };