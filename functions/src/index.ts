import { https } from 'firebase-functions';

import popTeamCrashApp from "./pop-team-crash/app";

export const popTeamCrash = https.onRequest(popTeamCrashApp);
