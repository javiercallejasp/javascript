function fetchGitHubRelease(repositoryNameCell) {
  // Get the repository name from the provided cell reference
  //var repositoryName = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(repositoryNameCell).getValue();
  console.log("The entire content is:")
  console.log(repositoryNameCell)
  var values = repositoryNameCell[0]
  console.log("The values are:")
  console.log(values)
  // Get the version number from the provided cell reference
  //var versionNumber = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(versionNumberCell).getValue();
  
  // Construct the URL using the provided repository name and version number
  var url = 'https://api.github.com/repos/<NAME>/' + values[0] + '/releases/tags/' + values[4];
  console.log(url)
  var headers = {
    'Accept': 'application/vnd.github+json',
    'Authorization': 'Bearer ',
    'X-GitHub-Api-Version': '2022-11-28'
  };

  var options = {
    'method': 'get',
    'headers': headers,
    'muteHttpExceptions': true
  };

  var response = UrlFetchApp.fetch(url, options);
  var content = response.getContentText();
  var statusCode = response.getResponseCode(); // Get HTTP status code
  
  // Log the response content and status code
  Logger.log('Response Status Code: ' + statusCode);
 
  // Check the status code
  if (statusCode === 200) {
    Logger.log('TRUE');
    return true;
  } else if (statusCode === 404) {
    Logger.log('FALSE');
    return false;
  } else {
    // Return null for other status codes
    return null;
  }
}
