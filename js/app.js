const btnSend = document.querySelector('.btn-send');
const inputValue = document.querySelector('.txt-input');
const area = document.querySelector('.message-box');
const user = document.querySelector('#user')
const userOne = document.querySelector('#user-one')
const userTwo = document.querySelector('#user-two')
const form = document.querySelector('#formInput')
const userTitle = document.querySelector('#user-title')



let user1Value = prompt('User 1: Please Enter Your Name!')
let user2Value = prompt('User 2: Please Enter Your Name!')



userOne.innerHTML = user1Value;
userTwo.innerHTML = user2Value;
userOne.value = user1Value
userTwo.value = user2Value



let sendMessage = () => {
    if (user1Value === null && user2Value === null) {
        user1Value = prompt('User 1: Please Enter Your Name!')
        user2Value = prompt('User 2: Please Enter Your Name!')
        userOne.innerHTML = user1Value;
        userTwo.innerHTML = user2Value;
        userOne.value = user1Value
        userTwo.value = user2Value
    } else {
        if (user.value === userOne.value && inputValue.value !== '') {
            const textBox = `<div class='message message-user-1'>
                                <span id="user-name-1">${userOne.value}</span>
                                 <p>${inputValue.value}</p>
                            </div>`;
            area.innerHTML += textBox;
            inputValue.value = '';
            userTitle.innerHTML = userOne.value
        } else if (user.value === userTwo.value && inputValue.value !== '') {
            const textBox = `<div class='message message-user-2'>
            <span id="user-name-2">${userTwo.value}</span>
             <p>${inputValue.value}</p>
        </div>`;
            area.innerHTML += textBox;
            inputValue.value = '';
            userTitle.innerHTML = userTwo.value

        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMessage()
})