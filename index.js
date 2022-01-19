// Your code here
function createEmployeeRecord (record) {
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(records) {
    let temp = []
    records.forEach(element => temp.push(createEmployeeRecord(element)))
    return temp
}


function createTimeInEvent (employeeRecord, timeEvent) {
   let buildInTimeEvent = {
        type: 'TimeIn',
        date: timeEvent.split(' ')[0],
        hour: parseInt(timeEvent.split(' ')[1])  
    }
    employeeRecord.timeInEvents.push(buildInTimeEvent)
    return  employeeRecord
}

function createTimeOutEvent (employeeRecord, timeEvent) {
    let buildOutTimeEvent = {
         type: 'TimeOut',
         date: timeEvent.split(' ')[0],
         hour: parseInt(timeEvent.split(' ')[1])
     }
     employeeRecord.timeOutEvents.push(buildOutTimeEvent)
     return  employeeRecord
 }

 function hoursWorkedOnDate(employee, date){
    //return ((employee.timeOutEvents[0].hour - employee.timeInEvents[0].hour) / 100)
    let timeIn = 0
    let timeOut = 0
    
    for (let each of employee.timeInEvents) {
        if (each.date == date) {timeIn = each.hour}
    }
    for (let each of employee.timeOutEvents) {
        if (each.date == date) {timeOut = each.hour}
    }
    return (timeOut - timeIn) / 100


}

 function wagesEarnedOnDate(employee, date){
    return (employee.payPerHour * hoursWorkedOnDate(employee, date))
 }

 function allWagesFor(employee){
    // let inTimes = []
    // let outTimes = []
    //let timeHolder = []
    let totalHours = 0

    for (var each of employee.timeInEvents) {
        totalHours += hoursWorkedOnDate(employee, each.date)
    }
      
    return ((totalHours) * employee.payPerHour)
 }


 function calculatePayroll (employeeArray) {
    let totalPay = 0
    for (let eachEmployee of employeeArray) {
        totalPay += allWagesFor(eachEmployee)
    }

    return totalPay

 }