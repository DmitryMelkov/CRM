import * as flsFunctions from "./modules/functionsWebP.js";
import { modal_window } from "./modal_window.js";
import { selectCustom } from "./selectCustom.js";
import { createContacts } from "./createContacts.js";

flsFunctions.isWeb();
createContacts();
modal_window();
selectCustom();


