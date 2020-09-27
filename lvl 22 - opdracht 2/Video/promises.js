const posts = [{
    title: 'Post One',
    body: 'Hi there, this is post one',
}, {
    title: 'Post Two',
    body: 'Hi there, this is post two',
}]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<h1>${post.title}</h1>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resoleve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resoleve()
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000);
    })
}

// createPost({
//         title: 'Post Three',
//         body: 'Hi there, this is post three',
//     }).then(getPosts)
//     .catch(err => console.log(err));

// // Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resoleve, reject) => {
//     setTimeout(resoleve, 2000, 'Goodbye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
//     console.log(values)
// })
//
//Async/ Await
// async function init() {
//     await createPost({
//         title: 'Post Three',
//         body: 'Hi there, this is post three',
//     });
//     getPosts();
// }

// init()

//Async/ Await / fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data)
}

fetchUsers()