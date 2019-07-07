import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import "../style/scss/index.scss";

const User = props => (
    <Layout>
        <br/><br/>
        <h1>Single User Page</h1>
        <div className="bloc-single-user">
            <p> Nom : <span className="username"><i>{props.data.name}</i></span></p>
            <p>Surnom : <span className="username">{props.data.username}</span></p>
            <p>Email : <span className="username">{props.data.email}</span></p>
            <p>Téléphone : <span className="username">{props.data.phone}</span></p>
            <p>Site internet : <span className="username">{props.data.website}</span></p>
        </div>
    </Layout>
)

User.getInitialProps = async function(context){
    const {id} = context.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return { data };
}

export default User;