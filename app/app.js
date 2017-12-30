var POP_TEAM_CRASH_STORAGE_KEY = "POP_TEAM_CRASH_STORAGE";
var POP_TEAM_CRASH_STORAGE = JSON.stringify({
    boardName: "TS房"
});

// init
if (!localStorage.getItem(POP_TEAM_CRASH_STORAGE_KEY)) {
    localStorage.setItem(POP_TEAM_CRASH_STORAGE_KEY, POP_TEAM_CRASH_STORAGE);
}


function get() {
    return JSON.parse(localStorage.getItem(POP_TEAM_CRASH_STORAGE_KEY));
}

function save(key, value) {
    var items = get();
    console.log(items)
    if (!items.hasOwnProperty(key)) {
        console.error("Provided key is not exist in storage.")
    }

    items[key] = value;

    localStorage.setItem(POP_TEAM_CRASH_STORAGE_KEY, JSON.stringify(items));
}
