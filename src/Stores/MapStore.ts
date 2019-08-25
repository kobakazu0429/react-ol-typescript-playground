import { Map } from "ol";
import { action, observable } from "mobx";

export default class MapStore {
  @observable public map?: Map;

  @action public setMap(map: Map) {
    console.log(map);
    this.map = map;
  }
}
