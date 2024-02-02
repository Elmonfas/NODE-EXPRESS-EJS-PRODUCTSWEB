const { randomUUID } = require('crypto')
const { Router } = require('express')
const router = Router()
const fs = require('fs')
const uuid = require('uuid')

const json_products2 = fs.readFileSync('src/db.json','utf-8')
let products = JSON.parse(json_products2)

router.get('/',(req, res) => {
    res.render('index.ejs', {
        products
    })
})

router.get('/new_product',(req, res) => {
    res.render('new_product.ejs')
})

router.post('/new_product',(req, res) => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
    const { nombre , descripcion, precio, imagen} = req.body
    
    const new_product = {
        // id: getRandomInt(),
        id: randomUUID(),
        nombre,
        descripcion,
        precio,
        imagen,
    }
    products.push(new_product)

    const json_products = JSON.stringify(products)
    fs.writeFileSync('src/db.json',json_products, 'utf-8')

    res.redirect('/')
})

router.get('/delete/:id', (req, res) => {
   products = products.filter(product => product.id != req.params.id)

   const json_products = JSON.stringify(products)
   fs.writeFileSync('src/db.json',json_products, 'utf-8')
   res.redirect('/')
})
module.exports = router