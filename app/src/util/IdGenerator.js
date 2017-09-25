

class IdGenerator {

    constructor() {
        this.getNewId = this.getNewId.bind(this);
        this.removeId = this.removeId.bind(this);
        this.nextId = 0;
        this.ids = {};
    }

    getNewId() {
        Object.keys(this.ids).map((key) => {
           if(!this.ids[key]) {
               this.ids[key] = true;
               return key;
           }
        });
        let id = this.nextId;
        console.log('new id '+id);
        this.ids[this.nextId] = true;
        this.nextId ++;
        return id;
    }

    removeId(id) {
        if(this.ids[id]) {
            this.ids[id] = false;
        }
    }

}

class IntentIDGenerator {

    constructor() {
        this.entity = new IdGenerator();
    }

    getNewId() {
        return this.entity.getNewId();
    }

    removeId(id) {
        this.removeId(id);
    }

}

const idGenerator = new IdGenerator();
Object.freeze(IdGenerator);
export default idGenerator;
const intentIdGenerator = new IntentIDGenerator();
Object.freeze(IntentIDGenerator);
export {intentIdGenerator as IntentIDGenerator}
