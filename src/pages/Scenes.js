import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    TextInput,
    SimpleList,
    RichTextField,
    ShowButton,
    Show,
    SimpleShowLayout,
    DeleteButton,
    Responsive,
    Filter
} from 'react-admin';

const SceneFilter = (props) => (
    <Filter {...props}>
        <TextInput source="name" />
        <TextInput source="uid" label="User ID" />
    </Filter>
);

export const SceneList = (props) => (
    <List {...props} bulkActionButtons={false} filters={<SceneFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.description}
                    tertiaryText={record => record.uid}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="name" />
                    <TextField source="description" />
                    <TextField source="uid" showTime />
                    <TextField source="code" showTime />
                    <ShowButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);

export const SceneShow = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <img src={`/apiv1/scenes/preview/${props.id}`} style={{ maxHeight: "300px" }} alt="Scene Preview" />
                <TextField source="_id" />
                <TextField source="name" />
                <TextField source="description" />
                <TextField source="settings.collection" label="Collection" />
                <RichTextField source="code" />
            </SimpleShowLayout>
        </Show>
    );
}