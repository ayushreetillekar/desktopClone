const video=document.getElementById('camera');
async function startCamera(){
    try{
        const stream=await navigator.mediaDevices.getUserMedia({video:true});
        video.srcObject=stream;
    }catch(err){
        document.body.innerHTML=`
        <h2 style="color:white; text-align:center;"> Camera access denied or not available <br> ${err.message} </h2>
        `
    }
}
startCamera();