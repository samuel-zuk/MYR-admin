import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    DateTimeInput,
    TextInput,
    DisabledInput,
    SimpleList,
    EditButton,
    DeleteButton,
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
        <DateTimeInput source="endTime" showTime />
        <DateTimeInput source="startTime" showTime />
    </Filter>
);

export const NotifList = (props) => (
    <List {...props} bulkActionButtons={false} filters={<NotifFilter />}>
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
                    <DeleteButton />
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
        (record.title ? 
            <React.Fragment>
                <strong>{record.title + ": "}</strong>{record.message}
            </React.Fragment> : record.message) 
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
            <TextInput label="Background Color" source="color" type="color" />
            <TextInput label="Font Color" source="fontColor" type="color" />
            <TextInput label="Link Button Text" source="linkText" />
            <TextInput label="Link Button URL" source="link" />
            <DateTimeInput source="startTime" />
            <DateTimeInput source="endTime" validate={required()} />
        </SimpleForm>
    </Edit>
);

export const NotifCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<NotifCreateToolbar />}>
            <TextInput source="title" />
            <TextInput source="message" validate={required()} />
            <TextInput label="Background Color" source="color" type="color" validate={required()} />
            <TextInput label="Font Color" source="fontColor" type="color" validate={required()} />
            <TextInput label="Link Button Text" source="linkText" />
            <TextInput label="Link Button URL" source="link" />
            <DateTimeInput source="startTime" />
            <DateTimeInput source="endTime" validate={required()} />
        </SimpleForm>
    </Create>
);