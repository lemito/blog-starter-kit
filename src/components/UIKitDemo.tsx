"use client";

import React from "react";
import { Button } from "./Button";

export default function UIKitDemo() {
  function meow(_event: any): void {
    alert("Clicked!");
  }
  return (
    <div id="ui_kit_demo">
      {" "}
      <Button onClick={meow} className="please-work" variant="primary">
        Primary
      </Button>{" "}
      <Button onClick={meow} variant="secondary">
        Secondary
      </Button>
    </div>
  );
}
