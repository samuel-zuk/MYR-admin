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

export const LessonList = (props) => (
    <List title="Lessons" {...props}>
        <Datagrid>
            <TextField source="lessonNumber" />
            <TextField source="name" />
            <TextField source="prompt" />
            <TextField source="code" />
            <TextField source="next" />
            <TextField source="previous" />
        </Datagrid>
    </List>
);