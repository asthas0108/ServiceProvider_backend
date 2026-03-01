import ServiceProviderProfile from "../models/ServiceProvider.js";

/* CREATE PROVIDER PROFILE */
export const createProviderProfile = async (req, res) => {
  try {
    const profile = await ServiceProviderProfile.create(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET NEARBY PROVIDERS */
export const getNearbyProviders = async (req, res) => {
  try {
    const { lng, lat, categoryId } = req.query;

    const providers = await ServiceProviderProfile.find({
      servicesOffered: categoryId,
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: 10000 // 10 km
        }
      }
    }).populate("userId");

    res.json(providers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};