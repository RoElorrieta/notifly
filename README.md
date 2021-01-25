# Notifly
_  -

## ABOUT.

Notifly is a mobile app for airline crew scheduling teams to post the corresponding rosters to their cabin crew members and tech crew members. It is an intuitive and user-friendly app.

In this repo you will find the source codes for the project.


### DEVELOPER.

Romina Elorrieta López: http://github.com/RoElorrieta

## BUILT ON:
JavaScript (NodeJS, Mongoose, Axios, and ExpressJS).
HTML5.
CSS3/SASS/Bootstrap.

## LICENSE.

Under MIT license.

### DATABASE SCHEMAS:

**Users**

| KEY         | DATA TYPE   | REQUIRED      | VALIDATED |
| :---        |    :----:   |        :----: |       ---:|
| Name        | String      | yes           |           |
| Mail        | String      | yes           |On RegExp  |
| Base        | ObjID(ref)  | yes           |           |
| Rank        | String      | no            |           |
| Checkname   | String      | yes           |           |
| CheckID     | Number      | yes           |           |

**Airports**

| KEY         | DATA TYPE   | REQUIRED      | VALIDATED |
| :---        |    :----:   |        :----: |       ---:|
| Name        | String      | yes           |           |
| Country     | String      | yes           |           |
| IATAcode    | String      | yes           |           |
| Base        | Boolean     | no            |           |

**Flight**

| KEY         | DATA TYPE   | REQUIRED      | VALIDATED |
| :---        |    :----:   |        :----: |       ---:|
| Code        | Number[]    | yes           |           |
| Route       | ObjID(ref)[]| yes           |           |
| Length      | Number      | yes           |           |
| Fleet       | String      | yes           |           |
| PAX         | Number      | yes           |           |

## Expresiones de Gratitud 🎁

* Mis profesores, geniales 📢
