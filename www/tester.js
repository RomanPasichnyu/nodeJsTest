const foo = () => {
    console.log(__dirname)
    console.log(__filename)
    console.log(process.cwd())

}
console.log('hello tester')

module.exports = {foo}