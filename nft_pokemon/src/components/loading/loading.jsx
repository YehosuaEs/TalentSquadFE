import { Fragment } from "react";
import { Cuerpo, Title, CenterSection, Card, CardInfo, Type, TypeCointaner, CartTitles, Text, StatsContainer, Iconos, Container, About, Info, Skills, SkillsNum, StatsDetails, DivProgress, DivStastDetailsProgress } from "../../styles/card_styles";
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
                             </About>
                            <About estilo={"centerDiv"}>
                                <Info><Iconos src={rulerIcon}/> <div>9,9 kg</div> </Info>
                            </About>
                            <About> 
                                <Info estilo={"ability"}>Ability </Info>
                                <Info estilo={"ability"}>Ability </Info>
                            </About>
                        </Container>
                        <Container estilo="HtWtMo">
                            <About>
                                <Info estilo={"characteristic"}>Weight</Info>
                            </About>
                            <About>
                                <Info estilo={"characteristic"}>Heigth</Info>
                            </About>
                            <About>
                                <Info estilo={"characteristic"}>Moves</Info>
                            </About>
                        </Container>    
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Molestiae ea nobis soluta cupiditate illo aliquid, ipsam pariatur.
                        </Text>
                        <CartTitles> Base Stats </CartTitles>
                        <StatsContainer>
                                <div>
                                    <Skills>HP</Skills>
                                    <Skills>ATK</Skills>
                                    <Skills>DEF</Skills>
                                    <Skills>SATK</Skills>
                                    <Skills>SDEF</Skills>
                                    <Skills>SPD</Skills>
                                </div>
                                <div>
                                    <StatsDetails>
                                        <SkillsNum >045</SkillsNum>
                                        <SkillsNum >049</SkillsNum>
                                        <SkillsNum >049</SkillsNum>
                                        <SkillsNum >065</SkillsNum>
                                        <SkillsNum >065</SkillsNum>
                                        <SkillsNum >045</SkillsNum>     
                                    </StatsDetails>
                                </div>
                                <DivStastDetailsProgress>
                                    <StatsDetails>
                                        <DivProgress><progress value={"49"} max="200"></progress> </DivProgress>
                                        <DivProgress><progress value={"45"} max="200"> </progress> </DivProgress>
                                        <DivProgress><progress value={"49"} max="200"></progress> </DivProgress>
                                        <DivProgress><progress value={"65"} max="200"></progress> </DivProgress>
                                        <DivProgress><progress value={"65"} max="200"></progress> </DivProgress>
                                        <DivProgress><progress value={"45"} max="200"></progress>   </DivProgress>
                                    </StatsDetails>
                                </DivStastDetailsProgress>
                            </StatsContainer>
                    </CardInfo>
                </Card>
            </Cuerpo>
        </Fragment>
    )
}

export default Loading;