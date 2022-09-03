import * as React from "react";
import { SpaceVertical } from "@/styles/styled";
import { CreateEvent, Suggestion, TextNormal } from "../styled";
import ButtonComponent from "@/components/Buttons/Button";
import ItemSuggestion from "./ItemSuggestion";
import { ListSuggestion } from "../types";

export interface IHomeLeftContentProps {}

export default function HomeLeftContent(props: IHomeLeftContentProps) {
  return (
    <div>
      <TextNormal>Welcome John, check out your next steps! 🎉</TextNormal>
      <SpaceVertical height={40} />
      <CreateEvent>create first event</CreateEvent>
      <SpaceVertical height={8} />
      <TextNormal>
        We should have most of the functionality available in the portal.
        However, before you want finalize and start the event, you should do the
        KYC and complete the onboarding.
      </TextNormal>
      <SpaceVertical height={25} />
      <ButtonComponent textStyle={{ fontSize: 16 }}>
        create event
      </ButtonComponent>
      <SpaceVertical height={56} />
      <Suggestion>suggestions</Suggestion>
      <SpaceVertical height={24} />
      {ListSuggestion.map((item, index) => (
        <ItemSuggestion key={index} label={item.label} icon={item.icon} />
      ))}
    </div>
  );
}
