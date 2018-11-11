import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    BooleanField,
    DateField,
    Responsive,
    SimpleList,
    SimpleShowLayout,
    Show
} from 'react-admin';

export const SnapshotList = (props) => (
    <List title="Snapshots" {...props} bulkActionButtons={false}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.user}
                    // secondaryText={record => `Time: ${record.timestamp}`}
                    secondaryText={record => `${new Date(record.timestamp).toLocaleDateString()} ${new Date(record.timestamp).toLocaleTimeString()}`}
                    //tertiaryText={record => `Error: ${record.error}`}
                    linkType="show"
                />
            }
            medium={
                <Datagrid>
                    <TextField source="user" />
                    <TextField source="text" />
                    <BooleanField source="error" />
                    <DateField source="timestamp" showTime />
                </Datagrid>
            }
        />
    </List>
);

export const SnapshotShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="user" />
            <TextField source="text" />
            <BooleanField source="error" />
            <DateField source="timestamp" showTime />
        </SimpleShowLayout>
    </Show>
);