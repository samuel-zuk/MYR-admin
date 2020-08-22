import React from 'react';
import { Admin, Resource } from 'react-admin';

import Dashboard from './pages/dashboard';
import authProvider from './data_connections/authProvider';
import dataProvider from './data_connections/dataProvider';
import loginPage from './pages/LoginPage'
import { SceneList, SceneShow } from './pages/Scenes';
import { CourseList, CourseEdit, CourseCreate } from './pages/courses';
import { ReferenceExamplesList, ReferenceExamplesEdit, ReferenceExamplesCreate } from './pages/referenceExamples';
import { UserList, UserEdit, UserCreate } from './pages/users';
import { SnapshotList, SnapshotShow } from './pages/snapshots';
import { NotifList, NotifEdit, NotifCreate } from './pages/Notifications';
import { CollectionList, CollectionShow } from './pages/Collections';
import { GoogleLoginList, GoogleLoginShow } from './pages/GoogleLogins';

import CourseIcon from '@material-ui/icons/List';
import RefExIcon from '@material-ui/icons/Help';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import SnapshotIcon from '@material-ui/icons/CameraEnhance';
import CollectionIcon from '@material-ui/icons/Filter';
import SceneIcon from '@material-ui/icons/Landscape';
import NotificationIcon from '@material-ui/icons/PriorityHigh';
import GoogleLoginIcon from '@material-ui/icons/Face';


const App = () => (
  <Admin dashboard={Dashboard} loginPage={loginPage} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="scenes" list={SceneList} show={SceneShow} icon={SceneIcon} />
    <Resource name="collections" list={CollectionList} show={CollectionShow} icon={CollectionIcon} />
    <Resource name="courses" list={CourseList} edit={CourseEdit} create={CourseCreate} icon={CourseIcon} />
    <Resource name="referenceExamples" list={ReferenceExamplesList} edit={ReferenceExamplesEdit} create={ReferenceExamplesCreate} icon={RefExIcon} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="googlelogins" list={GoogleLoginList} show={GoogleLoginShow} icon={GoogleLoginIcon} />
    <Resource name="notifications" list={NotifList} edit={NotifEdit} create={NotifCreate} icon={NotificationIcon} />
    <Resource name="snapshots" list={SnapshotList} show={SnapshotShow} icon={SnapshotIcon} />
  </Admin>
);

export default App;