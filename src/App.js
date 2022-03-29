// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList,PostEdit,PostCreate} from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import authProvider from './authProvider';


const Dashboard = () => (
  <Card>
      <CardHeader title="Welcome to the administration" />
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
  </Card>
);

// curl https://jsonplaceholder.typicode.com/users/2
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
      <Admin dashboard={Dashboard}  authProvider={authProvider} dataProvider={dataProvider}>
          <Resource name="users" icon={UserIcon} list={UserList} />
          <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate}/>
      </Admin>
  );

export default App;