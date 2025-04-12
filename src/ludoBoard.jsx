import { useState } from "react"
function diceRoll(){
    const randomSix = Math.floor(Math.random() * 6) + 1;
    return randomSix;
}
export default function ludoBoard(){
    let[moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});
    let[winner,setWinner]=useState(" ");
    let[Who,setWho]=useState("no moves");
    function UpdateBlue() {
        setMoves(prev => {
            const newScore = prev.blue + diceRoll();
            setWho("Blue Moves");
            if (newScore >= 100 && !winner) {
                setWinner("Blue");
            }
            return { ...prev, blue: newScore };
        });
    }
    
    function UpdateYellow() {
        setMoves(prev => {
            const newScore = prev.yellow + diceRoll();
            setWho("Yellow Moves");
            if (newScore >= 100 && !winner) {
                setWinner("Yellow");
            }
            return { ...prev, yellow: newScore };
        });
    }
    
    function UpdateGreen() {
        setMoves(prev => {
            const newScore = prev.green + diceRoll();
            setWho("Green Moves");
            if (newScore >= 100 && !winner) {
                setWinner("Green");
            }
            return { ...prev, green: newScore };
        });
    }
    
    function UpdateRed() {
        setMoves(prev => {
            const newScore = prev.red + diceRoll();
            setWho("Red Moves");
            if (newScore >= 100 && !winner) {
                setWinner("Red");
            }
            return { ...prev, red: newScore };
        });
    }
    function Reset() {
        setMoves({ blue: 0, yellow: 0, green: 0, red: 0 });
        setWho("No Moves");
        setWinner("");
    }
    function start() {
        setWinner("");
    }   
    return(
        <>
         <h1>game begins</h1>
         <h2>🕹️ "Whoever reaches 100 points first, wins the game!"</h2>
         <span>
         <button onClick={start}style={{backgroundColor:"green"}}>START</button>
         &nbsp;&nbsp;
         <button onClick={Reset} style={{backgroundColor:"red"}}>RESET</button>
         </span>
         <h3>{Who}</h3>
         <div className="Board">
         <p onClick={UpdateBlue}>
            <h3>Blue={moves.blue}</h3>
            <button style={{backgroundColor:"blue"}}>RollDice</button>
         </p>
         <p onClick={UpdateYellow}>
            <h3>yellow={moves.yellow}</h3>
            <button style={{backgroundColor:"yellow" ,color:"black"}}>RollDice</button>
         </p>
         <p onClick={UpdateGreen}>
            <h3>green={moves.green}</h3>
            <button style={{backgroundColor:"green"}}>RollDice</button>
         </p>
         <p onClick={UpdateRed}>
            <h3>red={moves.red}</h3>
            <button style={{backgroundColor:"red"}}>RollDice</button>
         </p>
         <h1>Winner is: {winner ? winner : "None yet"}</h1>
         </div>
        </>
    )
}