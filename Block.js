
import bcrypt from "bcrypt"

class Block {
    constructor(blockId = null, previousHash = null, data = null) {
        this.blockId = blockId
        this.previousHash = previousHash
        this.timestamp = Date.now()
        this.data = data
        this.hash = this.hashData()
    }

    hashData() {
        return bcrypt.hashSync(String([this.blockId, this.previousHash, this.timestamp, JSON.stringify(this.data)].join("")), 10)
    }
}

export default Block