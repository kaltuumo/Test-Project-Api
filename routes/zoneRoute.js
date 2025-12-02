const express = require('express');


const zoneController = require('../controllers/zoneController');
const router = express.Router();

router.post('/create-zone', zoneController.createZone);
router.get('/all-zone', zoneController.getZone);
router.delete('/delete-zone/:id', zoneController.deleteZone);


module.exports = router;