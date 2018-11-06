import React from 'react';
import { Admin, Resource } from 'react-admin';
import { LessonList, LessonEdit } from './lessons';
import { UserList } from './users';
import { SnapshotList } from './snapshots';
//import Icon from '@material-ui/core/Icon';
import LessonIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import SnapshotIcon from '@material-ui/icons/CameraEnhance'
import Dashboard from './dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="lessons" list={LessonList} edit={LessonEdit} icon={LessonIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="snapshots" list={SnapshotList} icon={SnapshotIcon} />
  </Admin>
);

export default App;