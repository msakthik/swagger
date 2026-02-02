import express from 'express';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(express.json());

const swaggerDocument = {
    openapi: '3.0.0',
    info: {
        title: 'Simple Node API',
        description: 'Very simple Swagger example',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:3000',
        },
    ],
    paths: {
        '/health': {
            get: {
                summary: 'Health check',
                responses: {
                    200: {
                        description: 'Server is running',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        status: { type: 'string' },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },

        '/login': {
            post: {
                summary: 'Login API',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                required: ['email', 'password'],
                                properties: {
                                    email: { type: 'string', example: 'test@mail.com' },
                                    password: { type: 'string', example: '123456' },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'Login success',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        token: { type: 'string' },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },

        '/users/{id}': {
            put: {
                summary: 'Update user',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'string' },
                    },
                ],
                responses: {
                    200: { description: 'User updated' },
                },
            },

            patch: {
                summary: 'Partially update user',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'string' },
                    },
                ],
                responses: {
                    200: { description: 'User partially updated' },
                },
            },

            delete: {
                summary: 'Delete user',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'string' },
                    },
                ],
                responses: {
                    200: { description: 'User deleted' },
                },
            },
        },

        '/users': {
            head: {
                summary: 'Check users header',
                responses: {
                    200: {
                        description: 'Headers returned',
                    },
                },
            },

            options: {
                summary: 'Get allowed methods',
                responses: {
                    200: {
                        description: 'Allowed HTTP methods',
                        headers: {
                            Allow: {
                                schema: { type: 'string' },
                                description: 'Allowed HTTP methods',
                            },
                        },
                    },
                },
            },
        },

        '/test': {
            get: {
                summary: 'Test endpoint (GET)',
                responses: {
                    200: { description: 'Method GET' },
                },
            },
            post: {
                summary: 'Test endpoint (POST)',
                responses: {
                    200: { description: 'Method POST' },
                },
            },
        },
    }
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.post('/login', (req, res) => {
    res.json({ token: 'dummy-jwt-token' });
});

app.put('/users/:id', (req, res) => {
    res.send(`Update user ${req.params.id}`);
});

app.patch('/users/:id', (req, res) => {
    res.send(`Partially update user ${req.params.id}`);
});

app.delete('/users/:id', (req, res) => {
    res.send(`Delete user ${req.params.id}`);
});

app.head('/users', (req, res) => {
    res.status(200).end();
});

app.options('/users', (req, res) => {
    res.setHeader('Allow', 'GET,POST,PUT,DELETE');
    res.send();
});

app.all('/test', (req, res) => {
    res.send(`Method used: ${req.method}`);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
    console.log('Swagger UI at http://localhost:3000/api-docs');
});
