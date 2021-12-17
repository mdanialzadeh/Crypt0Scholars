import React from 'react'
import "./ChessPeices.css"
import chessboardimg from './images/chess_board.png'


import blackpawn from "./images/peices/b_pawn.png"
import blackrook from "./images/peices/b_rook.png"
import blackbishop from "./images/peices/b_bishop.png"
import blackknight from "./images/peices/b_knight.png"
import blackking from "./images/peices/b_king.png"
import blackqueen from "./images/peices/b_queen.png"

import whitepawn from "./images/peices/w_pawn.png"
import whiterook from "./images/peices/w_rook.png"
import whitebishop from "./images/peices/w_bishop.png"
import whiteknight from "./images/peices/w_knight.png"
import whiteking from "./images/peices/w_king.png"
import whitequeen from "./images/peices/w_queen.png"

function ChessPeices() {

    const blackpawn1 = {
        gridColumn: "1",
        gridRow: "2",
        width: "70%"
        
    }

    const blackpawn2 = {
        gridColumn: "2",
        gridRow: "2",
        width: "70%"
    }

    const blackpawn3 = {
        gridColumn: "3",
        gridRow: "2",
        width: "70%"
    }

    const blackpawn4 = {
        gridColumn: "4",
        gridRow: "2",
        width: "70%"
    }

    const blackpawn5 = {
        gridColumn: "5",
        gridRow: "2",
        width: "70%"
    }

    const blackpawn6 = {
        gridColumn: "6",
        gridRow: "2",
        width: "70%"
    }

    const blackpawn7 = {
        gridColumn: "7",
        gridRow: "2",
        width: "70%"
    }

    const blackpawn8 = {
        gridColumn: "8",
        gridRow: "2",
        width: "70%"
    }

    const blackrook1 = {
        gridColumn: "1",
        gridRow: "1",
        width: "70%"
    }

    const blackrook2 = {
        gridColumn: "8",
        gridRow: "1",
        width: "70%"
    }

    const blackknight1 = {
        gridColumn: "2",
        gridRow: "1",
        width: "70%"
    }
        const blackknight2 = {
        gridColumn: "7",
        gridRow: "1",
        width: "70%"
    }

    const blackbishop1 = {
        gridColumn: "3",
        gridRow: "1",
        width: "70%"
    }
    const blackbishop2 = {
        gridColumn: "6",
        gridRow: "1",
        width: "70%"
    }
    const blackqueen1 = {
        gridColumn: "4",
        gridRow: "1",
        width: "70%"
    }
    const blackking1 = {
        gridColumn: "5",
        gridRow: "1",
        width: "70%"
    }

    const whitepawn1 = {
        gridColumn: "1",
        gridRow: "7",
        width: "70%"
    }

    const whitepawn2 = {
        gridColumn: "2",
        gridRow: "7",
        width: "70%"
    }

    const whitepawn3 = {
        gridColumn: "3",
        gridRow: "7",
        width: "70%"
    }

    const whitepawn4 = {
        gridColumn: "4",
        gridRow: "7",
        width: "70%"
    }

    const whitepawn5 = {
        gridColumn: "5",
        gridRow: "7",
        width: "70%"
    }

    const whitepawn6 = {
        gridColumn: "6",
        gridRow: "7",
        width: "70%"
    }

    const whitepawn7 = {
        gridColumn: "7",
        gridRow: "7",
        width: "70%"
    }

    const whitepawn8 = {
        gridColumn: "8",
        gridRow: "7",
        width: "70%"
    }

    const whiterook1 = {
        gridColumn: "1",
        gridRow: "8",
        width: "70%"
    }

    const whiterook2 = {
        gridColumn: "8",
        gridRow: "8",
        width: "70%"
    }

    const whiteknight1 = {
        gridColumn: "2",
        gridRow: "8",
        width: "70%"
    }
        const whiteknight2 = {
        gridColumn: "7",
        gridRow: "8",
        width: "70%"
    }

    const whitebishop1 = {
        gridColumn: "3",
        gridRow: "8",
        width: "70%"
    }
    const whitebishop2 = {
        gridColumn: "6",
        gridRow: "8",
        width: "70%"
    }
    const whitequeen1 = {
        gridColumn: "4",
        gridRow: "8",
        width: "70%"
    }
    const whiteking1 = {
        gridColumn: "5",
        gridRow: "8",
        width: "70%"
    }




    return (
        <div className= "chessboard" style = {{backgroundImage:`url(${chessboardimg})`}}>
            <img 
            src = {blackpawn} 
            alt= ""
            style = {blackpawn1} 
            >
            </img>
            <img 
            src = {blackpawn} 
            alt= ""
            style = {blackpawn2} 
            >
            </img>
            <img 
            src = {blackpawn} 
            alt= ""
            style = {blackpawn3} 
            >
            </img>
            <img 
            src = {blackpawn} 
            alt= ""
            style = {blackpawn4} 
            >
            </img>
            <img 
            src = {blackpawn} 
            alt= ""
            style = {blackpawn5} 
            >
            </img>
            <img 
            src = {blackpawn}
            className = "pawn1b"
            alt= ""
            style = {blackpawn6} 
            >
            </img>
            <img 
            src = {blackpawn}
            className = "pawn2b" 
            alt= ""
            style = {blackpawn7} 
            >
            </img>
            <img 
            src = {blackpawn}
            className = "pawn3b" 
            alt= ""
            style = {blackpawn8} 
            >
            </img>
            <img 
            src = {blackrook} 
            alt= ""
            style = {blackrook1} 
            >
            </img>
            <img 
            src = {blackrook} 
            alt= ""
            style = {blackrook2} 
            >
            </img>
            <img 
            src = {blackknight} 
            alt= ""
            style = {blackknight1} 
            >
            </img>
            <img 
            src = {blackknight} 
            alt= ""
            style = {blackknight2} 
            >
            </img>
            <img 
            src = {blackbishop} 
            alt= ""
            style = {blackbishop1} 
            >
            </img>
            <img 
            src = {blackbishop} 
            alt= ""
            style = {blackbishop2} 
            >
            </img>            <img 
            src = {blackqueen} 
            alt= ""
            style = {blackqueen1} 
            >
            </img>
            <img 
            src = {blackking} 
            alt= ""
            style = {blackking1} 
            >
            </img>

            <img 
            src = {whitepawn} 
            alt= ""
            style = {whitepawn1} 
            >
            </img>
            <img 
            src = {whitepawn} 
            alt= ""
            style = {whitepawn2} 
            >
            </img>
            <img 
            src = {whitepawn} 
            alt= ""
            style = {whitepawn3} 
            >
            </img>
            <img 
            src = {whitepawn} 
            className = "pawn1w"
            alt= ""
            style = {whitepawn4} 
            >
            </img>
            <img 
            src = {whitepawn}
            className = "pawn2w" 
            alt= ""
            style = {whitepawn5} 
            >
            </img>
            <img 
            src = {whitepawn} 
            alt= ""
            style = {whitepawn6} 
            >
            </img>
            <img 
            src = {whitepawn} 
            alt= ""
            style = {whitepawn7} 
            >
            </img>
            <img 
            src = {whitepawn} 
            alt= ""
            style = {whitepawn8} 
            >
            </img>
            <img 
            src = {whiterook} 
            alt= ""
            style = {whiterook1} 
            >
            </img>
            <img 
            src = {whiterook} 
            alt= ""
            style = {whiterook2} 
            >
            </img>
            <img 
            src = {whiteknight} 
            alt= ""
            style = {whiteknight1} 
            >
            </img>
            <img 
            src = {whiteknight} 
            alt= ""
            style = {whiteknight2} 
            >
            </img>
            <img 
            src = {whitebishop}
            className = "wbishop" 
            alt= ""
            style = {whitebishop1} 
            >
            </img>
            <img 
            src = {whitebishop} 
            alt= ""
            style = {whitebishop2} 
            >
            </img>            <img 
            src = {whitequeen}
            className = "wqueen" 
            alt= ""
            style = {whitequeen1} 
            >
            </img>
            <img 
            src = {whiteking} 
            alt= ""
            style = {whiteking1} 
            >
            </img>

        </div>
    )
}

export default ChessPeices
