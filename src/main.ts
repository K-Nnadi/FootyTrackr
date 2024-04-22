import {AppModule} from "./app.module";
import {GenericBootstrap} from "@fl/base-tools/bootstrap/generic.bootstrap";
require('dotenv').config()

void GenericBootstrap(AppModule, 3000);
