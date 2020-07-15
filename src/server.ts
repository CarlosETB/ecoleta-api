import { errors } from "celebrate";
import * as express from "express";
import * as cors from "cors";
import * as path from "path";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
