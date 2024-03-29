//backup 'test.js' m hai...................................................
const { app, BrowserWindow } = require('electron');
const { json } = require('express');
const { table, log } = require('console');
const mysql = require('mysql2');
// let matchedList = [];
let dest = [];
let transport_fee = [];
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 375,
    height: 667,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    },
  });
  mainWindow.loadFile("student_enquiry_form.html");
}
converttoJson("akash kumar",0);
///////////////////////////////////////////////////////////////////////////////////
function converttoJson(name, flag) {
  document.getElementById('notFound').innerHTML = "Loading..."; 
  var connection = mysql.createConnection({
    host: '89.117.188.154',
    user: 'u932299896_eduware',
    password: 'Webgen@220310',
    database: 'u932299896_sisdb',
  });
  var i = 0;
  document.getElementById('notFound').style.color = 'black';
  var form = document.querySelector(".form").style.display = 'none';
  const tableContainer = document.getElementById('table-container').style.display = '';
  name = name.toUpperCase();
  // var matchedList = [];
  // var dest = [];
  // var transport_fee = [];
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
    var query1 = 'SELECT admno,name, fname, class, section, roll, fmob, session, active,transport FROM tbl_admission WHERE session = "2023-2024" AND active = 1';
    // query is for the detail of students from table tbl_admission.
    getData(query1, flag, name);
  });
};
/////////////////////////////////////////////////////////////////////////////////
function getData(query1, flag, name) {
  let matchedList = [];
  console.log(matchedList);
  connection.query(query1, (err, jsonData) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      // connection.end();
      return;
    }

    if (jsonData.length > 0) {
      // console.log(JSON)
      if (flag === 0) {
        for (i = 0; i < jsonData.length; i++) {
          if (name === jsonData[i].name) {
            matchedList.push(jsonData[i])
            flag++;
          }
        }
        if (flag == 0) {
          document.getElementById('notFound').style.color = 'red';
          document.getElementById('notFound').innerHTML = "Data not found,Please Re-enter : ";
        } else {
          document.getElementById('notFound').innerHTML = "Click on your choice to see the Data";

        }
      }
      else if (flag === 1) {
        for (i = 0; i < jsonData.length; i++) {
          if (name === jsonData[i].fname) {
            matchedList.push(jsonData[i])
            flag++;
          }
        }
        if (flag == 1) {
          document.getElementById('notFound').style.color = 'red';
          document.getElementById('notFound').innerHTML = "Data not found,Please Re-enter : ";
        } else {
          document.getElementById('notFound').innerHTML = "Click on your choice to see the Data";

        }
      }
      else if (flag === 2) {
        for (i = 0; i < jsonData.length; i++) {
          if (name === jsonData[i].fmob) {
            matchedList.push(jsonData[i])
            flag++;
          }
        }
        if (flag == 2) {
          document.getElementById('notFound').style.color = 'red';
          document.getElementById('notFound').innerHTML = "Data not found,Please Re-enter : ";
        } else {
          document.getElementById('notFound').innerHTML = "Click on your choice to see the Data";

        }
      }
      createTable();
    };
  });
}

//////////////////////////////////////////////////////////////////

function showData() {
  var rows = document.querySelectorAll('table tr');

  rows.forEach(function (row, i) {
    row.addEventListener('click', function () {
      var form = document.querySelector(".form").style.display = 'none';
      const tableContainer = document.getElementById('table-container').style.display = 'none';
      const data = document.getElementById('data').style.display = '';
      connection.connect((err) => {
        if (err) {
          console.error('Error connecting to MySQL:', err);
          return;
        } else {
          console.log("CONNECTED TO DB");
        }
        document.querySelector('.name').innerHTML = `<strong class="pr-1">Name :</strong>${matchedList[i].name}`;
        document.querySelector('.ftname').innerHTML = `<strong class="pr-1">Father's Name :</strong>${matchedList[i].fname}`;
        document.querySelector('.fmob').innerHTML = `<strong class="pr-1">Mobile :</strong>${matchedList[i].fmob}`;
        document.getElementById('admno').innerHTML = `${matchedList[i].admno}`
        document.getElementById('class').innerHTML = `${matchedList[i].class}`
        document.getElementById('section').innerHTML = `${matchedList[i].section}`
        document.getElementById('roll').innerHTML = `${matchedList[i].roll}`
        document.getElementById('session').innerHTML = `${matchedList[i].session}`
        document.getElementById('transport').innerHTML = `${matchedList[i].transport}`
        if (matchedList[i].transport === "YES") {
          const query2 = `SELECT destination from tbl_stdtransdetail WHERE admno="${matchedList[i].admno}"`;
          // const query2 = `SELECT * from tbl_stdtransdetail`;

          connection.query(query2, (err, trans_dest) => {
            if (err) {
              console.error('Error querying MySQL:', err);
              // connection.end();
              return;
            } else {
              // dest = trans_dest;
              console.log(trans_dest);
              document.getElementById('destination').innerHTML = `${trans_dest[0].destination}`;
            }
          });
          // const query3 = `SELECT * from tbl_transportfee WHERE admno="${matchedList[i].admno}"`;
          const query3 = `SELECT * from tbl_transportfee WHERE admno="${matchedList[i].admno}"`;
          connection.query(query3, (err, trans_fee) => {
            if (err) {
              console.error('Error querying MySQL:', err);
              // connection.end();
              return;
            } else {
              transport_fee = trans_fee;
              document.getElementById('transport_fee').innerHTML = `${trans_fee[0].apr}`
            }
          });
        } else if (matchedList[i].transport === "NO") {
          document.getElementById('transport_fee').innerHTML = ``;
          document.getElementById('destination').innerHTML = ``;
        }
      });
    });
  });
}
//////////////////////////////////////////////////////////////////
function createTable() {
  var tableContainer = document.getElementById("table-container");

  var newTable = document.createElement("table");
  newTable.id = "list";
  newTable.style.border = "1px solid black";
  for (i = 0; i < matchedList.length; i++) {
    var row = newTable.insertRow();
    row.classList.add("table-row");
    row.id = "row" + i;
    row.innerHTML = `Name : ${matchedList[i].name}<br>Father's Name : ${matchedList[i].fname}<br>Mobile : ${matchedList[i].fmob}<br>_______________________________________`;
  }
  tableContainer.appendChild(newTable);
  showData();
}
// ////////////////////////////////////////////////////////////////
function goBack() {
  var form = document.querySelector(".form").style.display = 'none';
  const tableContainer = document.getElementById('table-container').style.display = '';
  const data = document.getElementById('data').style.display = 'none';
}
//////////////////////////////////////////////////////////////////////
function goFirst() {
  var form = document.querySelector(".form").style.display = '';
  const tableContainer = document.getElementById('table-container').style.display = 'none';
  const data = document.getElementById('data').style.display = 'none';
  var list = document.getElementById('list');
  list.remove();
  var inputs = document.querySelectorAll(".input");
  inputs.forEach(function (input) {
    input.value = "";
  })
}
// app.whenReady().then(createWindow);