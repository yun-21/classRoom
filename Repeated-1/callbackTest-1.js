function first(callback){
  console.log('dd')
  callback()
}

function second(){
  console.log("ss")
}
first(second)