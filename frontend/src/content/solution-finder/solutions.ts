import { ai } from "@/content/solution-finder/solutions/ai";
import { app } from "@/content/solution-finder/solutions/app";
import { business } from "@/content/solution-finder/solutions/business";
import { idea } from "@/content/solution-finder/solutions/idea";
import { microsoft365 } from "@/content/solution-finder/solutions/microsoft-365";
import { support } from "@/content/solution-finder/solutions/support";
import { website } from "@/content/solution-finder/solutions/website";
import type { Solution } from "@/features/solution-finder/types";

/**
 * Themen des Lösungs-Assistenten – je eine Datei unter solutions/.
 * Alles ist fest hinterlegt, nichts wird erfunden. Dauer-Angaben sind Richtwerte.
 */
export const solutions: Solution[] = [idea, business, app, website, microsoft365, ai, support];
