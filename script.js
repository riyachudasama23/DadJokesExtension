fetch('https://icanhazdadjoke.com/slack')
  .then(data => data.json())           /* we got response then we converted it into json file */
  .then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML = jokeText;
  }
  )

  /*
  called fetch api 
  we got some data
  we converted it to json format
  we picked out joke string fromt the data

  then we accessed p element from html and put the joke in it
  */
 