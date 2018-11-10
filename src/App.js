import React from 'react';
import { Admin, Resource } from 'react-admin';
import { CourseList, CourseEdit, CourseCreate } from './pages/courses';
import { LessonList, LessonEdit, LessonCreate } from './pages/lessons';
import { UserList, UserEdit, UserCreate } from './pages/users';
import { SnapshotList } from './pages/snapshots';
//import Icon from '@material-ui/core/Icon';
import CourseIcon from '@material-ui/icons/List';
import LessonIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import SnapshotIcon from '@material-ui/icons/CameraEnhance'
import Dashboard from './pages/dashboard';
import authProvider from './data_connections/authProvider';
import dataProvider from './data_connections/dataProvider';

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="courses" list={CourseList} edit={CourseEdit} create={CourseCreate} icon={CourseIcon} />
    <Resource name="lessons" list={LessonList} edit={LessonEdit} create={LessonCreate} icon={LessonIcon} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="snapshots" list={SnapshotList} icon={SnapshotIcon} />
  </Admin>
);

export default App;