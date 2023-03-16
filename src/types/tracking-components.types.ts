export type EventOnChange = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type EventOnSubmit = React.FormEvent<HTMLFormElement>;

export interface ITrackingFormProps {
  onChange: (event: EventOnChange) => void;
  billOfLading: string;
  submitForm: (event: EventOnSubmit) => void;
  sidebarHandler: () => void;
}

export interface ITrackingStoryProps {
  getBillOfLadingStatusFromTrackingStory: (billOfLading: string) => void;
  deleteBillOfLadingFromTrackingStory: (billOfLading: string) => void;
  sidebarHandler: () => void;
  isSideBarOpen: boolean;
}
