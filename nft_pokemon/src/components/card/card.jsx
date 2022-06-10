import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/loading";
import { Cuerpo, Title, CenterSection, Card, CardInfo, Type, TypeCointaner, CartTitles, Text, StatsContainer, Iconos, Container, About, Info, Skills, SkillsNum, SkillsBar, StatsDetails, Progress } from "../../styles/loading_styles";
import { AiOutlineArrowLeft, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import weightIcon from "../../icons/weightIcon.png"
import rulerIcon from "../../icons/rulerIcon.png"
import pokemonLoading from"../../icons/pokemonLoading.png"


function PokemonCard (){
const [loading, setLoading] = useState(false);
const [dataPoke, setDataPoke] = useState([]);
const [num, setNum] = useState(1);//::::::://
const [pokeNum, setPokeNum] = useState (1)

const Foward = () => { 
    if(num === 10228) {setNum(1); setPokeNum(1) } 
    else if (num === 898) {setNum(10001)} 
    else {setNum(num +1); setPokeNum(pokeNum + 1)}
};
const Backward = () => {
    if (num === 1){setNum(10228); setPokeNum(1126)} 
    else if (num === 10001) {setNum(898)}
    else {setNum(num -1); setPokeNum(pokeNum - 1)}
};

let url = `https://pokeapi.co/api/v2/pokemon/${num}`;
//let url2 = `https://pokeapi.co/api/v2/pokemon/`;

useEffect(() => {
    const PokemonData = async () => {
        setLoading(true)
        await axios.get(url)
        //.then(response => {setData(response.data); console.log(response.data)})
        .then(response => {const data = response.data;
            //const pokemonpaka = data;
           /*  const pokemonpaka = {
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`,
                names: data.name,
                type1: data.types[0].type.name,
                type2: data.types[1].type.name, 
                wt: data.weight,
                ht: data.height,
                ability1: data.abilities[0].ability.name,
                ability2: data.abilities[1].ability.name,
                hp: data.stats[0].base_stat,
                atk: data.stats[1].base_stat,
                def: data.stats[2].base_stat,
                spAtk: data.stats[3].base_stat,
                spDef: data.stats[4].base_stat,
                spd: data.stats[5].base_stat
            } */
           //setDataPoke(pokemonpaka)
           setDataPoke(data)
        })
        .catch (error => {console.log(error); setLoading(true);})
        .finally(() => {setLoading(false)})
    }
    PokemonData();
  
}, [url])  
//console.log(dataPoke)
//console.log(data)
/* -------------------------------------------------- */

    return(
        <Fragment>
            {
            loading
            ? <Loading/> 
            : <>
               <Cuerpo>
                <Card estilo={"cardNotLoading"}>
                    <Title>
                        <Title estilo={"icono"}><AiOutlineArrowLeft/></Title>
                        <Title estilo={"titulo"}>{dataPoke.names} </Title>
                        <Title estilo={"number"}>#{pokeNum}</Title>
                    </Title>
                    <CenterSection>
                        <CenterSection estilo={"arrowLeft"}> <span onClick={Backward}><AiOutlineLeft/></span></CenterSection>   
                        <CenterSection estilo={"imagen"}><img src={dataPoke.img}   width={"200px"}  alt="pokemon" /> </CenterSection>
                        <CenterSection estilo={"arrowRight"}><span onClick={Foward}><AiOutlineRight/></span></CenterSection>
                    </CenterSection>
                    <CardInfo>
                        <TypeCointaner>
                             <Type>{dataPoke.type1}</Type>
                            <Type>{dataPoke.type2}</Type>
                            {/* <Type disabled>type</Type>
                            <Type disabled>type</Type> */}
                        </TypeCointaner>
                        <CartTitles> About </CartTitles>
                        {/* .................................................................... */}
                        <Container>
                            <About>
                                <Info> <Iconos src={weightIcon}/> <div>{dataPoke.wt} kg</div> </Info>
                                <Info estilo={"characteristic"}>Weight</Info>
                             </About>
                            <About estilo={"centerDiv"}>
                                <Info><Iconos src={rulerIcon}/> <div>{dataPoke.ht} mts</div> </Info>
                                <Info estilo={"characteristic"}>Heigth</Info>
                            </About>
                            <About> 
                                <Info>{dataPoke.ability1} <br />{dataPoke.ability2}</Info>
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
                                <SkillsNum >{dataPoke.hp}</SkillsNum>
                                <SkillsBar><Progress  value="45" max="300"  width={"45%"}/></SkillsBar>
                            </StatsDetails>
                            <StatsDetails>
                                <Skills>ATK</Skills>
                                <SkillsNum >{dataPoke.atk}</SkillsNum>
                                <SkillsBar><Progress value="49" max="300" width={"49%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>DEF</Skills>
                                <SkillsNum >{dataPoke.def}</SkillsNum>
                                <SkillsBar><Progress value="49" max="300" width={"49%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>SATK</Skills>
                                <SkillsNum >{dataPoke.spAtk}</SkillsNum>
                                <SkillsBar><Progress value="65" max="300" width={"60%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>SDEF</Skills>
                                <SkillsNum >{dataPoke.spDef}</SkillsNum>
                                <SkillsBar><Progress value="65" max="300" width={"65%"}/></SkillsBar>
                            </StatsDetails> 
                            <StatsDetails>
                                <Skills>SPD</Skills>
                                {/* <SkillsNum >{dataPoke.spd}</SkillsNum> */}
                                <SkillsNum >{dataPoke.spd}</SkillsNum>
                                <SkillsBar><Progress value="45" max="300" width={"45%"}/></SkillsBar>
                            </StatsDetails> 
                        </StatsContainer>
                    </CardInfo>
                </Card>
            </Cuerpo>    

            </>
          }
        </Fragment>
    )
}

export default PokemonCard;