import express from "express";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddlewave.js";
import {
  activateUserProfile,
  changeUserPassword,
  deleteUserProfile,
  getNotificationsList,
  getTeamList,
  loginUser,
  logoutUser,
  markNotificationRead,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/get-team", protectRoute , isAdminRoute ,getTeamList); // protectRoute isAdminRoute
router.get("/notifications", protectRoute, getNotificationsList); //protectRoute,

router.put("/profile", protectRoute, updateUserProfile); // protectRoute
router.put("/read-noti", protectRoute, markNotificationRead);
router.put("/change-password", changeUserPassword); // protectRoute

// //   FOR ADMIN ONLY - ADMIN ROUTES
router
  .route("/:id")
  .put( activateUserProfile) // protectRoute isAdminRoute
  .delete(  deleteUserProfile); // protectRoute

export default router;
