//利用通过 Object.defineProperty()来实现简易的双向数据绑定

//创建person对象
var person = { name: "" };
function changeName() {
  //修改person对象中的name的值为输入框中的值
  let i = Object.defineProperties(person, {
    //"_g": { get: function () { return this.a + 1; } },
    _s: {
      set: function (x) {
        this.name = x;
      },
    },
  });
  person._s = document.getElementById("ipt").value;
  console.log(person.name);
}

// 这里实现双向绑定，监听name值变化，input也跟着变化

// Object.defineProperty(person, "name", {
//   get fn() {},
//   set fn(_n) {
//     document.getElementById(_n).value = _n;
//     document.getElementById(h1ctt).innerHTML = _n;
//   },
// });
// document.addEventListener("keyup", function (e) {
//   person.fn = e.target.value;
// });

function changeInput() {
  //按钮事件 修改person对象中的name的值为rose
  person._s = "rose";
  console.log(person.name);
}
