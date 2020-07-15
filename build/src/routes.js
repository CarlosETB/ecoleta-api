"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var multer_2 = __importDefault(require("./config/multer"));
var PointsControllers_1 = __importDefault(require("./controllers/PointsControllers"));
var ItemsControllers_1 = __importDefault(require("./controllers/ItemsControllers"));
var routes = express_1.default.Router();
var upload = multer_1.default(multer_2.default);
var pointsController = new PointsControllers_1.default();
var itemsControllers = new ItemsControllers_1.default();
routes.get("/items", itemsControllers.index);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post("/points", upload.single("image"), celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required().email(),
        whatsapp: celebrate_1.Joi.number().required(),
        latitude: celebrate_1.Joi.number().required(),
        longitude: celebrate_1.Joi.number().required(),
        city: celebrate_1.Joi.string().required(),
        uf: celebrate_1.Joi.string().required().max(2),
        items: celebrate_1.Joi.string().required(),
    }),
}, { abortEarly: false }), pointsController.create);
exports.default = routes;
//# sourceMappingURL=routes.js.map