const users = [
    { username: "Michael", password: "0219", displayName: "米迦勒" },
    { username: "Gabriel", password: "0929", displayName: "加百列" },
    { username: "Raphael", password: "1024", displayName: "拉貴爾" }
];

function login() {
    const inputUser = document.getElementById('username').value.trim();
    const inputPass = document.getElementById('password').value.trim();
    const found = users.find(user => user.username === inputUser && user.password === inputPass);

    if (found) {
        document.getElementById('login').classList.add('hidden');
        document.getElementById('market').classList.remove('hidden');
        document.getElementById('loginMessage').textContent = "";

        // 顯示中文名
        document.getElementById('welcomeUser').textContent = `歡迎回來，${found.displayName}`;
    } else {
        document.getElementById('loginMessage').textContent = "帳號或密碼錯誤。";
    }
}

function enterDeeper() {
    const specialCode = document.getElementById('specialCode').value;
    const correctCode = "Judgment"; // 第二層密碼
    if (specialCode === correctCode) {
        alert('你再找我?\n為甚麼要找我?\n你的目的是甚麼?\n去尋找我的接頭人\n他會告訴你 我的正確位置');
        window.location.href = 'https://youtu.be/3rOdyNavb8Y';
    } else {
        document.getElementById('secretMessage').textContent = "代碼錯誤，請勿亂試。";
    }
}

function showOutOfStock(button) {
    const itemDiv = button.parentElement;
    const messageDiv = itemDiv.querySelector('.buy-message');
    messageDiv.textContent = "無庫存";
}
