import Block from "./Block.js"

class Blockchain {

    constructor() {
        this.ledger = [this.initialize()];
        for (let i = 0; i < 10; i++) {
            this.ledger.push(
                new Block(
                    this.chain.length,
                    this.getLatestBlock().hash,
                    null
                )
            )
        }
    }

    initialize() {
        return new Block(0, 0, "First block")
    }

    getLatestBlock() {
        return this.ledger[this.ledger.length - 1]
    }

    chain(data = null) {

        // The new block id willbe the chain length
        let blockId = this.ledger.length

        // Retrieve the last block hash to save it to the new block
        let previousHash = this.getLatestBlock().hash

        // Create the new block
        let block = new Block(blockId, previousHash, data)

        // Add the new block to the ledger
        this.ledger.push(block)

        return this
    }
}

export default Blockchain


/**
 * 
 * TODO: 
 * - Find a way to create "checkpoints". By checkpoints, I mean a way to browse the ledger more easily by jumping over a certain amout of block
 * 
 */