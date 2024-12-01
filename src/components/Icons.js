import { ReactComponent as NoPriority } from '../icons_FEtask/No-priority.svg';
import { ReactComponent as Low } from '../icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as Medium } from '../icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as High } from '../icons_FEtask/Img - High Priority.svg';
import { ReactComponent as Urgent } from '../icons_FEtask/SVG - Urgent Priority colour.svg';

import { ReactComponent as Backlog } from '../icons_FEtask/Backlog.svg';
import { ReactComponent as Cancelled } from '../icons_FEtask/Cancelled.svg';
import { ReactComponent as To_do } from '../icons_FEtask/To-do.svg';
import { ReactComponent as Done } from '../icons_FEtask/Done.svg';
import { ReactComponent as In_progress } from '../icons_FEtask/in-progress.svg';

export const StatusIcons = {
  Backlog,
  'Todo': To_do,
  'In progress': In_progress,
  Done,
  Cancelled,
};

export const PriorityIcons = {
  4: Urgent,
  3: High,
  2: Medium,
  1: Low,
  0: NoPriority,
  "Urgent": Urgent,
  "High": High,
  "Medium": Medium,
  "Low": Low,
  "No priority": NoPriority,
};

