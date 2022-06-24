import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/loading";
import { Cuerpo, Title, CenterSection, Card, CardInfo, Type, TypeCointaner, CartTitles, Text, StatsContainer, Iconos, Container, About, Info, Skills, SkillsNum, StatsDetails, DivProgress } from "../../styles/loading_styles";
import { AiOutlineArrowLeft, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import weightIcon from "../../icons/weightIcon.png"
import rulerIcon from "../../icons/rulerIcon.png"
import addZerosStart from "./addZeros";

function PokemonCard2() {
    const [loading, setLoading] = useState(false);
    const [num, setNum] = useState(1);
    const [pokeNum, setPokeNum] = useState (1);
    const [infoPoke, setInfoPoke] = useState([]);
    const [imgPoke, setImgPoke] = useState();
    const [pokeTypes, setPokeTypes] = useState([]);
    const [pokeAbilities, setPokeAbilities] = useState([]);
    const [urlText, setUrlText] = useState();
    const [pokeStats, setPokeStats] = useState([]);
    const [pokeText, setPokeText] = useState([]);
    /* This mute code it to show the images or the pokemon from 1 to 1126
    but the text description has an order until 880 pokemon later is not organize the list. */
    /* const Foward = () => { 
        if(num === 10228) {setNum(1); setPokeNum(1) } 
        else if (num === 898) {setNum(10001)} 
        else {setNum(num +1); setPokeNum(pokeNum + 1)}
    };
    const Backward = () => {
        if (num === 1){setNum(10228); setPokeNum(1126)} 
        else if (num === 10001) {setNum(898)}
        else {setNum(num -1); setPokeNum(pokeNum - 1)}
    }; */
    const Foward = () => { 
        if(num === 880) {setNum(1); setPokeNum(1)}
        else {setNum(num +1); setPokeNum(pokeNum + 1)}
    };
    const Backward = () => {
        if (num === 1){setNum(880); setPokeNum(880)}
        else {setNum(num -1); setPokeNum(pokeNum - 1)} 
    };
    let url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    useEffect(() => {
        async function GetData() {
            setLoading(false)
            await axios
            .get(url)
            .then((res) => {
                setInfoPoke(res.data); 
                setImgPoke(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`);
                setPokeTypes(res.data.types);
                setPokeAbilities(res.data.abilities);
                setUrlText(res.data.species.url)
                const pokemonStats = {
                    hp: res.data.stats[0].base_stat,
                    atk: res.data.stats[1].base_stat,
                    def: res.data.stats[2].base_stat,
                    spAtk: res.data.stats[3].base_stat,
                    spDef: res.data.stats[4].base_stat,
                    spd: res.data.stats[5].base_stat
                } 
                setPokeStats(pokemonStats)
                setLoading(true)
            })
            .catch (error => {console.log(error); setLoading(false);})
            .finally(() => {setLoading(false)})
        }
        GetData()
    }, [url, num]);

    useEffect(() => {
        async function GetDataTx() {
            setLoading(false)
            await axios
            .get(`https://pokeapi.co/api/v2/pokemon-species/${num}`)
            .then((res) => {setPokeText(res.data.flavor_text_entries); setLoading(true)})
            .catch (error => {console.log(error); setLoading(false);})
            .finally(() => {setLoading(false)})
        }
        GetDataTx()
        TextPokemon(); 
    }, [urlText, num]);

    let [textoPokemon, setTextoPokemon] = useState();
    function TextPokemon () {
        pokeText.filter((item) => { 
            if (item.language.name === "en"){
            setTextoPokemon(item.flavor_text);
            }
                
        })
    };

    /* -------------------------------------------------- */                   
    return(
        <Fragment>
            {
            loading
            ?   <Loading/> 
            :   <Cuerpo>
                    <Card estilo={"cardNotLoading"}>
                        <Title>
                            <Title estilo={"icono"}><AiOutlineArrowLeft/></Title>
                            <Title estilo={"titulo"}>{infoPoke.name} </Title>
                            <Title estilo={"number"}>#{addZerosStart(pokeNum, 3)}</Title>
                        </Title>
                        <CenterSection>
                            <CenterSection estilo={"arrowLeft"}> <span onClick={Backward}><AiOutlineLeft/></span></CenterSection>   
                            <CenterSection estilo={"imagen"}> <img src={imgPoke} width={"200px"}  alt={"pokemon"} /> </CenterSection>
                            <CenterSection estilo={"arrowRight"}><span onClick={Foward}><AiOutlineRight/></span></CenterSection>
                        </CenterSection>
                        <CardInfo>
                            <TypeCointaner >
                                {
                                    pokeTypes.map((item, i) => (<Type key={i}>{item.type.name}</Type>))
                                }  
                            </TypeCointaner>
                            <CartTitles> About </CartTitles>
                            {/* .................................................................... */}
                            <Container>
                                <About>
                                    <Info> <Iconos src={weightIcon}/> <div>{infoPoke.weight} kg</div> </Info>
                                </About>
                                <About estilo={"centerDiv"}>
                                    <Info><Iconos src={rulerIcon}/> <div>{infoPoke.height} mts</div> </Info>
                                </About>
                                <About> 
                                    {
                                        pokeAbilities.map((AbilyPoke, i) =>(<Info estilo={"ability"}key={i}>{AbilyPoke.ability.name}</Info>))
                                    } 
                                </About>
                            </Container>
                            <Container estilo={"HtWtMo"}>
                                <About>     <Info estilo={"characteristic"}>Weight</Info>       </About>
                                <About>     <Info estilo={"characteristic"}>Heigth</Info>       </About>
                                <About>     <Info estilo={"characteristic"}>Moves</Info>        </About>
                            </Container>
                            <Text>{textoPokemon} </Text>
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
                                        <SkillsNum >{addZerosStart(pokeStats.hp, 3)}</SkillsNum>
                                        <DivProgress><progress value={pokeStats.hp} max="200"> </progress> </DivProgress>
                                    </StatsDetails>
                                    <StatsDetails>
                                        <SkillsNum >{addZerosStart(pokeStats.atk, 3)}</SkillsNum>
                                        <DivProgress><progress value={pokeStats.atk} max="200"></progress> </DivProgress>
                                    </StatsDetails>
                                    <StatsDetails>
                                        <SkillsNum >{addZerosStart(pokeStats.def, 3)}</SkillsNum>
                                        <DivProgress><progress value={pokeStats.def} max="200"></progress> </DivProgress>
                                    </StatsDetails>
                                    <StatsDetails>
                                        <SkillsNum >{addZerosStart(pokeStats.spAtk, 3)}</SkillsNum>
                                        <DivProgress><progress value={pokeStats.spAtk} max="200"></progress> </DivProgress>
                                    </StatsDetails>
                                    <StatsDetails>
                                        <SkillsNum >{addZerosStart(pokeStats.spDef, 3)}</SkillsNum>
                                        <DivProgress><progress value={pokeStats.spDef} max="200"></progress> </DivProgress>
                                    </StatsDetails>
                                    <StatsDetails>
                                        <SkillsNum >{addZerosStart(pokeStats.spd, 3)}</SkillsNum>     
                                        <DivProgress><progress value={pokeStats.spd} max="200"></progress>   </DivProgress>
                                    </StatsDetails>
                                </div>

                            </StatsContainer>
                        </CardInfo>
                    </Card>
                </Cuerpo>    
            }
        </Fragment>
    )
}

export default PokemonCard2;