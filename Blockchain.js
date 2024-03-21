import Block from "./Block.js"

class Blockchain {

    constructor() {
        this.ledger = []
    }

    chain(data = null) {
        let blockId = this.ledger.length
        let previousHash = this.ledger[this.blockId - 1]
        let block = new Block(blockId, previousHash, data)

        this.ledger.push(block)
        return this
    }
}

export default Blockchain