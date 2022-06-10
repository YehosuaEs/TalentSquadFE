import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/loading";
import { Cuerpo, Title, CenterSection, Card, CardInfo, Type, TypeCointaner, CartTitles, Text, StatsContainer, Iconos, Container, About, Info, Skills, SkillsNum, SkillsBar, StatsDetails, Progress } from "../../styles/loading_styles";
import { AiOutlineArrowLeft, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import weightIcon from "../../icons/weightIcon.png"
import rulerIcon from "../../icons/rulerIcon.png"

function PokemonCard2 (){
    const [loading, setLoading] = useState(false);
    const [num, setNum] = useState(1);//::::::://
    const [pokeNum, setPokeNum] = useState (1)
    const [infoPoke, setInfoPoke] = useState([]);
    const [imgPoke, setImgPoke] = useState();
    const [pokeTypes, setPokeTypes] = useState([]);
    const [pokeAbilities, setPokeAbilities] = useState([]);
    const [urlText, setUrlText] = useState();
    const [pokeText, setPokeText] = useState([]);
    /* This mute text it to show the images or the pokemon from 1 to 1126
    but the text description has an order until 880 pokemon later if not organize the list. */
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
                setUrlText( res.data.species.url)
                setLoading(true)
            })
            .catch (error => {console.log(error); setLoading(false);})
            .finally(() => {setLoading(false)})
        }
        GetData()
    }, [url]);

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
        TextPokemon(); //I add this inside the useEffect to prevent infinite Loop.
    }, [urlText]);

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
                            <Title estilo={"number"}>#{pokeNum}</Title>
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
                            <Text>{textoPokemon} </Text>
                        </CardInfo>
                    </Card>
                </Cuerpo>    
            }
        </Fragment>
    )
}

export default PokemonCard2;