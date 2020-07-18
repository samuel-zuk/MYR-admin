import React from 'react';
import {
    Filter,
    List,
    Edit,
    Create,
    Datagrid,
    Responsive,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    SimpleForm,
    SimpleList,
    TextInput,
    SaveButton,
    Toolbar,
    ReferenceInput,
    SelectInput,
} from 'react-admin';

const TextureReferenceExamplesFilter = (props) => (
    <Filter {...props}>
        {/* <TextInput label="Search" source="q" alwaysOn /> */}
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
        {/* <TextInput label="Name" source="name" /> */}
        {/* <TextInput label="Shortname" source="shortname" /> */}
    </Filter>
);

const TextureReferenceExamplesEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const TextureReferenceExamplesCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create TextureReferenceExamples"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

export const TextureReferenceExamplesList = (props) => (
    <List {...props} bulkActionButtons={false} filters={<TextureReferenceExamplesFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.textureName}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="textureName" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const TextureReferenceExamplesTitle = ({ record }) => {
    return <span>TextureReferenceExamples: {record ? `"${record.textureName}"` : ''}</span>;
};

export const TextureReferenceExamplesEdit = (props) => (
    <Edit title={<TextureReferenceExamplesTitle />} {...props}>
        <SimpleForm toolbar={<TextureReferenceExamplesEditToolbar />}>
            <DisabledInput source="_id" />
            <TextInput source="textureName" />
            <LongTextInput source="code" />
            <ReferenceInput label="Suggested Course" reference="courses" source="suggestedCourse" optionValue="shortname">
                <SelectInput optionText="name" optionValue="shortname" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const TextureReferenceExamplesCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<TextureReferenceExamplesCreateToolbar />}>
            <TextInput source="textureName" />
            <LongTextInput source="code" />
            <ReferenceInput label="Suggested Course" reference="courses" source="suggestedCourse" optionValue="shortname">
                <SelectInput optionText="name" optionValue="shortname" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);