import { initializeApp } from "firebase-admin";
import { https, config } from 'firebase-functions';

import {
    default as popTeamCrashApp,
} from "./pop-team-crash";

initializeApp(config().firebase);

export const popTeamCrash = https.onRequest(popTeamCrashApp);
