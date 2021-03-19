const execSync = require('child_process').execSync; 
const file = require('fs');

let state = execSync("$?")
if (state != 0){
    let payloadFail = [{
        "eventType":"Commit",
        "pass":false,
    }];
    process.env.PAYLOAD = JSON.stringify(payloadFail);
}

else {
    let payloadSuccess = [{
        "eventType":"Commit",
        "pass":true,
    }];
    process.env.PAYLOAD = JSON.stringify(payloadSuccess);
}
