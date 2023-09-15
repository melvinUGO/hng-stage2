# Introduction

This documentation outlines the usage of the Zuri Backend API for managing person records.
The API allows you to perform CRUD operations on person records stored in a MONGODB database.

## Base URL

The base url for all the API endpoints is:

`https://melvin-hng-stage2.onrender.com/api`

### Endpoints

1. Create a New Person
   Endpoint: "/"
   Method : POST
   Request Format :
   JSON body with the following fields:
   name (string, required): The name of the person to be created .

Sample Request:

POST

```json
{
  "name": "melvin"
}
```

Sample Response:

```json
{
  "name": "melvin",
  "_id": "65032263002c1977a28c185a",
  "createdAt": "2023-09-14T15:10:27.159Z",
  "updatedAt": "2023-09-14T15:10:27.159Z",
  "__v": 0
}
```

2. Get a Person with id
   Endpoint: "/:user_id"
   Method : GET

Sample Request:

GET
`https://melvin-hng-stage2.onrender.com/api/65032263002c1977a28c185a`

Sample Response:

```json
{
  "_id": "65032263002c1977a28c185a",
  "name": "melvinn",
  "createdAt": "2023-09-14T15:10:27.159Z",
  "updatedAt": "2023-09-14T15:10:27.159Z",
  "__v": 0
}
```

3. Update a Person
   Endpoint: "/api/user_id"
   Method : PATCH

Sample Request:

PATCH
`https://melvin-hng-stage2.onrender.com/api/65032263002c1977a28c185a`

```json
{
  "name": "John"
}
```

Sample Response:

```json
{
  "_id": "65032263002c1977a28c185a",
  "name": "John",
  "createdAt": "2023-09-14T15:10:27.159Z",
  "updatedAt": "2023-09-14T15:10:27.159Z",
  "__v": 0
}
```

4. Delete a Person
   Endpoint: "/api/user_id"
   Method : DELETE

Sample Request:

PATCH
`https://melvin-hng-stage2.onrender.com/api/65032263002c1977a28c185a`

Sample Response:

```json
{
  "_id": "65032263002c1977a28c185a",
  "name": "John",
  "createdAt": "2023-09-14T15:10:27.159Z",
  "updatedAt": "2023-09-14T15:10:27.159Z",
  "__v": 0
}
```
