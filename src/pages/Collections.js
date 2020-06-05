import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    TextInput,
    SimpleList,
    ShowButton,
    Show,
    SimpleShowLayout,
    DeleteButton,
    Responsive,
    Filter,
    ArrayField,
    Link
} from 'react-admin';

const CollectionFilter = (props) => (
    <Filter {...props}>
        <TextInput source="collectionID" label="Collection Name" />
        <TextInput source="uid" label="User ID" />
    </Filter>
);

export const CollectionList = (props) => (
    <List {...props} bulkActionButtons={false} filters={<CollectionFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.collectionID}
                    secondaryText={record => record.uid}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="collectionID" label="Collection Name" />
                    <TextField source="uid" label="Owner" />
                    <ShowButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);

export const CollectionShow = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="_id" />
                <TextField source="collectionID" />
                <TextField source="uid" />

                <ArrayField source="scenes">
                    <Datagrid>
                        <TextField source="_id" label="Scene ID" />
                        <TextField source="name" />
                        <TextField source="uid" label="Scene Owner ID" />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    );
}