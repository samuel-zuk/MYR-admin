import React from 'react';
import { List, Datagrid, TextField, BooleanField, DateField } from 'react-admin';

export const SnapshotList = (props) => (
    <List title="Snapshots" {...props}>
        <Datagrid>
            <TextField source="user" />
            <TextField source="text" />
            <BooleanField source="error" />
            <DateField source="timestamp" showTime />
        </Datagrid>
    </List>
);