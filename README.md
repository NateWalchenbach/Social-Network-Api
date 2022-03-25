# Social Network API 😎

## Introduction
This is the backend configuration for a social media application that handles building friend lists, posting thoughts, and creating reactions to thoughts. Due to its speed with large amounts of data and flexibility with unstructured data, MongoDB was chosen as the database program for this application.

This program was built in mostly javascript with mongoose as our OMD.

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Demo Video

Watch a short demonstration [video](https://drive.google.com/file/d/1LMxJmhGOP0m32OPvc_MUKa8bABWcmin6/view?usp=sharing) of the application's functionality.

