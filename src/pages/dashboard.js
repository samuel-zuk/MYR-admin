import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default () => (
    <div>
        <Card>
            <CardHeader title="Welcome to the front-end of the backend!" />
            <CardContent>Below you will find information about how to use the admin portal.</CardContent>
        </Card>
        <br></br>
        <Card>
            <CardHeader title="Creating a Course" />
            <CardContent>Creating a new course in MYR is simple! You already did the first step by logging in to the admin portal.

        <ol>
                    <li>Log in to LearnMYR.org/admin.</li>
                    <li>Add your lessons via the lessons tab. The directions for doing that are also on this page.</li>
                    <li>Navigate to the courses menu.</li>
                    <li>In the upper right corner, hit create.</li>
                    <li>Fill out each of the fields.</li>
                    <li>Click the "Create Course" button to submit.</li>
                    <li>Go back to the courses menu. Your new course is now all set!</li>
                </ol></CardContent>
        </Card>
        <br></br>
        <Card>
            <CardHeader title="Creating a Lesson" />
            <CardContent>Creating a new lesson in MYR is simple! You already did the first step by logging in to the admin portal.

        <ol>
                    <li>Log in to LearnMYR.org/admin.</li>
                    <li>Navigate to the courses menu.</li>
                    <li>In the upper right corner, hit create.</li>
                    <li>Fill out each of the fields. To add code, it is recommended that you type the code in MYR first, and then copy and paste it into the code field.</li>
                    <li>Go back to the lessons menu. Your new lesson is now all set!</li>
                </ol></CardContent>
        </Card>
    </div >
);