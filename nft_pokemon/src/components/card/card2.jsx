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

const [infoPoke, setInfoPoke] = useState([]);
const [imgPoke, setImgPoke] = useState();
const [typesPoke, setTypesPoke] = useState([]);
useEffect(() => {
    async function GetData() {
        setLoading(true)
        await axios
        .get(url)
        .then((res) => {setInfoPoke(res.data); setImgPoke(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`)})
        .catch (error => {console.log(error); setLoading(true);})
        .finally(() => {setLoading(false)})
    }
    GetData()
    setTypesPoke(infoPoke.types)
}, [url]);


/* -------------------------------------------------- */
console.log(infoPoke.types) //No logro sacar la data de este array al igual que el de stats
                     
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
                        <Title estilo={"titulo"}>{infoPoke.name} </Title>
                        <Title estilo={"number"}>#{pokeNum}</Title>
                    </Title>
                    <CenterSection>
                        <CenterSection estilo={"arrowLeft"}> <span onClick={Backward}><AiOutlineLeft/></span></CenterSection>   
                        <CenterSection estilo={"imagen"}> <img src={imgPoke}   width={"200px"}  alt={"pokemon"} /> </CenterSection>
                       <CenterSection estilo={"arrowRight"}><span onClick={Foward}><AiOutlineRight/></span></CenterSection>
                    </CenterSection>
                    <CardInfo>
                        <TypeCointaner >
                        {/*    {
                               infoPoke.types.map((item, i) => (
                                    <Type key={i}>{item.type.name}</Type>
                                    ))
                            }  */}
                        </TypeCointaner>
                        <CartTitles> About </CartTitles>
                        {/* .................................................................... */}
                        <Container>
                            <About>
                                <Info> <Iconos src={weightIcon}/> <div>{infoPoke.wt} kg</div> </Info>
                                <Info estilo={"characteristic"}>Weight</Info>
                             </About>
                            <About estilo={"centerDiv"}>
                                <Info><Iconos src={rulerIcon}/> <div>{infoPoke.ht} mts</div> </Info>
                                <Info estilo={"characteristic"}>Heigth</Info>
                            </About>
                            <About> 
                             {/*    {
                                    infoPoke.abilities.map((AbilyPoke, i) =>(
                                        <Info key={i}>{AbilyPoke.ability.name}</Info>
                                    ))
                                } */}
                                <Info estilo={"characteristic"}>Moves</Info>
                            </About>
                        </Container>
                    </CardInfo>
                </Card>
            </Cuerpo>    

            </>
          }
        </Fragment>
    )
}

export default PokemonCard2;