# Welcome to Xata's Reactathon Lunch and Learn!

I'm going to be demoing how to take the new Xata workflow for a spin, improving the Database Experience of your Deploy preview workflow inside of a Next.js app deployed to Vercel.

Here's a link to the [project doc](https://www.notion.so/Reactathon-L-L-Improving-Deploy-Previews-with-the-new-Xata-workflow-9f2d4652b03c4200a9cc635778f09c4b?pvs=4) we'll be working out of, but to get the project running locally:

### 1. Install the Xata CLI

```bash
    npm install -g xata-cli
```

### 2. Authenticate your Xata account in the cli

```bash
    xata auth login
```

### 3. Clone the repo

```bash
    npx degit https://github.com/domitriusclark/reactathon-lunch-and-learn2
```

### 3. Install dependencies

```bash
    npm install
```

### 4. Upload your schema to Xata and create your database

```bash
    xata schema upload xata.schema.json
```

### 5. View DB in browser

```bash
    xata browse
```
