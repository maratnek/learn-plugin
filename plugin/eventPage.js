var contextMenuItem = {
    "id": "remember",
    "title": "Reminder",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem, ()=> {
    console.log('Context menu create');
});

chrome.contextMenus.onClicked.addListener((clickData) => {
    console.log('Add listener ', clickData.menuItemId);
    let chStorage = chrome.storage.sync;
    console.log(chStorage);
    console.log(clickData.selectionText);
});

// function isInt(value) {
//     return !isNaN(value) && 
//     parseInt(Number(value)) == value && 
//     !isNaN(parseInt(value, 10));
// }

// chrome.contextMenus.onClicked.addListener((clickData)=> {
//     console.log('Add listener');
//     if (clickData.menuItemId == "spendMoney" && clickData.selectionText){
//         if (isInt(clickData.selectionText)) {
//             chrome.storage.sync.get(['total', 'limit'], function(budget){
//                 let newTotal = 0;
//                 if (budget.total) {
//                     newTotal+=parseInt(budget.total);
//                 }
//                 newTotal += parseInt(clickData.selectionText);
//             });
//         }
//     }

// });