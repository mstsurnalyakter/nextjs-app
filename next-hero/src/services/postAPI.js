export const getPosts = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json();
    return data;
}

export const getSinglePost = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = res.json();
    return data;
}