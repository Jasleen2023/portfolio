const downloadResume = document.getElementById("download-resume");
const sendMessageNotification = document.getElementById("send-message");

downloadResume.addEventListener("click", handleDownloadResumeClick);
sendMessageNotification.addEventListener("click", handleSendMessageClick);

function handleDownloadResumeClick() {
  alert("Download Successful!");
  // Additional logic for the actual download if needed
}

function handleSendMessageClick(event) {
  event.preventDefault(); // Prevent form submission
  alert("Submit Successful!");
  console.log("Button clicked");
}
