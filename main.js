// Arrays of adjectives, verbs, and nouns that we will choose from at random and insert into the story templates

const adjectives = ['gorgeous', 'sexy', 'fertile', 'nutty', 'chubby'];
const verbs = ['lick', 'hunt', 'seduce', 'resist', 'fall'];
const nouns = ['popsicle', 'helicopter', 'lizard', 'child', 'hammer'];



// This function returns a random adjective from the adjectives array

function chooseRandomAdjective() {
    let randomAdjectiveNumber = Math.floor(Math.random() * adjectives.length);
    const chosenAdjective = adjectives[randomAdjectiveNumber];
    adjectives.splice(randomAdjectiveNumber, 1);
    return chosenAdjective;
}



// This function returns a random verb from the verbs array

function chooseRandomVerb() {
    let randomVerbNumber = Math.floor(Math.random() * verbs.length);
    const chosenVerb = verbs[randomVerbNumber];
    verbs.splice(randomVerbNumber, 1);
    return chosenVerb;}



// This function returns a random noun from the nouns array

function chooseRandomNoun() {
    let randomNounNumber = Math.floor(Math.random() * nouns.length);
    const chosenNoun = nouns[randomNounNumber];
    nouns.splice(randomNounNumber, 1);
    return chosenNoun;
}



// Choose random adjectives, verbs, and nouns to insert into stories
const adjective1 = chooseRandomAdjective();
const adjective2 = chooseRandomAdjective();
const verb1 = chooseRandomVerb();
const verb2 = chooseRandomVerb();
const noun1 = chooseRandomNoun();
const noun2 = chooseRandomNoun();


// Story templates inserted into an array that we will choosen from at random

const story1 = `It was a ${adjective1}, cold November day. I woke up to the ${adjective2} smell of ${noun1} roasting in the kitchen downstairs. I ${verb1} down the stairs to see if I can help ${verb2} the dinner. Only to find millions of ${noun2}s had invaded my house.`;
const story2 = `Once there was a ${noun1} who only did things that made them ${adjective1}. They loved to ${verb1} and ${verb2}. One day they met a ${adjective2} ${noun2} and they fell in love.`;
const story3 = `I was three months out of work when I asked my wife how to water my ${noun1}. She said \"You don\'t need to water that, you just need to feed it ${adjective1} ${noun2} every time you ${verb1}. So every time I ${verb1}, I put ${adjective2} ${noun2} on my wife\'s bed.`;
const stories = [story1, story2, story3];



// This function chooses a random story template from the stories array

function chooseRandomStory() {
    let randomStoryNumber = Math.floor(Math.random() * stories.length);
    return stories[randomStoryNumber];
}



// Log random story to console

console.log(chooseRandomStory());