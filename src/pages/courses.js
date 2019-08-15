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
    SimpleForm,
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
        <SimpleForm toolbar={<CourseEditToolbar />}>
            <DisabledInput source="_id" />
            <TextInput source="name" />
            <TextInput source="shortname" />
            <RadioButtonGroupInput source="difficulty" choices={[
                { id : 1, name : "Beginner" },
                { id : 2, name : "Intermediate" }, 
                { id : 3, name : "Advanced" },
                { id : 4, name : "Expert" }  
            ]}/>
            <AutocompleteArrayInput label="Categories" source="categories" choices={[
               { id : "geometry", name : "Geometry"},
               { id : "transformations", name : "Transformations"},
               { id : "animations", name : "Animations"},
               { id : "groups", name : "Groups" },
               { id : "firstTimer", name : "First Timer" },
               { id : "teachers", name : "Teachers" }
            ]} />
            <LongTextInput source="description" />
            <ReferenceArrayInput label="Lessons" reference="lessons" source="lessons" optionValue="_id">
                <AutocompleteArrayInput />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export const CourseCreate = (props) => (
    <Create {...props}>
        <SimpleForm toolbar={<CourseCreateToolbar />}>
            <TextInput source="name" validate={required()} />
            <TextInput source="shortname" validate={required()} />
            <RadioButtonGroupInput source="difficulty" validate={required()} choices={[
                { id : 1, name : "Beginner" },
                { id : 2, name : "Intermediate" }, 
                { id : 3, name : "Advanced" },
                { id : 4, name : "Expert" }  
            ]}/>
            <AutocompleteArrayInput source="categories" label="Categories" choices={[
               { id : "geometry", name : "Geometry"},
               { id : "transformations", name : "Transformations"},
               { id : "animations", name : "Animations"},
               { id : "groups", name : "Groups" },
               { id : "firstTimer", name : "First Timer" },
               { id : "teachers", name : "Teachers" }
            ]} />
            <LongTextInput source="description" validate={required()} />
            <ReferenceArrayInput label="Lessons" reference="lessons" source="lessons" optionValue="_id">
                <AutocompleteArrayInput />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);