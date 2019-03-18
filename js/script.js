var search = document.getElementById("search");
var sort = document.getElementById("sort");
var table = document.getElementById("product-table");

if(search.addEventListener != null) {
    search.addEventListener("keyup", OnSearchChange);
} else {
    search.attachEvent("onkeyup", OnSearchChange);
}

if(sort.addEventListener != null) {
    sort.addEventListener("change", OnSortChange);
} else {
    sort.attachEvent("onchange", OnSortChange);
}

function OnSearchChange(event) {
    var target = event.srcElement || event.target;
    var searchString = target.value.toLowerCase();

    for(var i = 0; i < table.rows.length; i++) {
        if(table.rows[i].getAttribute("name").indexOf(searchString) > -1) {
            var classIndex = table.rows[i].className.indexOf(" hide");
            if(classIndex > -1) {
                table.rows[i].className = (table.rows[i].className.substring(0, classIndex) + table.rows[i].className.substring(classIndex + 4));
            }
        } else {
            if(table.rows[i].className.indexOf(" hide") === -1) {
                table.rows[i].className += " hide";
            }
        }
    }
}

function OnSortChange(event) {
    switch(event.srcElement.value || event.target.value) {
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