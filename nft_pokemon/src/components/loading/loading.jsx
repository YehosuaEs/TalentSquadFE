import { Fragment } from "react";
import pokemonballW from "../../icons/pokemonballW.png"
import { Cuerpo, Pokeball, Wireframe } from "./loading_styles";



function Loading () {

    return (
        <Fragment>
            <Cuerpo>
                <Wireframe>
                    <Pokeball src={pokemonballW}/>

                </Wireframe>
            </Cuerpo>
        </Fragment>
    )
}

export default Loading;