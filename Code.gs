function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('My Interactive Site')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Function to handle the file upload from the website
function uploadFileToDrive(base64Data, fileName) {
  try {
    var splitData = base64Data.split(',');
    var contentType = splitData[0].match(/:(.*?);/)[1];
    var byteData = Utilities.base64Decode(splitData[1]);
    var blob = Utilities.newBlob(byteData, contentType, fileName);
    
    // This saves the file to your root Google Drive folder
    var file = DriveApp.createFile(blob);
    return "Success! File saved as: " + file.getName();
  } catch (e) {
    return "Error: " + e.toString();
  }
}
