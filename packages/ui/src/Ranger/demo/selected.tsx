import { Ranger } from '@eflag/ui';

export default () => (
  <Ranger
    defaultQuickValue={Ranger.TODAY.name}
    selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
  />
);
