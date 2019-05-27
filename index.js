// 
// let arr = [1,2,3,4,5,6];
// for(let i=0;i<arr.length;i++)
// {
//     let student = arr[i];
//     console.log(student);
// }
// let scanf = require('scanf');
// console.log('欢迎进入xxxx系统');
// let arr = [];
// while(1)
// {
//     console.log('1---添加一个数字');
//     console.log('2---删除最后一个数字');
//     console.log('3---显示全部数字');
//     console.log('4---退出');
//     let con = scanf('%d');
//     if(con===1)
//     {
//         console.log('1---添加一个数字');
//         let x = scanf('%d');
//         arr.push(x);
//         console.log('添加成功');
//         scanf('%d');
//     }
//     if(con===2)
//     {
//         console.log('2---删除最后一个数字');
//         arr.pop();
//         console.log('删除成功');
//         scanf('%d');
//     }
//     if(con===3)
//     {
//         console.log('3---显示全部数字');
//         for(let i=0;i<arr.length;i++)
//         {
//             let student = arr[i];
//             console.log(student);
//         }
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===4)
//     {
//         console.log('退出');
//         break;
//     }

// }

// let student ={
//     a:2,
//     b:8,
// }
// console.log(student);
// let scanf = require('scanf');
// console.log('欢迎进入坐标管理系统');
// let arr = [];
// while(1){
    
//     console.log('1---添加坐标');
//     console.log('2---删除坐标');
//     console.log('3---显示全部坐标');
//     console.log('4---退出');
//     let con=scanf('%d');
//     if(con===1){
//         console.log('1---添加坐标');
//         console.log('请输入横坐标');
//         let x=scanf('%d');
//         console.log('请输入纵坐标');
//         let y=scanf('%d');
//         let zuobiao={
//             'x':x,
//             'y':y,
//         }
//         arr.push(zuobiao);
//         console.log('坐标添加成功');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---删除坐标');
//         arr.pop();
//         console.log('坐标删除成功');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---显示全部坐标');
//         for(let i=0;i<arr.length;i++){
//             let student =arr[i];
//             // console.log(student);
//             console.log(`第${i+1}坐标为(${student.x},${student.y})`);
//         }
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('4---退出');
//         break;
//     }

// }

let scanf = require('scanf');
console.log('欢迎进入学生成绩管理系统');
let arr = [];
while(1){
    
    console.log('1---添加学生成绩');
    console.log('2---删除最后学生成绩');
    console.log('3---显示全部学生成绩');
    console.log('4---退出');
    let con=scanf('%d');
    if(con===1){
        console.log('1---添加学生成绩');
        console.log('请输入学生姓名');
        let name=scanf('%s');
        console.log('请输入语文成绩');
        let yuwen=scanf('%d');
        console.log('请输入数学成绩');
        let shuxue=scanf('%d');
        let chengji={
            'name':name,
            'yuwen':yuwen,
            'shuxue':shuxue,
        }
        arr.push(chengji);
        console.log('学生成绩添加成功');
        scanf('%d');
    }
    if(con===2){
        console.log('2---删除最后学生成绩');
        arr.pop();
        console.log('学生成绩删除成功');
        scanf('%d');
    }
    if(con===3){
        console.log('3---显示学生成绩');
        for(let i=0;i<arr.length;i++){
            let chengji =arr[i];
            // console.log(student);
            console.log(`学生：${chengji.name}\n语文：${chengji.yuwen}\n数学：${chengji.shuxue}`);
        }
        console.log('点击回车继续');
        scanf('%d');
    }
    if(con===4){
        console.log('4---退出');
        break;
    }

}

