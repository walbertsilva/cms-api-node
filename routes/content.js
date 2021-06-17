var express = require('express');
var router = express.Router();

router.get("/", async  (req, res) => { 
    
    const result = await global.db.findAllContent();
    res.json(result);

});

router.get("/:id", async  (req, res) => { 
    const id = req.params.id;

    const result = await global.db.findOneContent(id);
    res.json(result);

});

router.get("/category/:id", async  (req, res) => { 

	const idCategory = req.params.id;
    
    const result = await global.db.findAllContentByCategory(idCategory);
    res.json(result);

});

router.post('/', async (req, res, next) => {

    const title       = req.body.title;
    const category    = req.body.category;
    const situation   = req.body.situation;
    const releaseDate = req.body.releaseDate;
    const releaseTime = req.body.releaseTime;
    const content     = req.body.content;
    const image       = req.body.image;

    try {       
        const result = await global.db.insertContent({ title, category, situation, releaseDate, releaseTime, content, image });
        res.sendStatus(200);
    } catch (err) {
        res.json(err);
    }
});

router.put('/:id', async (req, res) => {
    
    const id          = req.params.id;    
    const title       = req.body.title;
    const category    = req.body.category;
    const situation   = req.body.situation;
    const releaseDate = req.body.releaseDate;
    const releaseTime = req.body.releaseTime;
    const content     = req.body.content;
    const image       = req.body.image;
  
   
    try {
        const result = await global.db.updateContent(id, { title, category, situation, releaseDate, releaseTime, content, image });
        res.sendStatus(200);
    } catch (err) {
        res.json(err);
    }
})

router.delete('/:id', async (req, res) => {
    
    const id = req.params.id;

    try {
        const result = await global.db.deleteOneContent(id);
        res.sendStatus(200);
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;