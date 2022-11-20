
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
