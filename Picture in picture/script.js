const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function getShareScreen() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  button.disable = true;

  try {
    await video.requestPictureInPicture();
  } catch (error) {
    console.log(error);
  }

  button.disable = false;
});

getShareScreen();
