let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

let agree = () => { alert("You agreed.")}
let cancel = () => { alert("You canceled the execution.")}

ask('Do you agree?', agree, cancel)
