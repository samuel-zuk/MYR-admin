import React from 'react';
import { Admin, Resource } from 'react-admin';
import { CourseList, CourseEdit, CourseCreate } from './pages/courses';
import { ReferenceExamplesList, ReferenceExamplesEdit, ReferenceExamplesCreate } from './pages/referenceExamples';
import { UserList, UserEdit, UserCreate } from './pages/users';
import { SnapshotList, SnapshotShow } from './pages/snapshots';
import { NotifList, NotifEdit, NotifCreate } from './pages/Notifications';
import CourseIcon from '@material-ui/icons/List';
import RefExIcon from '@material-ui/icons/Help';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import SnapshotIcon from '@material-ui/icons/CameraEnhance'
import Dashboard from './pages/dashboard';
import authProvider from './data_connections/authProvider';
import dataProvider from './data_connections/dataProvider';
import loginPage from './pages/LoginPage'
import { SceneList } from './pages/Scenes';

const App = () => (
  <Admin dashboard={Dashboard} loginPage={loginPage} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="courses" list={CourseList} edit={CourseEdit} create={CourseCreate} icon={CourseIcon} />
    <Resource name="referenceExamples" list={ReferenceExamplesList} edit={ReferenceExamplesEdit} create={ReferenceExamplesCreate} icon={RefExIcon} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="notifications" list={NotifList} edit={NotifEdit} create={NotifCreate} />
    <Resource name="snapshots" list={SnapshotList} show={SnapshotShow} icon={SnapshotIcon} />
    <Resource name="scenes" list={SceneList} />
  </Admin>
);

export default App;