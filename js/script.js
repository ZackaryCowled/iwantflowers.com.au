var search = document.getElementById("search");
var sort = document.getElementById("sort");
var table = document.getElementById("product-table");

if(search.addEventListener != null) {
    search.addEventListener("keyup", OnSearchChange);
} else {
    //Will need to use attachEvent? for IE8< and moveRow for sorting/filtering but test first...
    console.warn("Support for filtering has not been implemented for your browser yet.");
}

if(sort.addEventListener != null) {
    sort.addEventListener("change", OnSortChange);
} else {
    console.warn("Support for sorting has not been implemented for your browser yet.");
}

function OnSearchChange(event) {
    var searchString = event.target.value.toLowerCase();

    if(searchString.length === 0) {
        for(var i = 0; i < table.rows.length; i++) {
            table.rows[i].classList.remove("hide");
        }
        return;
    }

    for(var i = 0; i < table.rows.length; i++) {
        if(table.rows[i].getAttribute("name").includes(searchString)) {
            table.rows[i].classList.remove("hide");
        } else {
            table.rows[i].classList.add("hide");
        }
    }
}

function OnSortChange(event) {
    switch(event.target.value) {
        case "high-to-low": SortHighToLow();
            break;
        case "low-to-high": SortLowToHigh();
            break;
        case "a-z": SortAscending();
            break;
        case "z-a": SortDescending();
            break;
        default: SortDefault();
            break;
    }
}

function SortHighToLow() {
    var highestValue, highestIndex, value;

    for(var i = 0; i < table.rows.length; i++) {
        highestValue = parseInt(table.rows[i].getAttribute("price"));
        highestIndex = i;

        for(var j = i + 1; j < table.rows.length; j++) {
            value = parseInt(table.rows[j].getAttribute("price"));

            if(value > highestValue) {
                highestValue = value;
                highestIndex = j;
            }
        }

        if(i < highestIndex) {
            table.rows[i].parentNode.insertBefore(table.rows[highestIndex], table.rows[i]);
        }
    }
}

function SortLowToHigh() {
    var lowestValue, lowestIndex, value;

    for(var i = 0; i < table.rows.length; i++) {
        lowestValue = parseInt(table.rows[i].getAttribute("price"));
        lowestIndex = i;

        for(var j = i + 1; j < table.rows.length; j++) {
            value = parseInt(table.rows[j].getAttribute("price"));

            if(value < lowestValue) {
                lowestValue = value;
                lowestIndex = j;
            }
        }

        if(i < lowestIndex) {
            table.rows[i].parentNode.insertBefore(table.rows[lowestIndex], table.rows[i]);
        }
    }
}

function SortAscending() {
    var lowestValue, lowestIndex, value;

    for(var i = 0; i < table.rows.length; i++) {
        lowestValue = table.rows[i].getAttribute("name");
        lowestIndex = i;

        for(var j = i + 1; j < table.rows.length; j++) {
            value = table.rows[j].getAttribute("name");

            if(value < lowestValue) {
                lowestValue = value;
                lowestIndex = j;
            }
        }

        if(i < lowestIndex) {
            table.rows[i].parentNode.insertBefore(table.rows[lowestIndex], table.rows[i]);
        }
    }
}

function SortDescending() {
    var highestValue, highestIndex, value;

    for(var i = 0; i < table.rows.length; i++) {
        highestValue = table.rows[i].getAttribute("name");
        highestIndex = i;

        for(var j = i + 1; j < table.rows.length; j++) {
            value = table.rows[j].getAttribute("name");

            if(value > highestValue) {
                highestValue = value;
                highestIndex = j;
            }
        }

        if(i < highestIndex) {
            table.rows[i].parentNode.insertBefore(table.rows[highestIndex], table.rows[i]);
        }
    }
}

function SortDefault() {
    var lowestValue, lowestIndex, value;

    for(var i = 0; i < table.rows.length; i++) {
        lowestValue = parseInt(table.rows[i].getAttribute("order"));
        lowestIndex = i;

        for(var j = i + 1; j < table.rows.length; j++) {
            value = parseInt(table.rows[j].getAttribute("order"));

            if(value < lowestValue) {
                lowestValue = value;
                lowestIndex = j;
            }
        }

        if(i < lowestIndex) {
            table.rows[i].parentNode.insertBefore(table.rows[lowestIndex], table.rows[i]);
        }
    }
}