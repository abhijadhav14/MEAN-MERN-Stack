# Experiment 14: Consume REST APIs from Express.js Backend

This folder contains a small Express backend and frontend example code for:

1. Angular using `HttpClient`
2. React using `fetch` and Axios

## Folder Layout

```text
experiment-14-rest-api-consumption/
├── express-api/
│   ├── package.json
│   └── server.js
├── angular-client/
│   └── src/app/
│       ├── app.component.html
│       ├── app.component.ts
│       ├── app.config.ts
│       └── services/student.service.ts
└── react-client/
    └── src/
        ├── App.js
        └── AppAxios.js
```

## Express Backend

### Install

```bash
cd express-api
npm install
```

### Run

```bash
node server.js
```

API URL:

```text
http://localhost:3000/students
```

## Angular Client

These files are meant to be copied into an Angular project created with `ng new angular-client`.

Important files:

- `src/app/app.config.ts`
- `src/app/services/student.service.ts`
- `src/app/app.component.ts`
- `src/app/app.component.html`
- `src/main.ts`

## React Client

These files are meant to be copied into a React project created with `npx create-react-app react-client`.

Important files:

- `src/App.js` for `fetch`
- `src/AppAxios.js` for Axios
