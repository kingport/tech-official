import { useQuery } from 'react-query';
import { isNil, isEmpty } from 'lodash';
import { getDictInfo } from '../apis';
import { RQ_DICT } from '../apis/key';

export const useDictResult = (params: any) => {
  const result = useQuery([RQ_DICT, params], async () => {
    return getDictInfo(params);
  });
  return result;
};
