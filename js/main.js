/**
 * Ý tưởng:
 * Bấm nút thì đổi hình
 * -> Xử lý sự kiện onclick="action()" [x]
 * -> ham random lay so 1->6
 * -> neu x = 1 se hien dice1, x = 2 se hien dice2 ...
 * -> function action() {đổi hình}
 * -> Đổi hình: lấy img ra bằng id -> đổi img.src

 */

 function action() {
    // Ham random so
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Đổi hình
    document.querySelector("#dice-1").setAttribute("src", "./img/dice" + randomNumber1 + ".png");
    document.querySelector("#dice-2").setAttribute("src", "./img/dice" + randomNumber2 + ".png");
}