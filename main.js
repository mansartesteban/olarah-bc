import Blockchain from "./Blockchain.js"

let bc = new Blockchain()

bc
    .chain({
        sender: "Esteban MANSART",
        receiver: "Stévens MANSART",
        amount: "1000",
    })
    .chain({
        sender: "Esteban MANSART",
        receiver: "Stévens MANSART",
        amount: "50",
    })



console.log(bc.ledger) 