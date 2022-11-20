// const videos = document.getElementById('videos');

// function startCamera() {
//     navigator.getUserMedia(
//         {
//             videos: {}
//         },

//         strem => videos.srcObject = strem,
//         err => console.error(err)
//     );
// }
// startCamera()

const startVideo = async () => {
    const Stream = await navigator.mediaDevices.getDisplayMedia(
        {
            video: {
                MediaSource: "screen",
            }
        });

    const data = [];
    const mediaRecorder = new MediaRecorder(Stream);

    mediaRecorder.ondataavailable = (e) => {
        data.push(e.data);
    }
    mediaRecorder.start();
    mediaRecorder.onstop = (e) => {
        document.querySelector('video').src = URL.createObjectURL(
            new Blob(data, {
                type: data[0].type,

            })
        )
    }
}
startVideo();


// Webcam.set({
//     width: 350,
//     height: 350,
//     image_format: 'jpeg',
//     jpeg_quality: 1040,
// })
// Webcam.attach("#camera")

// function take_photo() {
//     Webcam.snap(function (data_uri) {
//         document.getElementById('results').innerHTML = `
//     <img src="`+ data_uri + `"/>`;
//     });
// }



