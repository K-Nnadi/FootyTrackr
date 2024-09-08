import {AppModule} from "./app.module";
import {GenericBootstrap} from "@footyTrackr/base-tools/bootstrap/generic.bootstrap";
import {config} from "dotenv";

config();
void GenericBootstrap(AppModule, 3000);
