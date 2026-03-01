import express from "express";
import { 
  createProviderProfile, 
  getNearbyProviders 
} from "../controllers/providerController.js";

const router = express.Router();

router.post("/", createProviderProfile);
router.get("/nearby", getNearbyProviders);

export default router;