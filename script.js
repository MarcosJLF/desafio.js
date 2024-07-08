import express from 'express'
import polidro from './index.js'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json())

app.get('/e-palindrome', function(req,res){
    const palavra = req.query.palavra
    if(!palavra) {
        res.json({erro:"Digite uma palavra"}) 
    }else {

        res.status(200).json({palavra:palavra,checarPalindromo:polidro(palavra)})
    }
})



app.post('/e-palindrome', function(req,res){
    const palavra = req.body.palavra
    if(!palavra) {
        res.json({erro:"Digite uma palavra"}) 
    }else {
        res.status(200).json({palavra:palavra,checarPalindromo:polidro(palavra)})
    }
})

app.listen(8000)