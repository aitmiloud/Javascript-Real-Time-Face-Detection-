const video = document.getElementById('video')

Promise.all([
    
])

function startVideo(){
    navigator.getUserMedia(
        {video:{} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

startVideo()