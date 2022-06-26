
# Talent Squad - Frontend I 
<h3 align="center">Pokemon Card NFT</h3>
<p align="center">
Frontend project creating a card like a NFT using the pokeapi to generate them.
It is a challenge created by the platform 
  <a href="https://nuwe.io/challenge/talent-squad-frontend-i">NUWE</a>
  and <a href="https://barcelonadigitaltalent.com/"> Barcelona Digital Talent</a>
</p>

<h3 style="display: inline-block"> Built With </h3>

- [ReactJs](https://es.reactjs.org/)
- [StyleComponents](https://styled-components.com/)

<h3> Project Files </h3>

- [Pokemon Loader](https://www.figma.com/file/RcduUO3jwAgkfwtK588y3N/NFTPoke?node-id=513%3A33)
- [Styles Guide](https://www.figma.com/file/RcduUO3jwAgkfwtK588y3N/NFTPoke?node-id=346%3A16742)
- [PokeApi](https://pokeapi.co/)

<!-- USAGE -->

## Usage
Tthe first thing after open the browser and run the project is a card loading when it is already loaded the card show the first pokemon with the index 001. 
The colors of the card are depending the type of pokemon is. There are a couple of botton to move foward or bacwards the index of pokemons, there are 880 pokemons cards. 

**Here are the description of the task to develop.**

**The characteristics of the car should be:**
 
Display the PokeNFT in format
 - Deskop
 - Mobile

Every Card should have
- Pokemon image
- Pokemon Name
- Number in the Pokedex
- Type
- Basic Stats, weigth, height and characteristics
- Description is optional
- The color of the card can be generated randomply

<div align="center">
  <img width="180" alt="PokeCard Styled Guided" src="https://user-images.githubusercontent.com/93733677/175794994-6a0f8458-729f-4ec5-bf58-383bade6f65e.png">
</div >


I add a template that serves as a loader for when it has not yet been fully loaded. This loader could be generic but I use the one I found <a href="https://www.figma.com/file/RcduUO3jwAgkfwtK588y3N/NFTPoke?node-id=513%3A33">here</a>.
</br></br>
The styles guidelines to build the Pokemon Card NFT, it was following the attached in the "Project Files" that you can found at <a href="https://www.figma.com/file/RcduUO3jwAgkfwtK588y3N/NFTPoke?node-id=346%3A16742">Styles Guide</a>.


<!-- COMPONENTS -->
## Components

It is divided by two folder one with the loader and other with the card

### Loading

The loader component is the whole card with a small animation on it, until the card component is complete.

### Card 

The Card component has the info about the pokemon thats shows on it, it calls the API via Axios and the answer is store in differents `const` using `useState`.
It also have a couple of botons to go foward or backwards to display different Card Pokemon

### AddZeros
This function helps to add zeros before some section, like the pokeindex or the stats numers of the pokemon.

## Project Screen
<p align="center">
Here is a visual representation of how the project looks like.
</p>

https://user-images.githubusercontent.com/93733677/175791655-d5b364af-d0cb-4a4c-822d-93e5bccbc9b3.mov

<!-- INSTALL & SETUP -->

## Installation and Setup Instructions

<h3 style="display: inline-block"> Prerequisites </h3>
The project was created with <a href="https://es.reactjs.org/"> ReactJS </a>, so you need to have the basic knowladge about the ReactJS framework and <a href="https://es.reactjs.org/(https://docs.npmjs.com/about-npm)"> Node Packege Json </a>

<br />

<h3 style="display: inline-block"> Installation </h3>

1. Clone or donwload the project in your workspace.
```
$ git clone https://github.com/YehosuaEs/TalentSquadFE
```
2. Go to your directory and install dependencies.

```
$ npm install
```
3. Then start the project.

```
$ npm start
```

Open http://localhost:3000 to view it in your browser.

<!-- CODE QUALITY  -->

## Code Quality

I used [Sonarcloud](https://sonarcloud.io/) to verify the code, and check if there are some bugs or vulnerabilities on it.
<br />
This an screenshoot of the project

<div align="center">
  <img width="531" alt="Pantalla de SonarCloud del proyecto Talentsquad FE1" src="https://user-images.githubusercontent.com/93733677/175790094-561e0618-9294-40df-8656-debff2e5d796.png">
</div>
 
<!-- STACK -->

## Stack

<div align="center">
  <a href="https://es.reactjs.org/">
    <img width="35" alt="ReactJS" src="https://user-images.githubusercontent.com/93733677/175814537-88330de7-4e5a-425f-a933-eaf1c0bd9331.png">
  </a>  
  <a href="https://www.javascript.com/">
    <img width="35" alt="JavaScript" src="https://user-images.githubusercontent.com/93733677/175814736-fdc4935d-6107-4efc-a6bb-6a98dc685f80.png">
  </a> 
  <a href="https://www.javascript.com/](https://developer.mozilla.org/es/docs/Glossary/HTML5">
    <img width="35" alt="HTML5" src="https://user-images.githubusercontent.com/93733677/175814924-338e3829-a7d8-4e3b-a9ff-6edf3d293a4f.png">
  </a>
  <a href="https://developer.mozilla.org/es/docs/Web/CSS">
    <img width="35" alt="CSS3" src="https://user-images.githubusercontent.com/93733677/175814939-9e82779a-c8a2-4fe2-999a-22ff7ffb8282.png"> 
  </a>
  <a href="https://styled-components.com/">
    <img width="35" alt="StyledComponents" src="https://user-images.githubusercontent.com/93733677/175815609-7bdf9c04-6289-412e-b1b9-485f8aca126c.png">
  </a>
  <a href="https://axios-http.com/">
   <img width="35" alt="Axios" src="https://user-images.githubusercontent.com/93733677/175815317-c22a0625-f629-4169-b2b5-c5075a57548f.png">
  </a>
</div>
 

<!-- LICENSE -->
  
## License
  Distributed under the [MIT](https://opensource.org/licenses/MIT) License. 
  </br>
  See `LICENSE` for more information.
  
 <!-- CONTACT -->

## Contact
Yehosuá Escobedo [Linkedin](https://www.linkedin.com/in/edgaryehosuaescobedo/)  
Email: yehosuaes@gmail.com 
</br>
Project Limk: [https://github.com/YehosuaEs/TalentSquadFE](https://github.com/YehosuaEs/TalentSquadFE)
