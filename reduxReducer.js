let currrentStatus = 0;
console.log("Current Status : ", currrentStatus);

function changeStatus(status, action) {
    if (action.type == 'INCREMENT') {
        return status + 1;
    }
    else if (action.type == 'DECREMENT') {
        return status - 1;
    }
}

currrentStatus = changeStatus(currrentStatus, { type: "INCREMENT" });
console.log(currrentStatus);

currrentStatus = changeStatus(currrentStatus, {type : 'DECREMENT'});
console.log(currrentStatus);