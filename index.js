 // alert("working");

const firstNameRaw = document.getElementById("first-name");
const firstAdjectiveRaw = document.getElementById("first-adjective");
const secondVerbRaw = document.getElementById("second-verb");
const firstNounRaw = document.getElementById("first-noun");
const secondNounRaw = document.getElementById("second-noun");
const firstVerbRaw = document.getElementById("first-verb");

const submitButton = document.getElementById("submit");
const songTitle = document.getElementById("song-title");

const songOne = document.getElementById("song-1");
const songTwo = document.getElementById("song-2");
const songThree = document.getElementById("song-3");
const songFour = document.getElementById("song-4");
const songFive = document.getElementById("song-5");
const songSix = document.getElementById("song-6");
const songSeven = document.getElementById("song-7");
const songEight = document.getElementById("song-8");

submitButton.addEventListener("click", function() {
    const firstName = extractQuotedText(firstNameRaw.value);
    const firstAdjective = extractQuotedText(firstAdjectiveRaw.value);
    const secondVerb = extractQuotedText(secondVerbRaw.value);
    const firstNoun = extractQuotedText(firstNounRaw.value);
    const secondNoun = extractQuotedText(secondNounRaw.value);
    const firstVerb = extractQuotedText(firstVerbRaw.value);
    if (firstNoun) {
        songOne.textContent = firstName + " had a little " + firstNoun + ",";
        songTwo.textContent = "Little " + firstNoun + ", little " + firstNoun + ", ";
        songThree.textContent = firstName + " had a little " + firstNoun + ",";
        songFour.textContent = "It's fleece was " + firstAdjective + " as a " + secondNoun + ".";
        songFive.textContent = "And every time that " + firstName + " " + secondVerb + ",";
        songSix.textContent = firstName + " " + secondVerb + ", " + firstName + " " + secondVerb + ",";
        songSeven.textContent = "Everywhere that " + firstName + " " + secondVerb + ",";
        songEight.textContent = "The " + firstNoun + " was " + " sure to " + firstVerb + ".";


        songTitle.textContent = firstName + " Had a Little " + firstNoun + " (Mary Had a Little Lamb)";
    } else {
        songOne.textContent = "Sorry, but something's amiss with your variables. Try making sure your variable is a string by wrapping it's content in single or double quotes. Example: let firstNoun = 'string'"
    }
    
});

const extractQuotedText = (userInput) => {
    const match = userInput.match(/'(.*?)'|"([^"]*)"/);
    if (match) {
      return match[1] || match[2];
    } else {
      return null; 
    }
  };