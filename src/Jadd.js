let Jadd = async (url="",obj=null,errm=null)=>{
try{
    let responce = await fetch(url,obj)
    if(!responce.ok) throw Error("Need to reload")
}catch(err){
    errm=err.message
}finally{
    return errm
}
}
export default Jadd