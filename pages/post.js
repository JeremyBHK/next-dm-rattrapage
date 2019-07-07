import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import "../style/scss/index.scss";

const Post = props => {
    let i = 0;
    return (
        <Layout>
            <h1>Single Post Page</h1>
            <br /><br />
            <div className="bloc-container-post">
                <h2 className="single-post-id">Post: {props.data.id}</h2>
                <p><i>{props.data.title}</i></p>
                <p>{props.data.body}</p>
                <br /><br />
                <h2 className="single-post-comm">Commentaires :</h2>
                <div>
                    {props.comm_data.map(e => 
                        <div className="bloc-comm">
                            <div>
                                <p>{e.name}</p>
                                <p>{e.body}</p>
                            </div>
                            <div>
                                <br/>
                                <Link as={`/user/${props.user[i].id}`} href={`/user?id=${props.user[i].id}`}>
                                    <p>Posté par : <i className="username">{props.user[i++].name}</i></p>
                                </Link>
                            </div>
                            <br/>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
//   api post
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
//   api comm
  const comm_api = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  const comm_data = await comm_api.json()
//   api user
  const user_api = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  const user = await user_api.json()

  console.log({comm_data});

  return { data, comm_data, user };
};

export default Post;