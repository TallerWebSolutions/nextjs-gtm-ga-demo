"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect } from "react";

type EventData = {
  [key: string]: any;
};

export const gtmPageView = (data: EventData) => {
  const event = {
    event: "page_view",
    eventModel: {
      page_location: window.location.href,
      ...data,
    },
  };
  sendGTMEvent(event);
};

export const GAPageView = (props: { data: EventData }) => {
  useEffect(() => {
    gtmPageView(props.data);
  }, [props.data]);

  return <></>;
};
