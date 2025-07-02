"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";

function PopupComponent() {
  return (
    <Card
      style={{
        backgroundColor: "var(--card)",
        color: "var(--card-foreground)",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        border: "1px",
        borderRadius: "calc(var(--radius) /* 0.25rem = 4px */ + 4px)",
        borderStyle: "var(--tw-border-style)",
        paddingBlock: "20px",
      }}
    >
      <CardHeader className="w-full text-center">
        <h2 className="text-xl font-medium text-green-600">
          LoopBox Recording
        </h2>
        <p className="text-sm text-slate-500">
          Select an option to start a session
        </p>
      </CardHeader>
      <CardContent className="w-full flex flex-col gap-y-3">
        <section className="w-full flex flex-col items-center">
          <ToggleGroup type="single" className="grid grid-cols-3 gap-x-4">
            <ToggleGroupItem value="a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-webcam-icon lucide-webcam"
              >
                <circle cx="12" cy="10" r="8" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 22h10" />
                <path d="M12 22v-4" />
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem value="b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-app-window-mac-icon lucide-app-window-mac"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="M6 8h.01" />
                <path d="M10 8h.01" />
                <path d="M14 8h.01" />
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem value="c">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-monitor-dot-icon lucide-monitor-dot"
              >
                <circle cx="19" cy="6" r="3" />
                <path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
                <path d="M12 17v4" />
                <path d="M8 21h8" />
              </svg>
            </ToggleGroupItem>
          </ToggleGroup>
        </section>
        <section>{/* options showup */}</section>
        <form className="flex items-center justify-center mb-3">
          <Button type="button" className="w-full">
            Start Session
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default PopupComponent;
