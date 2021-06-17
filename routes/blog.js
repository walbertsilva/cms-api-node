var express = require('express');
var router = express.Router();

router.get("/content/category/:id", async  (req, res) => { 

	const idCategory = req.params.id;
    
    const result = await global.db.findAllContentByCategory(idCategory);
    res.json(result);
});

router.get("/category", async  (req, res) => { 
    
    const result = await global.db.findAllCategory();
    res.json(result);
});

router.get("/content", async  (req, res) => { 
    
    const result = await global.db.findAllContent();
    res.json(result);
});

router.get("/content/:id", async  (req, res) => {
    const id = req.params.id;

    const result = await global.db.findOneContent(id);
    res.json(result);
});

module.exports = router;
