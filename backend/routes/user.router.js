// const express=require("express")
// const userController = require("../controllers/usercontroller.js")
// const userRoute = express.Router()

// userRoute.get("/allUser",userController.getAllUsers)
// userRoute.get("/getUserProfile/:id",userController.getUserProfile)
// userRoute.post("/signup",userController.signup)
// userRoute.post("/login",userController.login)
// userRoute.put("/updateProfile/:id",userController.updateUserProfile)
// userRoute.delete("/deleteProfile/:id",userController.deleteUserProfile)

// module.exports = userRoute;


const express = require("express");
const userController = require("../controllers/usercontroller.js");
const userRoute = express.Router();

/**
 * @swagger
 * /allUser:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of all users
 */
userRoute.get("/allUser", userController.getAllUsers);

/**
 * @swagger
 * /getUserProfile/{id}:
 *   get:
 *     summary: Get a user profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User profile data
 */
userRoute.get("/getUserProfile/:id", userController.getUserProfile);

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Create a new user (sign up)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */
userRoute.post("/signup", userController.signup);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
userRoute.post("/login", userController.login);

/**
 * @swagger
 * /updateProfile/{id}:
 *   put:
 *     summary: Update a user profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User profile updated
 */
userRoute.put("/updateProfile/:id", userController.updateUserProfile);

/**
 * @swagger
 * /deleteProfile/{id}:
 *   delete:
 *     summary: Delete a user profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User profile deleted
 */
userRoute.delete("/deleteProfile/:id", userController.deleteUserProfile);

module.exports = userRoute;
