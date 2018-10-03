import React from 'react';
import { List, Datagrid, EmailField, TextField, BooleanField, DateField } from 'react-admin';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="name" />
            <EmailField source="email" />
            <BooleanField source="subscribed" />
            <BooleanField source="admin" />
            <DateField source="last_login" showTime />
            <DateField source="user_created" showTime />
        </Datagrid>
    </List>
);