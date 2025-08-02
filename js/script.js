const users = [
    { username: "Michael", password: "0219" },
    { username: "Gabriel", password: "0929" },
    { username: "Raphael", password: "1024" }
];

function login() {
    const inputUser = document.getElementById('username').value.trim();
    const inputPass = document.getElementById('password').value.trim();
    const found = users.find(user => user.username === inputUser && user.password === inputPass);

    if (found) {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('market').classList.remove('hidden');
        document.getElementById('loginMessage').textContent = "";
    } else {
        document.getElementById('loginMessage').textContent = "帳號或密碼錯誤。";
    }
}

function enterDeeper() {
    const specialCode = document.getElementById('specialCode').value;
    const correctCode = "Redemption"; // 單一第二層密碼
    if (specialCode === correctCode) {
        alert('你再找我?\n為甚麼要找我?\n你的目的是甚麼?\n去尋找我的接頭人\n他會告訴你 我的正確位置');
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    } else {
        document.getElementById('secretMessage').textContent = "代碼錯誤，請勿亂試。";
    }
}

function showOutOfStock(button) {
    const itemDiv = button.parentElement;
    const messageDiv = itemDiv.querySelector('.buy-message');
    messageDiv.textContent = "無庫存";
}