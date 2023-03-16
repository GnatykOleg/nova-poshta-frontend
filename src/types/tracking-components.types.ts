export type EventOnChange = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type EventOnSubmit = React.FormEvent<HTMLFormElement>;

export interface ITrackingFormProps {
  onChange: (event: EventOnChange) => void;
  trackingNumber: string;
  submitForm: (event: EventOnSubmit) => void;
  sidebarHandler: () => void;
}

export interface ITrackingStoryProps {
  getTrackingStatusFromStory: (trackingNumber: string) => void;
  deleteTrackingNumberFromStory: (trackingNumber: string) => void;
  sidebarHandler: () => void;
  isSideBarOpen: boolean;
}

export interface ITrackindDataProps {
  setShowTrackingData: (value: React.SetStateAction<boolean>) => void;
}
