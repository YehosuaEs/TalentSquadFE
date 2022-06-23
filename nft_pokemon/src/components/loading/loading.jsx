import { Fragment } from "react";
import { Cuerpo, Title, CenterSection, Card, CardInfo, Type, TypeCointaner, CartTitles, Text, StatsContainer, Iconos, Container, About, Info, Skills, SkillsNum, StatsDetails, DivProgress } from "../../styles/loading_styles";
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
                        {/* <StatsContainer>
                            <StatsDetails>
                                <Skills>HP</Skills>
                                <SkillsNum >045</SkillsNum>
                                <SkillsBar><Progress  value="45" max="300"  width={"45%"}/></SkillsBar>
                            </StatsDetails>
                            <StatsDetails>
                                <Skills>ATK</Skills>
                                <SkillsNum >049</SkillsNum>
                                <SkillsBar><Progress value="49" max="300" width={"49%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>DEF</Skills>
                                <SkillsNum >049</SkillsNum>
                                <SkillsBar><Progress value="49" max="300" width={"49%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>SATK</Skills>
                                <SkillsNum >049</SkillsNum>
                                <SkillsBar><Progress value="65" max="300" width={"60%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>SDEF</Skills>
                                <SkillsNum >049</SkillsNum>
                                <SkillsBar><Progress value="65" max="300" width={"65%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>SPD</Skills>
                                <SkillsNum >049</SkillsNum>
                                <SkillsBar><Progress value="45" max="300" width={"45%"}/></SkillsBar>
                            </StatsDetails> 
                        </StatsContainer> */}
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
                                        <DivProgress><progress value={"45"} max="200"> </progress> </DivProgress>
                                    </StatsDetails>
                                    <StatsDetails>
                                        <SkillsNum >049</SkillsNum>
                                        <DivProgress><progress value={"49"} max="200"></progress> </DivProgress>
                                    </StatsDetails>
                                    <StatsDetails>
                                        <SkillsNum >049</SkillsNum>
                                        <DivProgress><progress value={"49"} max="200"></progress> </DivProgress>
                                    </StatsDetails>
                                    <StatsDetails>
                                        <SkillsNum >065</SkillsNum>
                                        <DivProgress><progress value={"65"} max="200"></progress> </DivProgress>
                                    </StatsDetails>
                                    <StatsDetails>
                                        <SkillsNum >065</SkillsNum>
                                        <DivProgress><progress value={"65"} max="200"></progress> </DivProgress>
                                    </StatsDetails>
                                    <StatsDetails>
                                        <SkillsNum >045</SkillsNum>     
                                        <DivProgress><progress value={"45"} max="200"></progress>   </DivProgress>
                                    </StatsDetails>
                                </div>

                            </StatsContainer>
                    </CardInfo>
                </Card>
            </Cuerpo>
        </Fragment>
    )
}

export default Loading;