import React from 'react';
import { Admin, Resource } from 'react-admin';
import { LessonList, LessonEdit, LessonCreate } from './lessons';
import { UserList } from './users';
import LessonIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="lessons" list={LessonList} edit={LessonEdit} create={LessonCreate} icon={LessonIcon} />
      <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

console.log(LessonList);

export default App;