import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <Chrono
      items={[
        {
          title: "May 1940",
          cardTitle: "Dunkirk",
          url: "http://google.com",
          cardSubtitle:
            "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
          cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
        },
      ]}
      mode="VERTICAL"
    />
  );
};

export default Timeline;