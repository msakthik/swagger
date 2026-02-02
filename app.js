import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(express.json());

/* -------------------- SWAGGER CONFIG -------------------- */
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Auto Swagger Node API',
            version: '1.0.0',
            description: 'Swagger generated automatically from routes',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./app.js'], // 👈 very important
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use(express.static('public'));

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
        customCssUrl: '/swagger.css',
        customSiteTitle: 'Swagger API Docs',
        customfavIcon: 'https://danielpecos.com/assets/2017/09/swaggerfornodejs.jpg',
        customCss: `
        .swagger-ui .topbar {
            background-color: #0f172a;
        }
        `,
    })
);

/* -------------------- ROUTES -------------------- */

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check
 *     responses:
 *       200:
 *         description: Server is running
 */
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login API
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login success
 */
app.post('/login', (req, res) => {
    res.json({ token: 'dummy-jwt-token' });
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User updated
 */
app.put('/users/:id', (req, res) => {
    res.send(`Update user ${req.params.id}`);
});

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Partially update user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User partially updated
 */
app.patch('/users/:id', (req, res) => {
    res.send(`Patch user ${req.params.id}`);
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted
 */
app.delete('/users/:id', (req, res) => {
    res.send(`Delete user ${req.params.id}`);
});

/**
 * @swagger
 * /users:
 *   head:
 *     summary: Check users headers
 *     responses:
 *       200:
 *         description: Headers only
 */
app.head('/users', (req, res) => {
    res.status(200).end();
});

/**
 * @swagger
 * /users:
 *   options:
 *     summary: Get allowed methods
 *     responses:
 *       200:
 *         description: Allowed HTTP methods
 */
app.options('/users', (req, res) => {
    res.setHeader('Allow', 'GET,POST,PUT,DELETE');
    res.send();
});

/**
 * @swagger
 * /test:
 *   get:
 *     summary: Test GET
 *     responses:
 *       200:
 *         description: GET success
 *   post:
 *     summary: Test POST
 *     responses:
 *       200:
 *         description: POST success
 */
app.all('/test', (req, res) => {
    res.send(`Method used: ${req.method}`);
});

/* -------------------- START SERVER -------------------- */
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
    console.log('Swagger UI at http://localhost:3000/api-docs');
});
