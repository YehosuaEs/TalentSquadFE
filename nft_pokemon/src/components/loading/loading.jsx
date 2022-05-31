import { Fragment } from "react";
import { Cuerpo, Wireframe, Title } from "./loading_styles";
import { AiOutlineArrowLeft, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";



function Loading () {

    return (
        <Fragment>
            <Cuerpo>
                <Wireframe>
                    <Title>
                        <Title><AiOutlineArrowLeft/></Title>
                        <Title>Pokémon Name</Title>
                        <Title estilo={"number"}>#999</Title>
                    </Title>
                </Wireframe>
            </Cuerpo>
        </Fragment>
    )
}

export default Loading;