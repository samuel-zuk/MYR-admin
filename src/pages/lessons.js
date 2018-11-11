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
    required,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    SimpleList,
    TextInput,
    SaveButton,
    Toolbar,
} from 'react-admin';


const LessonFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const LessonEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const LessonCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create Lesson"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

export const LessonList = (props) => (
    <List {...props} bulkActionButtons={false}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="name" />
                    <TextField source="prompt" />
                    <TextField source="code" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const LessonTitle = ({ record }) => {
    return <span>Lesson: {record ? `"${record.name}"` : ''}</span>;
};

export const LessonEdit = (props) => (
    <Edit title={<LessonTitle />} {...props}>
        <SimpleForm toolbar={<LessonEditToolbar />}>
            <DisabledInput source="_id" />
            <TextInput source="name" />
            <LongTextInput source="prompt" />
            <LongTextInput source="code" />
        </SimpleForm>
    </Edit>
);

export const LessonCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<LessonCreateToolbar />}>
            <TextInput source="name" validate={required()} />
            <LongTextInput source="prompt" validate={required()} />
            <LongTextInput source="code" validate={required()} />
        </SimpleForm>
    </Create>
);