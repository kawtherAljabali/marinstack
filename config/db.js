const mongoos=require('mongoose');
const config=require('config');

const db=config.get('mongoURl');
// mongoos.connectDB(db);

const connectDB =async () => {
try{
    await mongoos.connect(db,{useNewUrlParser:true,
   useUnifiedTopology:true, });
}catch(err){
    console.error(err.message);
    
    process.exit(1);
}
}

module.exports=connectDB;
