import React from "react";
import AssetsTableComponent from "../assetsTale";

const TopPriceComponent = (props: any) => {
  const { assets } = props;

  return <AssetsTableComponent assets={assets} />
};

export default TopPriceComponent;
