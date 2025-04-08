/**
 * This JavaScript file contains several issues and areas for improvement:
 * - Inconsistent coding style
 * - Inefficient code patterns
 * - Potential bugs
 * - Poor error handling
 * - Lack of comments in some areas
 */

// Global variables
var userName = "John";
let userAge = 30;
const API_URL = "https://api.example.com";

// Function to fetch user data
function fetchUserData(userId) {
    // No error handling
    return fetch(API_URL + '/users/' + userId)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

// Inconsistent function style (arrow function)
const displayUserInfo = (user) => {
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Age: ${user.age}`);
}

// Function with too many parameters
function updateUserProfile(name, email, age, address, phone, company, title, department, startDate, salary) {
    // Implementation
    var userData = {
        name: name,
        email: email,
        age: age,
        address: address,
        phone: phone,
        company: company,
        title: title,
        department: department,
        startDate: startDate,
        salary: salary
    };
    
    // Inefficient string concatenation in a loop
    var userDataString = "";
    for (var key in userData) {
        userDataString = userDataString + key + ": " + userData[key] + ", ";
    }
    
    return userDataString;
}

// Callback hell example
function processUserData(userId, callback) {
    fetchUserData(userId, function(userData) {
        validateUser(userData, function(isValid) {
            if (isValid) {
                updateUser(userData, function(updatedUser) {
                    notifyUser(updatedUser, function(notificationSent) {
                        logActivity(updatedUser, function(loggedActivity) {
                            callback(null, loggedActivity);
                        });
                    });
                });
            } else {
                callback("Invalid user data", null);
            }
        });
    });
}

// Duplicate code
function calculateTax(amount, rate) {
    return amount * rate / 100;
}

function calculateDiscount(amount, rate) {
    return amount * rate / 100;
}

// Inefficient array manipulation
function findUserById(users, id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    return null;
}

// Poor variable naming
function calc(a, b) {
    return a + b;
}

// Inconsistent indentation and formatting
function   formatDate(date) {
  const day = date.getDate();
    const month = date.getMonth() + 1;
        const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

// Potential memory leak (event listener not removed)
function setupEventListeners() {
    const button = document.getElementById('submit-button');
    button.addEventListener('click', function() {
        console.log('Button clicked');
    });
}

// Unused parameters
function logMessage(message, level, timestamp) {
    console.log(message);
}

// Inefficient DOM manipulation
function updateUserList(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    
    for (let i = 0; i < users.length; i++) {
        userList.innerHTML += `<li>${users[i].name}</li>`;
    }
}

// Lack of error handling
function divideNumbers(a, b) {
    return a / b;
}

// Global event handlers
window.onload = function() {
    console.log('Page loaded');
    setupEventListeners();
};

// Inconsistent return statements
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Complex conditional
function getUserStatus(user) {
    if (user.isActive && user.emailVerified && !user.isBanned && (user.role === 'admin' || user.role === 'moderator' || (user.role === 'user' && user.hasSubscription))) {
        return 'approved';
    } else {
        return 'pending';
    }
}

// Export module
module.exports = {
    fetchUserData,
    displayUserInfo,
    updateUserProfile,
    processUserData,
    calculateTax,
    findUserById,
    formatDate
};
