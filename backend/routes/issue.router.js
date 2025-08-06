// const express=require("express")
// const issueController = require("../controllers/issuecontroller.js")
// const issueRoute = express.Router()

// issueRoute.post("/issue/create",issueController.createIssue)
// issueRoute.put("/issue/update/:id",issueController.updateIssueById)
// issueRoute.delete("/issue/delete/:id",issueController.deleteIssueById)
// issueRoute.get("/issue/all",issueController.getAllIssues)
// issueRoute.get("/issue/:id",issueController.getIssueById)


// module.exports = issueRoute;

const express = require("express");
const issueController = require("../controllers/issuecontroller.js");
const issueRoute = express.Router();

/**
 * @swagger
 * /issue/create:
 *   post:
 *     summary: Create a new issue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               repositoryId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Issue created successfully
 */
issueRoute.post("/issue/create", issueController.createIssue);

/**
 * @swagger
 * /issue/update/{id}:
 *   put:
 *     summary: Update an issue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Issue ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Issue updated successfully
 */
issueRoute.put("/issue/update/:id", issueController.updateIssueById);

/**
 * @swagger
 * /issue/delete/{id}:
 *   delete:
 *     summary: Delete an issue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Issue ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Issue deleted successfully
 */
issueRoute.delete("/issue/delete/:id", issueController.deleteIssueById);

/**
 * @swagger
 * /issue/all:
 *   get:
 *     summary: Get all issues
 *     responses:
 *       200:
 *         description: List of all issues
 */
issueRoute.get("/issue/all", issueController.getAllIssues);

/**
 * @swagger
 * /issue/{id}:
 *   get:
 *     summary: Get issue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Issue ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Issue details
 */
issueRoute.get("/issue/:id", issueController.getIssueById);

module.exports = issueRoute;
