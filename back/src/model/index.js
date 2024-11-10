// const data = require('../../data.json');
const {connectToMongoDB, disconnectToMongoDB} = require('../config/index')



class ProductosModel{
    static async getAll(){
        try {
            const clientMongo = await connectToMongoDB()    
            if(!clientMongo){
                throw error('Error al conectar con Mongo')
            }
            const result = await clientMongo.db('Tienda').collection('productos').find().toArray();
            await disconnectToMongoDB();
            console.log(result);
            if (!result) return {data:null, error:true}
            return {data:result, error:false}

        } catch (error) {
            return error;
        }
    }

    static async getById(id){
        try {
            const clientMongo = await connectToMongoDB()
            if(!clientMongo){
                throw error('Error al conectar con Mongo');
            }
            const result = await clientMongo.db('Tienda').collection('productos').findOne({id: Number(id)})
            console.log(result);
            await disconnectToMongoDB();
            if (!result) return {data:null, error:true} 
            return {data:result, error:false}

        } catch (error) {
            return {data:null, error}
        }
    }
}

module.exports = ProductosModel;