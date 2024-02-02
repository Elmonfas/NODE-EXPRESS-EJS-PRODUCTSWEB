const app = require('./app')

function main () {
    console.log('Listennig on port :' , app.get('port'))
    app.listen(app.get('port'))
}

main()