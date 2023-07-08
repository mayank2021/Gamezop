import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading/Heading";
import UserContainer from "../components/UserContainer/UserContainer";

const getUserData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const Users = async () => {
  const userData = await getUserData();

  return (
    <Layout>
      <Heading heading="Users" />
      <UserContainer userData={userData} page="user" />
    </Layout>
  );
};

export default Users;
