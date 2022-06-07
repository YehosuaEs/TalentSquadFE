import { Fragment } from "react";
import { Cuerpo, Title, CenterSection, Card, CardInfo, Type, TypeCointaner, CartTitles, Text, StatsContainer, Iconos, Container, About, Info, Skills, SkillsNum, SkillsBar, StatsDetails, Barra, Progress } from "./loading_styles";
import { AiOutlineArrowLeft, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import weightIcon from "../../icons/weightIcon.png"
import rulerIcon from "../../icons/rulerIcon.png"
import pokemonLoading from "../../icons/pokemonLoading.png"



function Loading () {

    return (
        <Fragment>
            <Cuerpo>
                <Card>
                    <Title>
                        <Title estilo={"icono"}><AiOutlineArrowLeft/></Title>
                        <Title estilo={"titulo"}>Pokémon Name </Title>
                        <Title estilo={"number"}>#999</Title>
                    </Title>
                    <CenterSection>
                        <CenterSection estilo={"arrowLeft"}><AiOutlineLeft/></CenterSection>   
                        <CenterSection estilo={"imagen"}><img src={pokemonLoading} alt="pokemon" /> </CenterSection>
                        <CenterSection estilo={"arrowRight"}><AiOutlineRight/></CenterSection>
                    </CenterSection>
                    <CardInfo>
                        <TypeCointaner>
                            <Type>Type</Type>
                            <Type>Type</Type>
                        </TypeCointaner>
                        <CartTitles> About </CartTitles>
                        {/* .................................................................... */}
                        <Container>
                            <About>
                                <Info> <Iconos src={weightIcon}/> <div>9,9 kg</div> </Info>
                                <Info estilo={"characteristic"}>Weight</Info>
                             </About>
                            <About estilo={"centerDiv"}>
                                <Info><Iconos src={rulerIcon}/> <div>9,9 kg</div> </Info>
                                <Info estilo={"characteristic"}>Heigth</Info>
                            </About>
                            <About> 
                                <Info>Ability 1 <br />Ability 2</Info>
                                <Info estilo={"characteristic"}>Moves</Info>
                            </About>
                        </Container>
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Molestiae ea nobis soluta cupiditate illo aliquid, ipsam pariatur.
                        </Text>
                        <CartTitles> Base Stats </CartTitles>
                        <StatsContainer>
                            <StatsDetails>
                                <Skills>HP</Skills>
                                <SkillsNum >045</SkillsNum>
                                <SkillsBar><Progress value="45" max="100" width={"45%"}/></SkillsBar>
                            </StatsDetails>
                            <StatsDetails>
                                <Skills>ATK</Skills>
                                <SkillsNum >049</SkillsNum>
                                <SkillsBar><Progress value="49" max="100" width={"49%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>DEF</Skills>
                                <SkillsNum >049</SkillsNum>
                                <SkillsBar><Progress value="49" max="100" width={"49%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>SATK</Skills>
                                <SkillsNum >049</SkillsNum>
                                <SkillsBar><Progress value="65" max="100" width={"60%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>SDEF</Skills>
                                <SkillsNum >049</SkillsNum>
                                <SkillsBar><Progress value="65" max="100" width={"65%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>SPD</Skills>
                                <SkillsNum >049</SkillsNum>
                                <SkillsBar><Progress value="45" max="100" width={"45%"}/></SkillsBar>
                            </StatsDetails> 
                        </StatsContainer>
                    </CardInfo>
                </Card>
            </Cuerpo>
        </Fragment>
    )
}

export default Loading;