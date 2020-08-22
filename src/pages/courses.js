import React from 'react';

import {
    ArrayInput,
    SimpleFormIterator,
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
    SimpleList,
    TextInput,
    SaveButton,
    Toolbar,
    NumberInput,
    NumberField,
    ArrayField,
    SingleFieldList,
    ChipField,
    ReferenceArrayInput,
    AutocompleteArrayInput,
    RadioButtonGroupInput,
    TabbedForm,
    FormTab
} from 'react-admin';
import { StringToLabelObject } from '../components/StringToLabelObject';

const CourseFilter = (props) => (
    <Filter {...props}>
        {/* <TextInput label="Search" source="q" alwaysOn /> */}
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
        <NumberInput label="Difficulty" source="difficulty" />
        {/* <TextInput label="Name" source="name" /> */}
        <TextInput label="Shortname" source="shortname" />
    </Filter>
);

const CourseEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const CourseCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create Course"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

export const CourseList = (props) => (
    <List {...props} bulkActionButtons={false} filters={<CourseFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `Shortname: ${record.shortname}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="shortname" />
                    <TextField source="name" />
                    <NumberField source="difficulty" />
                    <ArrayField source="categories">
                        <SingleFieldList>
                            <StringToLabelObject>
                                <ChipField source="label" />
                            </StringToLabelObject>
                        </SingleFieldList>
                    </ArrayField>
                    <TextField source="description" />
                    <TextField label="Lessons" source="lessons.length" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const CourseTitle = ({ record }) => {
    return <span>Course: {record ? `"${record.name}"` : ''}</span>;
};

export const CourseEdit = (props) => (
    <Edit title={<CourseTitle />} {...props}>
<<<<<<< HEAD
        <SimpleForm toolbar={<CourseEditToolbar />}>
            <DisabledInput source="_id" />
            <TextInput source="name" />
            <TextInput source="shortname" />
            <RadioButtonGroupInput source="difficulty" choices={[
                { id : 0, name : "Beginner" },
                { id : 1, name : "Intermediate" }, 
                { id : 2, name : "Advanced" },
                { id : 3, name : "Expert" }  
            ]}/>
            <AutocompleteArrayInput label="Categories" source="categories" choices={[
               { id : "geometry", name : "Geometry"},
               { id : "transformations", name : "Transformations"},
               { id : "animations", name : "Animations"},
               { id : "groups", name : "Groups" },
               { id : "firstTimer", name : "First Timer" },
               { id : "teachers", name : "Teachers" },
               { id : "misc", name : "Miscallaneous" },
            ]} />
            <LongTextInput source="description" />
            <ReferenceArrayInput label="Lessons" reference="lessons" source="lessons" optionValue="_id">
                <AutocompleteArrayInput />
            </ReferenceArrayInput>
        </SimpleForm>
=======
        <TabbedForm toolbar={<CourseEditToolbar />}>
            <FormTab label="Course Information">
                <DisabledInput source="_id" />
                <TextInput source="name" validate={required()}/>
                <TextInput source="shortname" validate={required()}/>
                <NumberInput source="difficulty" validate={required()}/>
                <LongTextInput source="description" validate={required()}/>
            </FormTab>
            <FormTab label="Lessons">
                <ArrayInput source="lessons">
                    <SimpleFormIterator>
                        <br />
                        <TextInput source="name"/>
                        <LongTextInput source="prompt" />
                        <LongTextInput source="code" />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
>>>>>>> dcd4a68182acfce4798bd49f024702de0ffa5a26
    </Edit>
);

export const CourseCreate = (props) => (
    <Create {...props}>
<<<<<<< HEAD
        <SimpleForm toolbar={<CourseCreateToolbar />}>
            <TextInput source="name" validate={required()} />
            <TextInput source="shortname" validate={required()} />
            <RadioButtonGroupInput source="difficulty" validate={required()} choices={[
                { id : 0, name : "Beginner" },
                { id : 1, name : "Intermediate" }, 
                { id : 2, name : "Advanced" },
                { id : 3, name : "Expert" }  
            ]}/>
            <AutocompleteArrayInput source="categories" validate={required()} label="Categories" choices={[
               { id : "geometry", name : "Geometry"},
               { id : "transformations", name : "Transformations"},
               { id : "animations", name : "Animations"},
               { id : "groups", name : "Groups" },
               { id : "firstTimer", name : "First Timer" },
               { id : "teachers", name : "Teachers" },
               { id : "misc", name : "Miscallaneous" },
            ]} />
            <LongTextInput source="description" validate={required()} />
            <ReferenceArrayInput label="Lessons" reference="lessons" source="lessons" optionValue="_id">
                <AutocompleteArrayInput />
            </ReferenceArrayInput>
        </SimpleForm>
=======
        <TabbedForm toolbar={<CourseCreateToolbar />}>
            <FormTab label="Course Information">
                <TextInput source="name" validate={required()} />
                <TextInput source="shortname" validate={required()} />
                <NumberInput source="difficulty" validate={required()} />
                <LongTextInput source="description" validate={required()} />
            </FormTab>
            <FormTab label="Lessons">
                <ArrayInput source="lessons">
                        <SimpleFormIterator>
                            <br />
                            <TextInput source="name"/>
                            <LongTextInput source="prompt" />
                            <LongTextInput source="code" />
                        </SimpleFormIterator>
                    </ArrayInput>
            </FormTab>
        </TabbedForm>
>>>>>>> dcd4a68182acfce4798bd49f024702de0ffa5a26
    </Create>
);