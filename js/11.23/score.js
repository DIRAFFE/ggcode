/**
 * @description 返回成绩表格 html 字符串
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 *  <tr>
        <td>学生姓名</td>
        <td>学生总分</td>
    </tr>
 */
function renderScoreTableRows(rows) {
  // your code here
  let renderStr = "";
  rows.forEach((element) => {
    renderStr =
      renderStr + `<tr> <td>${element[0]}</td> <td>${element[1]}</td> </tr>`;
  });
  return renderStr;
}
/**
 * @description 返回第一名列表 html 字符串
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 * <li>第一名：学生姓名，分数：学生分数</li>
 */
function printFirst(rows) {
  //your code here
  let firstStr = "";
  let maxScore = 0;
  let maxName = "";

  rows.forEach((element) => {
    const [name, score] = element;
    if (score > maxScore) {
      maxScore = score;
      maxName = name;
    }
  });
  firstStr = `<li>第一名：${maxName}，分数：${maxScore}</li>`;
  return firstStr;
}

/**
 * @description 返回最后一名列表 html 字符串
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>最后一名：学生姓名，分数：学生分数</li>
 */
function printLast(rows) {
  //you code here
  let lastStr = "";
  let minScore = 100;
  let minName = "";

  rows.forEach((element) => {
    const [name, score] = element;
    if (score <= minScore) {
      minScore = score;
      minName = name;
    }
  });
  lastStr = `<li>最后一名：${minName}，分数：${minScore}</li>`;
  return lastStr;
}

/**
 * @description 返回平均分 html 字符串
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>平均分:平均分分数</li>
 */
function printAverage(rows) {
  // your code here
  let averStr = "";
  let countNum = 0;
  let sumNum = 0;

  rows.forEach((element) => {
    const [, score] = element;
    sunNuM = +score;
    countNum++;
  });
  averStr = `<li>平均分:${sumNum / countNum}</li>`;
  return averStr;
}
