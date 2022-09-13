/* const user = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(users => users.forEach(user => {
            console.table({
                userId: user.userId,
                title: user.title
            })
        }))
}

user() */
/* 
async function users() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
}

users() */

try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
} catch (error) {
    console.log(error)

}





