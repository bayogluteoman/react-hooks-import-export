import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {
trees as parkTrees,
wildlife as parkWildlife,
elevation as parkAltitude} from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  console.log(parkTrees);
  parkWildlife();
  parkAltitude();
  RMFunctions.elevation();
  return(
    <div>
      <MesaVerde/>
    </div>
  )
  }
