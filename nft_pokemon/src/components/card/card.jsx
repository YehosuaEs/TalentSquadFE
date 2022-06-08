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
const [data, setData] = useState([]);
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
//let url2= `https://pokeapi.co/api/v2/pokemon/`;

useEffect(() => {
    const PokemonData = async () => {
        setLoading(true)
        await axios.get(url)
        .then(response => {setData(response.data.name);})
        .catch (error => {console.log(error); setLoading(true);})
        .finally(() => {setLoading(false)})
    }
    PokemonData();
}, [url]) 

    return(
        <Fragment>{
            loading
            ? <Loading/> 
            : <>
              <Cuerpo>
                <Card>
                    <Title>
                        <Title estilo={"titulo"}>{data} </Title>
                        <Title estilo={"number"}>#{pokeNum}</Title>
                    </Title>
                    <CenterSection>
                        <CenterSection estilo={"arrowLeft"}> <span onClick={Backward}><AiOutlineLeft/></span></CenterSection>   
                        <CenterSection estilo={"imagen"}><img src={pokemonLoading} alt="pokemon" /> </CenterSection>
                        <CenterSection estilo={"arrowRight"}><span onClick={Foward}><AiOutlineRight/></span></CenterSection>
                    </CenterSection>
                </Card>
            </Cuerpo>   
             <h1>{data}</h1>
            
            </>
          }
        </Fragment>
    )
}

export default PokemonCard;