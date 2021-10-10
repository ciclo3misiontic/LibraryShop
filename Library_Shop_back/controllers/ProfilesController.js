const profilesModel = require ("../models/ProfilesModel");

module.exports = class ProfilesController {

    static async insertProfile (request, response) {
        try {
            const document = request.body;
            const profile = await profilesModel.create(document);
            response.status(201).json(profile);
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    };

    static async getAllProfiles (request, response) {
        try {
            const profiles = await profilesModel.find();
            if (profiles != null) {
                response.status(200).json(profiles);
            } else {
                response.status(404).json();
            }
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }

}