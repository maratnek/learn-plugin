window.onload = ()=> {
    console.log('page onload');
};

let ul = document.getElementById('words');

let newWord;

let cards = document.getElementsByClassName('word-card');

console.log(cards);

for (const it of cards) {
    it.addEventListener('click',()=>{
        console.log('click ', it);
        it.innerHTML = 'change word';
    });
    it.addEventListener('mouseover',()=>{
        console.log('mouseover ', it);
    });
    it.classList.add('shake');
}

var dispWords = [];

function saveChrStore(new_word) {
    console.log("save new word ", new_word);
    dispWords.push(new_word);
    chrome.storage.sync.set({ 'visibleWords': dispWords });
    // chrome.storage.sync.get('visibleWords', (words)=>{
    //     console.log(dispWords, words);
    //     dispWords.push(new_word);

    // });

}

addNewTagToList('My simple text');

// storage test get set
let storageTest = () => {
    console.log('storage test');

    let data = {2:"new words"};
    let id = 2;
    let value = "word value";
    data[id] = value;
    console.log(data, data[0]);
    chrome.storage.sync.set(data, function() {
        chrome.storage.sync.get(null, (words)=>{
            console.log(words);
            //dispWords.push(new_word);
            addNewTagToList(words); 
        });
    });


    // let key1 = 'key_k';
    // let value = 'meaning44';

    // chrome.storage.sync.set({key1: value}, function() {
    //     console.log('Value is set to ' + value);
    //   });
    
    //   chrome.storage.sync.get(key1, function(result) {
    //     console.log('Value currently is ',result, result.key );
    //       addNewTagToList(result.key_k);
    //   });
    
    // let key = 'key1';
    // chrome.storage.sync.set({key: 'firstword'}, function() {
    //     console.log('Value is set to ' + 'first word');
    //     chrome.storage.sync.get(key, (result)=>{
    //         console.log('read data from storage', result, result[key]);
    //         addNewTagToList(result[key]);
    //     });

    // });
    // chrome.storage.sync.get(key, (result)=>{
    //     console.log('read data from storage', result, result[key]);
    //     addNewTagToList(result.key1);
    // });
};

storageTest();

function addNewTagToList(text) {
    console.log("Add new tag to list");
    let word = document.createElement("div");
    word.setAttribute('class', 'word-card');
    word.innerHTML = text;
    let node = document.createElement("li");
    node.appendChild(word);
    document.getElementById("words").appendChild(node);
    return word.innerHTML;
}

document.querySelector("#add-sbm").addEventListener("click", (event) => {
    let text =  document.getElementById("new-word").value;
    let newWord = addNewTagToList(text);
    saveChrStore(newWord);
    event.preventDefault();
}, false);

