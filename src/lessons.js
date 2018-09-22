import React from 'react';
import { Filter, List, Edit, Create, Datagrid, ReferenceField, Responsive, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, SimpleList, TextInput } from 'react-admin';

const LessonFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

// export const LessonList = (props) => (
//     <List {...props}>
//         <Datagrid>
//             <TextField source="lessonNumber" />
//             <TextField source="lessonName" />
//             <TextField source="prompt" />
//             <TextField source="code" />
//             <TextField source="next" />
//             <TextField source="previous" />
//         </Datagrid>
//     </List>
// );

export const LessonList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `#${record.lessonNumber}`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="lessonNumber" />
                    <TextField source="name" />
                    <TextField source="prompt" />
                    <TextField source="code" />
                    <TextField source="next" />
                    <TextField source="previous" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const LessonTitle = ({ record }) => {
    return <span>Lesson {record ? `"${record.name}"` : ''}</span>;
};

export const LessonEdit = (props) => (
    <Edit title={<LessonTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="_id" />
            {/* <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput> */}
            <TextInput source="name" />
            <LongTextInput source="prompt" />
            <LongTextInput source="code" />
            <ReferenceInput label="Next" source="lessonNumber" reference="lessons">
                <SelectInput optionText="name" />
            </ReferenceInput>
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