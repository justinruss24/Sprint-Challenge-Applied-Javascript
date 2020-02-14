// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function newTab(item) {
    //create element
    const tab = document.createElement('div');

    //add classes to element
    tab.classList.add('tab');

    //give content to element
    tab.textContent = item;

    return tab;
}

//create parent element to add newTab to
const topicDiv = document.querySelector('.topics');


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response.data.topics);
        response.data.topics.forEach(topic => {
            topicDiv.append(newTab(topic));
        })
    })
    .catch(error => {
        console.log('nope', error);
    })