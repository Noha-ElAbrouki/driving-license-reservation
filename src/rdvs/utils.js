import * as dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';


dayjs.extend(localizedFormat)


export const addDays = (numberDays) => {
    return dayjs().add(numberDays, 'day').format('L LT')
}