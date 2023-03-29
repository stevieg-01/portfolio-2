function renderOneCharacter(animal){
    let card = document.createElement('li')
    card.innerHTML = `
      <img src="${animal.image}">
      <div class="content">
        <h4 class="animal-name">${animal.name}<h4>
        <p>
          <span class="votes-count">${animal.votes}</span>
        </p>
        <p>${animal.description}</p>
      </div>
      <div class="buttons">
        <button class="vote-button"> Vote </button>
      </div>
    `
    // Add a click event listener to the animal's name
    const nameElement = card.querySelector('.animal-name')
    nameElement.addEventListener('click', () => {
      // Make a new request to get the character's details
      fetch(`http://localhost:3000/characters/${animal.id}`)
        .then(res => res.json())
        .then(animalDetails => {
          // Create a new element to display the animal details
          const detailsContainer = document.createElement('div')
          detailsContainer.classList.add('animal-details')
          detailsContainer.innerHTML = `
            <h3>${animalDetails.name}</h3>
            <img src="${animalDetails.image}">
            <p>Votes: <span class="details-votes-count">${animalDetails.votes}</span></p>
            <p>Description: ${animalDetails.description}</p>
            <div class="vote-container">
              <input type="number" class="vote-input" value="1" min="1" max="100">
              <button class="vote-submit-button">Submit</button>
            </div>
          `
          // Add an event listener to the "Vote" button in the details container
          const voteButton = detailsContainer.querySelector('.vote-submit-button')
          const voteInput = detailsContainer.querySelector('.vote-input')
          voteButton.addEventListener('click', () => {
            const numVotes = parseInt(voteInput.value)
            if (!isNaN(numVotes)) {
              animalDetails.votes += numVotes
              const detailsVotesCount = detailsContainer.querySelector('.details-votes-count')
              detailsVotesCount.textContent = animalDetails.votes
            }
          })
          // Remove any previously displayed animal details and add the new details to the DOM
          const existingDetailsContainer = document.querySelector('.animal-details')
          if (existingDetailsContainer) {
            existingDetailsContainer.remove()
          }
          document.querySelector('.container').appendChild(detailsContainer)
        })
    })
    // Add an event listener to the "Vote" button in the card
    const voteButton = card.querySelector('.vote-button')
    voteButton.addEventListener('click', () => {
      animal.votes++
      const votesCount = card.querySelector('.votes-count')
      votesCount.textContent = animal.votes + ' VOTES'
    })
    document.querySelector('#animal-list').appendChild(card)
  }
//fetch Request
function getAllAnimals(){
    fetch( 'http://localhost:3000/characters')
    .then(res => res.json())
    .then(characters => characters.forEach(animal => renderOneCharacter(animal)))
}
function initialize(){
    getAllAnimals()
}
initialize()
