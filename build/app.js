"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file 
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
console.log(__dirname + '/.env');
console.log(process.env.PORT, process.env.MONGODB_URI);
const port = process.env.PORT || 3000;
// heartbeat
app.get('/heartbeat', (req, res) => {
    res.status(200).json({ message: 'Its working!' });
});
// routes
const users_routes_1 = __importDefault(require("./routes/users.routes"));
app.use("/api/v1/users", users_routes_1.default);
// database
const database_1 = __importDefault(require("./models/database"));
(0, database_1.default)();
// Start server
app.listen(port, () => {
    console.log('App is listing on PORT: ' + port);
});
