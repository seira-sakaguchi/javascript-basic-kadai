//2023年8月22日の形式(現在の日付)


// const nowDate = new Date();
// const options = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// };


// console.log(nowDate.toLocaleDateString(undefined, options));

const nowDate = new Date();


const year = nowDate.getFullYear();
const month = nowDate.getMonth()+1;
const day = nowDate.getDate();

console.log(`${year}年${month}月${day}日`);

