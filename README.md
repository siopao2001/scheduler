
# Interview Scheduler
This is single-page app created through the React framework that allows a user to book student appointments with interviewers. 

## Project Features
* Interviews can be booked between Monday and Friday.
* A user can switch between weekdays.
* A user can book an interview in an empty appointment slot.
* Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
* A user can cancel an existing interview.
* A user can edit the details of an existing interview.
* The list of days informs the user how many slots are available for each day.
* The expected day updates the number of spots available when an interview is booked or canceled.
* A user is presented with a confirmation when they attempt to cancel an interview.
* A user is shown an error if an interview cannot be saved or deleted.
* A user is shown a status indicator while asynchronous operations are in progress.
* When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).

## Dependencies
* axios
* classnames
* normalize.css
* react
* react-dom
* react-scripts
* @babel/core" 
* storybook
* @testing-library/jest-dom
* @testing-library/react
* @testing-library/react-hooks
* prop-types
* react-test-renderer
* jest

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## API Setup

Fork and clone the [schedulerAPI](https://github.com/lighthouse-labs/scheduler-api) into a new directory.

Follow the README.md instructions. This will involve a few steps, including:

* installing dependencies
* creating the database
* creating a .env.development file in the root directory
* seeding the database
* running the serve

## Screenshots

![Screen Shot 2022-08-09 at 11 42 33 AM](https://user-images.githubusercontent.com/75033003/183699673-e19c510f-181a-4908-8de1-2804d7411b69.png)



![Screen Shot 2022-08-09 at 11 45 56 AM](https://user-images.githubusercontent.com/75033003/183699905-c0b8b3c6-0caa-49d6-a38f-ec1f730fdb92.png)



![Screen Shot 2022-08-09 at 11 46 35 AM](https://user-images.githubusercontent.com/75033003/183700430-3811d723-6dcf-4b31-bbd1-818b1d33f3ef.png)






