const execSync = require('child_process').execSync; 
const file = require('fs');

let state = execSync("$?")
if (state != 0){
    let payloadFail = [{
        "eventType":"Commit",
        "pass":false,
    }];
    file.writeFileSync("event.json", JSON.stringify(payloadFail))
}

else {
    let payloadSuccess = [{
        "eventType":"Commit",
        "pass":true,
    }];
    file.writeFileSync("event.json", JSON.stringify(payloadSuccess))
}
