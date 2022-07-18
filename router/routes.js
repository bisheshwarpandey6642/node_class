const express = require("express")
const router = express.Router();
const fs = require('fs')

const dataPath = "./router/testdata.json"

const { displayData, saveData, singleData, update, deleteData, customer, identifier, getCustomer } = require("../controller/control")


router.get('/display', displayData)   // display data
router.post('/save', saveData)  // save the data
router.get('/single/:postId', singleData) // to display single data
router.patch('/update/:postId', update)// to update the data
router.delete('/delete/:postId', deleteData ) // to delete data
router.post('/cust', customer)
router.post('/ide/:postId', identifier)
router.get('/pop/:postId', getCustomer)


////////////////////////////////////////////////////////////////


const getData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)
}


const saveJsonData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}

router.get('/account/display', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err){
            throw err;
        }

        res.send(JSON.parse(data));
    })
})


router.post('/account/save', (req, res) => {

    var currentAccount = getData()
    const newAccountID  = Math.floor(100000 + Math.random() * 900000)
    console.log(newAccountID)

    currentAccount[newAccountID] = req.body

    console.log(currentAccount);

    saveJsonData(currentAccount);
    res.send({"data saved" : true})


})

router.put('/account/update/:id', (req, res) => {

    var currentAccount = getData()

        const accountId = req.params['id'];
        currentAccount[accountId] = req.body;

        saveJsonData(currentAccount);
        res.send({"data updated" : true})


});

router.delete('/account/delete/:id', (req, res) => {

        var currentAccount = getData()

        const accountId = req.params['id'];
        console.log(accountId)

        delete currentAccount[accountId];

        saveJsonData(currentAccount);
        res.send({"data deleted" : true})

    

});


module.exports = router;



