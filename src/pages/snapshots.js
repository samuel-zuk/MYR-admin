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
    Show,
    Filter,
    BooleanInput,
    ShowButton,
    TextInput
} from 'react-admin';

const SnapshotFilter = (props) => (
    <Filter {...props}>
        {/* <TextInput label="Search" source="q" alwaysOn /> */}
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
        {/* <ReferenceInput label="User" source="user" reference="snapshots" allowEmpty>
            <SelectInput optionText="user" source="user" />
        </ReferenceInput> */}
        {/* <ReferenceInput label="Snapshot User" source="user" reference="snapshots" field="user" >
            <SelectInput optionText="user" source="user" />
        </ReferenceInput> */}
        {/* <SelectInput source="user" choices="user" reference="snapshots" /> */}
        <TextInput source="user" />
        <BooleanInput source="error" />
        {/* <DateInput source="timestamp" /> */}
    </Filter>
);

export const SnapshotList = (props) => (
    <List title="Snapshots" {...props} bulkActionButtons={false} filters={<SnapshotFilter />}>
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
                    <ShowButton />
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