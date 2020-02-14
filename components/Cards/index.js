// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(data) {

    //create elements
    const card = document.createElement('div'),
        header = document.createElement('div'),
        author = document.createElement('div'),
        imgCont = document.createElement('div'),
        image = document.createElement('img'),
        credit = document.createElement('span');

    //add classes to elements
    card.classList.add('card');
    header.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    //give content to elements
    header.textContent = data.headline;
    image.src = data.authorPhoto;
    credit.textContent = data.authorName;

    //append elements to parents
    card.append(header);
    card.append(author);
    author.append(imgCont);
    author.append(credit);
    imgCont.append(image);

    return card;

}

const cardsDiv = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(result => {
        console.log(result.data.articles)
        const articles = result.data.articles

        Object.values(articles).forEach(subject => {
            subject.forEach(item => {
                cardsDiv.append(createCard(item))
            })
        })
    })

    .catch(error => 
        console.log(error));