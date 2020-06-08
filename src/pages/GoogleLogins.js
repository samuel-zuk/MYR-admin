import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    SimpleShowLayout,
    Show,
    ShowButton,
    TextInput,
    SimpleList,
    DeleteButton,
    Responsive,
    Filter
} from 'react-admin';

const GoogleLoginFilter = (props) => (
    <Filter {...props}>
        <TextInput source="_id" label="User ID" />
        <TextInput source="email" />
        <TextInput source="googleId" label="Google ID" />
    </Filter>
);

export const GoogleLoginList = (props) => (
    <List {...props} bulkActionButtons={false} filters={<GoogleLoginFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.email}
                    secondaryText={record => record.googleId}
                // tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="email" />
                    <TextField source="googleId" />
                    <ShowButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);


const GoogleLoginTitle = ({ record }) => {
    return <span>{record ? 
            <React.Fragment>
                {record.email}
            </React.Fragment>
            :
            ''
    }</span>;
};

export const GoogleLoginShow = (props) => {
    return <Show title={<GoogleLoginTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="_id" />
            <TextField source="email" />
            <TextField source="googleId" label="Google ID" />
            <TextField source="firebaseID" label="Firebase ID" />
        </SimpleShowLayout>
    </Show>
}