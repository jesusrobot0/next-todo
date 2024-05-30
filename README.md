# Next Todos

## How to Run

Follow these steps to run the project in your local environment:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/jesusrobot0/next-todo.git
    ```

2. **Install Dependencies:**

   ```bash
   cd nextjs-example-project
   pnpm install
   ```

3. **Docker Database Lift**

    ```bash
    docker compose up -d
    ```

4. **Start the Application:**

   ```bash
   pnpm run dev
   ```

5. Configure the .env.template file First, change the name to `.env` and then update the database connection string with the valid credentials.

6. Migrate db and generate the prisma client

    ```bash
    pnpm dlx prisma migrate
    pnpm dlx prisma generate
    ```

7. Run the [/api/seed](http://localhost:3000/api/seed) endpoint to populate the local database.

8. **Access the Application:** Open your browser and visit [http://localhost:3000](http://localhost:3000).

Done! You should now see the application running in your local environment.

## Prisma commands

```bash
pnpm dlx prisma init
pnpm dlx prisma migrate <name>
pnpm dlx prisma generate
pnpm dlx prisma studio
```
