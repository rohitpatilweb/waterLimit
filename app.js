const TextToDisplay =
  "https://api.thingspeak.com/channels/1539550/feeds.json?results=1";
const DisplayText = document.getElementById("TextToShow");

function getText() {
  return fetch(TextToDisplay)
    .then((response) => response.json())
    .then((data) => data.feeds[0].field1);
}

let spacechar = document.createElement("span");
spacechar.innerText = " ";
async function getNextLine() {
  const FetchedLine = await getText();
  console.log(FetchedLine);
  DisplayText.innerHTML =FetchedLine;
}
getNextLine();
