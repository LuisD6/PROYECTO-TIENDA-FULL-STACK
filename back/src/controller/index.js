const ProductosModel = require("../model/index");

class Productos{
    static async getAll(req, res){
        const {data, error} = await ProductosModel.getAll();
        error ? res.status(400).json({error: 'No hay productos'})
              : res.status(200).json(data);
    }
    static async getByID(req, res)   {
        const {id} = req.params;
        if(!id || !Number(id)) return res.status(400).json({ error: 'No se proporciono un ID valido'})
        const { data, error } = await ProductosModel.getById(id)
        error ? res.status(400).json({error: 'No existe el producto'})
              : res.status(200).json(data);
    }
}

module.exports = Productos;