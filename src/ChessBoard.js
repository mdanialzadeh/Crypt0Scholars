import React from 'react'
import ChessPeices from './ChessPeices'
import './ChessBoard.css'


function ChessBoard() {
  
  
 
 
  const chessGame = ()  => {
            
        const pawn1w = document.getElementsByClassName("pawn1w");
        const pawn1b = document.getElementsByClassName("pawn1b");
        const bishop1w = document.getElementsByClassName("wbishop");
        const pawn2b = document.getElementsByClassName("pawn2b")
        const pawn3b = document.getElementsByClassName("pawn3b")
        const pawn2w = document.getElementsByClassName("pawn2w")
        const queenw = document.getElementsByClassName("wqueen")
    
 


        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        async function turnOne() {
            await sleep(900)
            pawn1w[0].classList.add ("jump_up")
            await sleep (240)
            pawn1w[0].attributes[3].nodeValue = "grid-area: 6 / 4 / auto / auto; max-width: 70%;"
            pawn1w[0].classList.remove ("jump_up")
            await sleep (300)
            pawn1w[0].classList.add ("jump_up")
            await sleep (240)
            pawn1w[0].attributes[3].nodeValue = "grid-area: 5 / 4 / auto / auto; max-width: 70%;"
            pawn1w[0].classList.remove ("jump_up")
            await sleep (500)
            
            pawn1b[0].classList.add ("jump_down")
            await sleep (240)
            pawn1b[0].attributes[3].nodeValue = "grid-area: 3 / 6 / auto / auto; max-width: 70%;"
            pawn1b[0].classList.remove ("jump_down")
            await sleep (300)
            pawn1b[0].classList.add ("jump_down")
            await sleep (240)
            pawn1b[0].attributes[3].nodeValue = "grid-area: 4 / 6 / auto / auto; max-width: 70%;"
            pawn1b[0].classList.remove ("jump_down")
            
            await sleep (300)
            
            const x = document.querySelector(".roadmap_info");
            const road_div = document.createElement("span");
            road_div.classList = "roadmapinfo"

            const roadinfo = document.createElement("p")
            roadinfo.innerText = "Q1 2022:  Beta Access To Whitelist"

            road_div.append(roadinfo)
            x.append(road_div)
            
            
            await sleep (2000)
            turnTwo();
            
          }
          
          turnOne()
          
          
          
          async function turnTwo () {
            bishop1w[0].classList.add ("jump_side")
            await sleep (240)
            bishop1w[0].classList.remove("jump_side")
            bishop1w[0].attributes[3].nodeValue = "grid-area: 7/4/auto/auto; max-width: 70%";
            await sleep (300)
            
            bishop1w[0].classList.add ("jump_side")
            await sleep (240)
            bishop1w[0].attributes[3].nodeValue = "grid-area: 6/5/auto/auto; max-width: 70%";
            bishop1w[0].classList.remove("jump_side")
            await sleep (300)
            
            bishop1w[0].classList.add ("jump_side")
            await sleep (240)
            bishop1w[0].attributes[3].nodeValue = "grid-area: 5/6/auto/auto; max-width: 70%";
            bishop1w[0].classList.remove("jump_side")
            await sleep (300)
            
            bishop1w[0].classList.add ("jump_side")
            await sleep (240)
            bishop1w[0].attributes[3].nodeValue = "grid-area: 4/7/auto/auto; max-width: 70%";
            bishop1w[0].classList.remove("jump_side")
            await sleep (500)
            
            pawn3b[0].classList.add ("jump_down")
            await sleep (240)
            pawn3b[0].attributes[3].nodeValue = "grid-area: 3/8/auto/auto; max-width: 70%";
            pawn3b[0].classList.remove("jump_down")
            await sleep (300)
            
            const x = document.querySelector(".roadmap_info");
            const road_div = document.createElement("span");
            road_div.classList = "roadmapinfo"

            const roadinfo = document.createElement("p")
            roadinfo.innerText = "Q2 2022: NFT Sales"
    
            road_div.append(roadinfo)
            x.append(road_div)
            await sleep (2000)
            turnThree()
          }
          
          async function turnThree () {
            bishop1w[0].classList.add ("jump_side_down")
            await sleep (240)
            bishop1w[0].attributes[3].nodeValue = "grid-area: 5/8/auto/auto; max-width: 70%";
            bishop1w[0].classList.remove("jump_side_down")
            await sleep (500)
            
            pawn2b[0].classList.add ("jump_down")
            await sleep (240)
            pawn2b[0].attributes[3].nodeValue = "grid-area: 3 / 7 / auto / auto; max-width: 70%;"
            pawn2b[0].classList.remove ("jump_down")
            await sleep (300)
            pawn2b[0].classList.add ("jump_down")
            await sleep (240)
            pawn2b[0].attributes[3].nodeValue = "grid-area: 4 / 7 / auto / auto; max-width: 70%;"
            pawn2b[0].classList.remove ("jump_down")
            
            await sleep (500)
            
            const x = document.querySelector(".roadmap_info");
            const road_div = document.createElement("span");
            road_div.classList = "roadmapinfo"

            const roadinfo = document.createElement("p")
            roadinfo.innerText = "Q3 2022: Game Development"
       
            road_div.append(roadinfo)
            x.append(road_div)
            await sleep (2000)
            
            turnFour()
          }
          
          async function turnFour() {
            pawn2w[0].classList.add ("jump_up")
            await sleep (240)
            pawn2w[0].attributes[3].nodeValue = "grid-area: 6 / 5 / auto / auto; max-width: 70%;"
            pawn2w[0].classList.remove ("jump_up")
            await sleep (300)
            pawn2w[0].classList.add ("jump_up")
            await sleep (240)
            pawn2w[0].attributes[3].nodeValue = "grid-area: 5 / 5 / auto / auto; max-width: 70%;"
            pawn2w[0].classList.remove ("jump_up")
            await sleep (500)
            pawn1b[0].classList.add ("jump_left_down")
            await sleep (240)
            pawn2w[0].classList.add ("exit") 
            pawn1b[0].attributes[3].nodeValue = "grid-area: 5 / 5 / auto / auto; max-width: 70%;"
            pawn1b[0].classList.remove ("jump_left_down")
            await sleep (500)
            
            const x = document.querySelector(".roadmap_info");
            const road_div = document.createElement("span");
            road_div.classList = "roadmapinfo"
     
            const roadinfo = document.createElement("p")
            roadinfo.innerText = "Q4 2022: Smart Contract Integration"
        
            road_div.append(roadinfo)
            x.append(road_div)
            await sleep (2000)
            
            turnFive()
          }
          
          async function turnFive () {
            
            queenw[0].classList.add ("jump_side")
            await sleep (240)
            queenw[0].classList.remove("jump_side")
            queenw[0].attributes[3].nodeValue = "grid-area: 7/5/auto/auto; max-width: 70%";
            await sleep (300)
            
            queenw[0].classList.add ("jump_side")
            await sleep (240)
            queenw[0].attributes[3].nodeValue = "grid-area: 6/6/auto/auto; max-width: 70%";
        queenw[0].classList.remove("jump_side")
        await sleep (300)
        
        queenw[0].classList.add ("jump_side")
        await sleep (240)
        queenw[0].attributes[3].nodeValue = "grid-area: 5/7/auto/auto; max-width: 70%";
        queenw[0].classList.remove("jump_side")
        await sleep (300)
        
        queenw[0].classList.add ("jump_side")
        await sleep (240)
        queenw[0].attributes[3].nodeValue = "grid-area: 4/8/auto/auto; max-width: 70%";
        queenw[0].classList.remove("jump_side")
        await sleep (500)
        
        const x = document.querySelector(".roadmap_info");
        const road_div = document.createElement("span");
        road_div.classList = "roadmapinfo"
 
        const roadinfo = document.createElement("p")
        roadinfo.innerText = "Q1 2023: Projected Launch"
      
        road_div.append(roadinfo)
        x.append(road_div)
        await sleep (2000)
        
      }
      
    }
  
    window.onscroll = myScroll;
    var counter = 0; 
      function myScroll(){

   if(counter === 0){ 
     if(window.pageYOffset > 300){
        chessGame()
        counter++; // increment the counter by 1, new value = 1
     }
   }
  }





    return (
        <div>
            <ChessPeices/>
        </div>
    )
}

export default ChessBoard
