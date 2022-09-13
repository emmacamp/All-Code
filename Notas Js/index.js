// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr = [11, 12, ...arr];

// const obj = {
// 	name: "Juan",
// 	age: 30,
// };
// const list = [1, 2, 3, 4];
// const [, , ...newArray] = list;
// let [a, b, c] = list;
// // console.log(newArray);

// function sum(...numbers) {
// 	console.log(numbers);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// const newObj = {
// 	...obj,
// 	altura: "20cm",
// };

// console.log(newObj);




function requestHandler(req,res){
    User.findById(req.userId)
        .then(function(user){
            return Tasks.findById(user.tasksId)
        })
        .then(function(tasks){
            tasks.completed=true;
                
        })
        .catch(function(error){
            res.send(error);
        })

}







