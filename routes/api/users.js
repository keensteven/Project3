const router = require("express").Router();
const userController = require("../../controllers/userController");
var passport = require("../../config/passport");
const registryController= require("../../controllers/registryController");

router.get('/', function (req, res) {
    res.json({ 'user': false });
});
router
    .route('/enroll')
    .post(userController.create)
router.post('/login',passport.authenticate("local"), function (req, res) {
    res.json(req.user);
});
router.post('/status',passport.authenticate("local"), function (req, res) {
    res.json(req.user);
});

// router
// .route('/registry')
// .post(registryController.createRegistry)

// router
// .route('/yourList/:id')
// .get(registryController.FindByUserID)

router.post('/registry',passport.authenticate("local"),function(req,res){
    console.log(req.user)

    if(req.user){
        registryController.createRegistry
    }else{
        alert("not logged in")
    }
    
});


router
.route('/yourList/:id')
.get(registryController.FindByUserID)
module.exports = router;