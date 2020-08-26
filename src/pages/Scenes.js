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

import PromoteButton from '../components/PromoteButton';

const SceneFilter = (props) => (
    <Filter {...props}>
        <TextInput source="name" />
        <TextInput source="uid" label="User ID" />
    </Filter>
);

const TruncatedCodeField = (props) => {
    console.log(props.record.code.length);
    let code = props.record.code;
    if(code.length >= 2000) {
        props.record.code = code.slice(0, 2000) + "...";
    }
    return (
        <TextField {...props} source="code" />
    );
};

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
                    <TruncatedCodeField source="code" />
                    <PromoteButton />
                    <ShowButton/>
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
                <img src={`/apiv1/preview/id/${props.id}`} style={{ maxHeight: "300px" }} alt="Scene Preview" />
                <TextField source="_id" />
                <TextField source="name" />
                <TextField source="description" />
                <TextField source="settings.collection" label="Collection" />
                <RichTextField source="code" component="pre" />
            </SimpleShowLayout>
        </Show>
    );
}