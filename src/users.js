import React from 'react';
import {
    List,
    Datagrid,
    EmailField,
    TextField,
    BooleanField,
    DateField,
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
    LongTextInput,
    FormDataConsumer
} from 'react-admin';

export const UserList = (props) => (
    <List title="All users" {...props} bulkActionButtons={false}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.email}
                // tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="name" />
                    <EmailField source="email" />
                    <BooleanField source="subscribed" />
                    <BooleanField source="admin" />
                    <DateField source="last_login" showTime />
                    <DateField source="user_created" showTime />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const UserEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save User"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const UserCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create User"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const UserTitle = ({ record }) => {
    return <span>User: {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm toolbar={<UserEditToolbar />}>
            <DisabledInput source="_id" />
            <TextInput source="name" />
            <TextInput source="email" type="email" />
            {/* <BooleanInput label="Update Password" source="UpdatePassword" />
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.UpdatePassword &&
                    <TextInput source="password" type="password" {...rest} />
                }
            </FormDataConsumer> */}
            <TextInput source="password" type="password" />
            <BooleanInput source="admin" />
            <BooleanInput source="subscribed" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<UserCreateToolbar />}>
            <TextInput source="name" />
            <TextInput source="email" type="email" />
            <TextInput source="password" type="password" />
            <BooleanInput source="admin" />
            <BooleanInput source="subscribed" />
        </SimpleForm>
    </Create>
);