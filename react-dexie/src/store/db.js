import Dexie from "dexie"

const db = new Dexie('WalletDB');

// Declare tables, IDs and indexes
db.version(1).stores({
    identity: 'id, name, pwd, pwdHint, mnemonic'
});

db.version(1).stores({
    wallet: '++id, name, coinId, address'
});

export default db;