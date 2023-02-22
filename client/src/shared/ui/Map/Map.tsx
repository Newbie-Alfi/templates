import { Map as OLMap, View } from "ol";
import { DetailedHTMLProps, useEffect, useRef, forwardRef } from "react";

type IMapProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const MapComponent = forwardRef<HTMLDivElement, IMapProps>(
  (props, ref) => <div {...props} ref={ref} />
);

export function useMap(
  view = new View({
    center: [0, 0],
    zoom: 0,
  })
) {
  const mapRef = useRef<HTMLDivElement>(null);
  const olMap = new OLMap({
    view,
  });
  const map = useRef(olMap);
  const mapRender = (props: IMapProps) => (
    <MapComponent {...props} ref={mapRef} />
  );

  useEffect(() => {
    if (mapRef.current) {
      map.current.setTarget(mapRef.current);
    }
  }, []);

  return [map.current, mapRender] as const;
}
