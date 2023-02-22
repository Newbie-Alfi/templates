import { useMap } from "@shared/ui/Map/Map";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Point } from "ol/geom";
import { Feature } from "ol";
import Style from "ol/style/Style";
import { Fill, Circle } from "ol/style";

export default function MainPage() {
  const [map, MapComponent] = useMap();

  map.setLayers([
    new TileLayer({
      source: new OSM(),
    }),
  ]);

  const point = new VectorLayer({
    style: () =>
      new Style({
        image: new Circle({
          radius: 5,
          fill: new Fill({
            color: "orange",
          }),
        }),
      }),
    source: new VectorSource({
      features: [new Feature(new Point([0, 0]))],
    }),
  });

  map.addLayer(point);

  return <MapComponent style={{ width: "100%", height: "100vh" }} />;
}
