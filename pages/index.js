import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import "../style/scss/index.scss";

const Index = props => (
  <Layout>
    {console.log(props)}
    <h1>Homepage</h1>
    <h2>List des posts :</h2>
    <ul>
      {props.data.map(post => (
        <li key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
            <div className="post">
                <h2>Post : {post.id}</h2>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);
//   console.log({data})

  return {data};
};

export default Index;




// import Link from 'next/link'
// import Router from 'next/router'
// import fetch from 'isomorphic-unfetch'
// export default class App extends React.Component {
//   static async getInitialProps({ query: { page = 1 } }) {
//     const r = await fetch(
//       `https://jsonplaceholder.typicode.com/posts&page=${page}`
//     )
//     const d = await r.json()

//     console.log({d})

//     return {
//       items: d.items,
//       page: parseInt(page, 10)
//     }
//   }

//   render() {
//     return (
//       <div>
        // <ul>
        //   {this.props.items.map(({ title, id }) => (
        //     <li key={id}>{title}</li>
        //   ))}
        // </ul>
//         <button
//           onClick={() => Router.push(`/?page=${this.props.page - 1}`)}
//           disabled={this.props.page <= 1}
//         >
//           PREV
//         </button>
//         <button onClick={() => Router.push(`/?page=${this.props.page + 1}`)}>
//           NEXT
//         </button>
//         <Link href="/?page=1">
//           <a>First page</a>
//         </Link>
//       </div>
//     )
//   }
// }
