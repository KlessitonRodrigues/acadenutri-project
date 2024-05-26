import { useMemo, useState } from 'react';

import Checkbox from 'src/lib/base/Checkbox';
import { GradientBtn, SquareGradientBtn } from 'src/lib/styled/Buttons';
import { Column, Row } from 'src/lib/styled/Flex';
import { FormLarge } from 'src/lib/styled/Forms';
import { Input, InputBox, Switch } from 'src/lib/styled/Inputs';
import { daysOfWeek } from 'src/utils/constants/dates';
import { serviceForm } from 'src/utils/constants/forms';

const UserScheduelForm = (props: Props.Form<Forms.Service>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(serviceForm);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    onSubmit && onSubmit(form);
  };

  const OpenDaysButtons = useMemo(() => {
    const { openDays = [] } = form;
    const setDays = (day: number) => {
      const i = openDays.indexOf(day);
      i > -1 ? openDays.splice(i, 1) : openDays.push(day);
      setForm({ ...form, openDays });
    };
    return daysOfWeek.map((label, i) => (
      <SquareGradientBtn
        key={label}
        type="button"
        active={openDays?.includes(i)}
        onClick={() => setDays(i)}
      >
        {label}
      </SquareGradientBtn>
    ));
  }, [form]);

  const ElegibleDaysCheckbox = useMemo(() => {
    const { elegibleDays = [] } = form;
    const setDays = (day: number) => {
      const i = elegibleDays.indexOf(day);
      i > -1 ? elegibleDays.splice(i, 1) : elegibleDays.push(day);
      setForm({ ...form, elegibleDays });
    };
    return daysOfWeek.map((label, i) => (
      <Checkbox
        key={label}
        label={label}
        checked={elegibleDays?.includes(i)}
        onChange={() => setDays(i)}
      />
    ));
  }, [form]);

  return (
    <FormLarge onSubmit={handleSubmit}>
      <Row responsive>
        <Row flewrap>{OpenDaysButtons}</Row>
        <Row w="26%">
          <strong>Open on this day</strong>
          <Switch
            active={form.openOnDay}
            onClick={() => setForm({ ...form, openOnDay: !form.openOnDay })}
          />
        </Row>
      </Row>
      <Row responsive>
        <Column left>
          <strong>Opening Hour</strong>
          <InputBox>
            <Input
              type="time"
              placeholder="Choose function"
              value={form.openHour}
              onChange={ev => setForm({ ...form, openHour: ev.target.value })}
            />
          </InputBox>
        </Column>
        <Column left>
          <strong>Closing Hour</strong>
          <InputBox>
            <Input
              type="time"
              placeholder="Choose function"
              value={form.closeHour}
              onChange={ev => setForm({ ...form, closeHour: ev.target.value })}
            />
          </InputBox>
        </Column>
      </Row>
      <Row flewrap gap={6}>
        {ElegibleDaysCheckbox}
      </Row>
      <GradientBtn w="100%">Next</GradientBtn>
    </FormLarge>
  );
};

export default UserScheduelForm;
