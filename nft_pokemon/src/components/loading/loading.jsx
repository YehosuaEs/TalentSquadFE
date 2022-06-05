import { Fragment } from "react";
import { Cuerpo, Title, CenterSection, Card, CardInfo, Type, TypeCointaner } from "./loading_styles";
import { AiOutlineArrowLeft, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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
                    </CardInfo>
                </Card>
            </Cuerpo>
        </Fragment>
    )
}

export default Loading;