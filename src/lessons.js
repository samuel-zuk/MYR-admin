import React from 'react';
import {
    Filter,
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
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
    DateInput,
    ReferenceManyField,
    DateField,
    Toolbar
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

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

export const LessonList = (props) => (
    <List {...props} bulkActionButtons={false}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `#${record.lessonNumber}`}
                // tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="lessonNumber" />
                    <TextField source="name" />
                    <TextField source="prompt" />
                    <TextField source="code" />
                    {/* <TextField source="next" /> */}
                    <ReferenceField label="next" source="next" reference="lessons" allowEmpty={true}>
                        <TextField source="name" />
                    </ReferenceField>
                    <ReferenceField label="previous" source="previous" reference="lessons" allowEmpty={true}>
                        <TextField source="name" />
                    </ReferenceField>
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
            {/* <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput> */}
            <TextInput source="name" />
            <LongTextInput source="prompt" />
            <LongTextInput source="code" />
            {/* <ReferenceInput label="Next" source="lessonNumber" reference="lessons">
                <SelectInput optionText="name" />
            </ReferenceInput> */}
        </SimpleForm>
    </Edit>
);

export const LessonCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <LongTextInput source="code" />
        </SimpleForm>
    </Create>
);