## Getting Started

First, clone the repository:

```bash
git clone https://github.com/krystln/auth
```

Then, install the dependencies:

```bash
npm i
```

After that, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Usage Steps

- Use "/login" page to select 1 of the predefined users and login. After selection, you will be redirected to the "/" page(home page).
- A session cookie is set after successful login. It keeps track of the user's role and is used for authorization.
- The "/dashboard", "/settings", "/orders" pages are available after authentication from "/login" page.
- The "/dashboard" and "/settings" page are available to access only for users with "admin" role. The "/orders" page is available to access only for users with "user" role.
- If logged in, "/login" page has logout option available. After logout, the session cookie is removed and the user is redirected to the "/" page.

## Deployment on Vercel

- [https://auth-gamma-three.vercel.app/](https://auth-gamma-three.vercel.app/)
