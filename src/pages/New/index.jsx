import { Container, Form, Content } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Tag } from "../../components/Tag";
import { Section } from "../../components/Section"

import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button"

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Content>

                
                <Form>
                    <header>
                        <span>Voltar</span>
                        <h1>Novo Filme</h1>
                    </header>

                    <section>
                        <Input placeholder=" Título " />
                        <Input placeholder=" Sua nota (de 0 a 5) " />
                    </section>

                    <Textarea placeholder="Obeservações"/>
                </Form>

                <Section title="Marcadores">
                    <div className="TagMarcadores">
                       <NoteItem value="React"/>
                       <NoteItem isNew placeholder="Novo Marcador"/>

                    </div>
                </Section>

                <Section className="buttonSaves">
                    <Button className="buttonDelete" title="Excluir filme" />
                    <Button title="Salvar" />
                </Section>
                
                </Content>
            </main>
        </Container>
    )
}