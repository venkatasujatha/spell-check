const router = require('express').Router();
const spellCheck1 = require('../controller/spell_check');
router.post('/spellCheck',spellCheck1.spellCheck);

module.exports = router