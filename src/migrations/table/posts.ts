import Posts from '../../models/posts';

console.log("======Create users Table======");
const create_table_users = async() => {
    await Posts.sync({force : true})
        .then(() => {
            console.log("✅Success Create users Table");
        })
        .catch((err) => {
            console.log("❗️Error in Create users Table : ", err);
        })
}

create_table_users();
