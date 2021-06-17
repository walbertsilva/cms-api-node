var express = require('express');
var router = express.Router();

router.get("/", async  (req, res) => { 
    
    const result = await global.db.findAllCategory();
    res.json(result);

});

router.get("/:id", async  (req, res) => { 
    const id = req.params.id;

    const result = await global.db.findOneCategory(id);
    res.json(result);

});

router.post('/', async (req, res, next) => {

    const name      = req.body.name;
    const descricao = req.body.description;
    
    try {       
        const result = await global.db.insertCategory({ name, descricao });
        res.sendStatus(200);
    } catch (err) {
        res.json(err);
    }
});

router.put('/:id', async (req, res) => {
    
    const id        = req.params.id;    
    const name      = req.body.name;
    const descricao = req.body.description;
   
    try {
        const result = await global.db.updateCategory(id, { name, descricao });
        res.sendStatus(200);
    } catch (err) {
        res.json(err);
    }
})

router.delete('/:id', async (req, res) => {
    
    const id = req.params.id;

    try {
        const result = await global.db.deleteOneCategory(id);
        res.sendStatus(200);
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;