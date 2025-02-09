import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import dashboardImage from "@/app/assets/product-image.png";

export function DashBoardPreview() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950 dark:to-indigo-950 py-16 sm:py-16">
      {" "}
      <Card className="max-w-6xl mx-auto rounded-md mt-10 bg-transparent">
        <CardContent>
          <Image src={dashboardImage} alt="dashboard" />
        </CardContent>
      </Card>
    </div>
  );
}
