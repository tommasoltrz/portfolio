import * as React from "react";
import { useContext } from "react";
import { Context } from "../StoreProvider/StoreProvider";

type Props = {};

const MasonryGrid: React.FC<Props> = React.memo(({ children }) => {
  const { wSize } = useContext(Context);
  return (
    <div className="grid">
      <div className="col-12 col-sm-6">
        {React.Children.map(children, (child: any, idx: number) => {
          return wSize.w >= 768
            ? idx % 2 == 0
              ? React.cloneElement(child, {
                  style: { ...child.props.style },
                })
              : null
            : React.cloneElement(child, {
                style: { ...child.props.style },
              });
        })}
      </div>

      {wSize.w >= 768 && (
        <div className="col-12 col-sm-6">
          {React.Children.map(children, (child: any, idx: number) => {
            return idx % 2 !== 0
              ? React.cloneElement(child, {
                  style: { ...child.props.style },
                })
              : null;
          })}
        </div>
      )}
    </div>
  );
});
MasonryGrid.displayName = "MasonryGrid";
export default MasonryGrid;