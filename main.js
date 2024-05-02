// const {foo}= require('./www/tester')
// foo()

const path = require('node:path')
const readline = require('node:readline');
const fsPromises = require('node:fs/promises');
const os = require('node:os');
const EventEmitter = require('node:events');
const http = require('node:http');
async function foo(){
    try {
        // Path робота з шляхами

        // console.log(path.basename(__dirname));  // nasha papka
        // console.log(path.extname(__filename))  //.js
        // console.log(path.parse(__filename)) // pokaje obj

        // Readline щось буде питати в консольці

        // readline.createInterface({
        //     input:process.stdin,
        //     output: process.stdout
        // }).question('Enter name', (name)=>{
        //     console.log(`Hello ${name}:)`);
        //     process.exit(0)
        // })


        // fs - маніпуляція з файлами
        // await fsPromises.writeFile('test.txt', 'Hello Node.js:)') // 1-file, 2-text v file
        //
        // const pathToFile = path.join(__dirname, 'www', 'text2.txt')
        // await fsPromises.writeFile(pathToFile, 'hello new path2')  //new info v file
        //
        // const data = await fsPromises.readFile(pathToFile, "utf-8");  // read file, kodyvannya
        // console.log(data)
        //
        // await fsPromises.appendFile(pathToFile, '\n new test qq all')

        // // os infa pro system
        // console.log(os.arch())
        // console.log(os.cpus())
        // console.log(os.homedir())
        // console.log(os.hostname())
        // console.log(os.version())

        // Emitter -підписка на подію
        // const myEmitter = new EventEmitter()
        // myEmitter.on('tap', ()=>{
        //     console.log('work work')
        // })
        // myEmitter.once('one tap', ()=>{
        //     console.log('one click')
        // })
        // myEmitter.emit('tap')
        // myEmitter.emit('tap')
        // myEmitter.emit('tap')
        // myEmitter.emit('one tap')
        // myEmitter.emit('one tap')
        // myEmitter.emit('one tap')

        // http server
        // const server = http.createServer((req,res)=>{
        //     res.writeHead(200, {'Content-type':'text/plain'})
        //     res.end('okay')
        // })
        // server.listen(3005, '0.0.0.0', ()=>{
        //     console.log('serverWorking at http://0.0.0.0:3005/')
        // })

    } catch (e) {
        console.error(e)
    }
}

void foo()


