import React from "react";

import { PageHeader } from "../components/PageHeader";
import { Card } from "../components/Card";

import { myWork } from "../data";

export const MyWork = () => {
  return (
    <div>
      <PageHeader>Design, My way</PageHeader>
      <div className="grid grid-cols-4 gap-6">
        {myWork.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};
