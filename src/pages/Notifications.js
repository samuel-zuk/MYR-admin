import React from 'react';
import {
    List,
    Datagrid,
    EmailField,
    TextField,
    BooleanField,
    DateField,
    DateInput,
    BooleanInput,
    TextInput,
    DisabledInput,
    SimpleList,
    EditButton,
    Toolbar,
    SaveButton,
    Edit,
    Create,
    SimpleForm,
    Responsive,
    required,
    Filter
} from 'react-admin';

const NotifFilter = (props) => (
    <Filter {...props}>
        <TextInput source="title" />
        <DateInput source="endTime" showTime />
        <DateInput source="startTime" showTime />
    </Filter>
);

export const NotifList = (props) => (
    <List title="All notifications" {...props} bulkActionButtons={false} filters={<NotifFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => record.message}
                // tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="title" />
                    <TextField source="message" />
                    <DateField source="startTime" showTime />
                    <DateField source="endTime" showTime />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const NotifEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save Notification"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const NotifCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create Notification"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const NotifTitle = ({ record }) => {
    return <span>{record ? 
        (record.title ? record.title : '') + record.message
        :
        ''
    }</span>;
};

export const NotifEdit = (props) => (
    <Edit title={<NotifTitle />} {...props}>
        <SimpleForm toolbar={<NotifEditToolbar />}>
            <DisabledInput source="_id" />
            <TextInput source="title" />
            <TextInput source="message" validate={required()} />
            <DateInput source="startTime" />
            <DateInput source="endTime" validate={required()} />
        </SimpleForm>
    </Edit>
);

export const NotifCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<NotifCreateToolbar />}>
        <TextInput source="title" />
            <TextInput source="message" validate={required()} />
            <DateInput source="startTime" />
            <DateInput source="endTime" validate={required()} />
        </SimpleForm>
    </Create>
);