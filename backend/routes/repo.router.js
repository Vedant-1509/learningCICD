// const express=require("express")
// const repoController = require("../controllers/repocontroller.js")
// const repoRoute = express.Router()

// repoRoute.post("/repo/create",repoController.createRepository)
// repoRoute.get("/repo/all",repoController.getAllRepositories)
// repoRoute.get("/repo/:id",repoController.fetchRepositoryById)
// repoRoute.get("/repo/name/:name",repoController.fetchRepositoryByName)
// repoRoute.get("/repo/user/:userID",repoController.fetchRepositoriesForCurrentUser)
// repoRoute.put("/repo/update/:id",repoController.updateRepositoryById)
// repoRoute.delete("/repo/delete/:id",repoController.deleteRepositoryById)
// repoRoute.patch("/repo/toggle/:id",repoController.toggleVisibilityById)

// module.exports = repoRoute;

const express = require("express");
const repoController = require("../controllers/repocontroller.js");
const repoRoute = express.Router();

/**
 * @swagger
 * /repo/create:
 *   post:
 *     summary: Create a new repository
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               visibility:
 *                 type: string
 *                 enum: [public, private]
 *               userID:
 *                 type: string
 *     responses:
 *       201:
 *         description: Repository created successfully
 */
repoRoute.post("/repo/create", repoController.createRepository);

/**
 * @swagger
 * /repo/all:
 *   get:
 *     summary: Get all repositories
 *     responses:
 *       200:
 *         description: A list of all repositories
 */
repoRoute.get("/repo/all", repoController.getAllRepositories);

/**
 * @swagger
 * /repo/{id}:
 *   get:
 *     summary: Get repository by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Repository data
 */
repoRoute.get("/repo/:id", repoController.fetchRepositoryById);

/**
 * @swagger
 * /repo/name/{name}:
 *   get:
 *     summary: Get repository by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Repository data
 */
repoRoute.get("/repo/name/:name", repoController.fetchRepositoryByName);

/**
 * @swagger
 * /repo/user/{userID}:
 *   get:
 *     summary: Get repositories for a specific user
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of user repositories
 */
repoRoute.get("/repo/user/:userID", repoController.fetchRepositoriesForCurrentUser);

/**
 * @swagger
 * /repo/update/{id}:
 *   put:
 *     summary: Update repository by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               visibility:
 *                 type: string
 *     responses:
 *       200:
 *         description: Repository updated
 */
repoRoute.put("/repo/update/:id", repoController.updateRepositoryById);

/**
 * @swagger
 * /repo/delete/{id}:
 *   delete:
 *     summary: Delete repository by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Repository deleted
 */
repoRoute.delete("/repo/delete/:id", repoController.deleteRepositoryById);

/**
 * @swagger
 * /repo/toggle/{id}:
 *   patch:
 *     summary: Toggle repository visibility
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Repository visibility toggled
 */
repoRoute.patch("/repo/toggle/:id", repoController.toggleVisibilityById);

module.exports = repoRoute;
