import { errors } from "celebrate";
import express from "express";
import cors from "cors";
import path from "path";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// const currentPath = process.env.PWD || __dirname;
// app.use("/uploads", express.static(path.resolve(currentPath, "assets")));

// app.use(errors());

// const PORT = process.env.PORT || 3333;
// app.listen(PORT, () => {
//   console.log(`sesese ${currentPath}`);
//   console.log(`Server started on port ${PORT}`);
// });

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(3333);
