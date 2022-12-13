function createEmployeeRecord(firstName,familyName,title,payPerHour){
let employee = {
  firstName: '',
  familyName: '',
  title: '',
  payPerHour: 0,
  timeInEvents: [],
  timeOutEvents: [],
}
}

function createEmployeeRecord(){
   
}

function createTimeInEvent(){
    const TimeIn = {
        type: '',
        hour: '',
        date: '',
    }
}

function createTimeOutEvent(){
    const TimeOut = {
        type: '',
        hour: '',
        date: '',
    }

function hoursWorkedOnDate(){

}

function wagesEarnedOnDate(){

}
function allWagesFor(){

}
function findEmployeeByFirstName(){

}
function calculatePayroll(){

}
}



const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

