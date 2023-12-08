import type { Departement } from "~/dto/departement.dto";

export interface ZoneAlerte {
  id: number;
  code: string;
  type: string;
  nom: string;
  departement: Departement;
}
