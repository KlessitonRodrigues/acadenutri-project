declare namespace Props {
  type CssProps = {
    active?: boolean;
    size?: number;
    gap?: number;
    w?: string;
    h?: string;
    maxw?: string;
    maxh?: string;
    minw?: string;
    minh?: string;
    p?: string;
    m?: string;
    mb?: number;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    flewrap?: boolean;
    rows?: number;
    cols?: number;
    responsive?: boolean;
    reverse?: boolean;
    half?: boolean;
    src?: string;
    y?: string;
    x?: string;
    delay?: string;
  };

  type Icons = {
    size?: number;
    onPress?: () => void;
    style?: React.CSSProperties;
    type: Utils.IconTypes;
  };

  type Text = {
    path: string;
    tag?: Utils.TextTags;
  };

  type Loading = {
    show: boolean;
    type: 'fullScreen' | 'icon';
    title?: string;
    description?: string;
  };

  type If = {
    check: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactElement;
  };

  type PageTitle = {
    title?: string;
  };

  type StepLine = {
    step?: number;
    steps?: number;
    onClick?: (step: number) => void;
  };

  type Checkbox = {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
  };

  type Form<T> = {
    onSubmit?: (form: T) => void;
  };

  type DropdownSelector = {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
  };

  type HiddenInput = {
    placeholder: string;
    value: string;
    required?: boolean;
    onChange: (value: string) => void;
  };
  
  type Loading = {
    show: boolean;
    type: 'fullScreen' | 'icon';
    title?: string;
    description?: string;
  };

  type Page = {
    loading?: boolean;
    children?: React.ReactNode;
  };

  type PricingCard = {
    cardData: {
      color: 'white' | 'gold' | 'silver' | 'bronze';
      title: string;
      price: string;
      list: string[];   
    }
  };


  type Modal = {
    show: boolean;
  }
}
