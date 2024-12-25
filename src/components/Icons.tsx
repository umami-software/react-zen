import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import { HiOutlineMenu } from 'react-icons/hi';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { MdCheck, MdArrowForwardIos, MdMoreHoriz, MdLogout, MdRefresh } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { PiTrash, PiArrowRight } from 'react-icons/pi';
import { GoAlert, GoInfo } from 'react-icons/go';
import { RxExternalLink, RxCopy } from 'react-icons/rx';

import Moon from '@/assets/moon.svg';
import Sun from '@/assets/sun.svg';

export const Icons = {
  Moon,
  Sun,
  Alert: GoAlert,
  Arrow: PiArrowRight,
  Check: MdCheck,
  Chevron: MdArrowForwardIos,
  Close: AiOutlineClose,
  Copy: RxCopy,
  Edit: BiEditAlt,
  ExternalLink: RxExternalLink,
  Eye: PiEyeLight,
  EyeSlash: PiEyeSlashLight,
  Info: GoInfo,
  Logout: MdLogout,
  MagnifyingGlass: HiMagnifyingGlass,
  Menu: HiOutlineMenu,
  Minus: AiOutlineMinus,
  More: MdMoreHoriz,
  Plus: AiOutlinePlus,
  Refresh: MdRefresh,
  Trash: PiTrash,
};
