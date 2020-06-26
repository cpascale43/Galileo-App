import React from "react";
import AddIcon from "@material-ui/icons/Add";

interface ExpandIconProps {
    id: string;
    onExpand: (id: string) => void;
}

const ExpandIcon: React.FC<ExpandIconProps> = (props) => {
  return (
      <AddIcon
        className="expand-btn align-top"
        onClick={props.onExpand.bind(null, props.id)}
        fontSize="large"
      />
  );
};

export default ExpandIcon;