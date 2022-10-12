import { useQuery } from 'react-query';
import { isNil, isEmpty } from 'lodash';
import {  getPolicy } from '../apis';
import { RQ_POLICY } from '../apis/key';

export const usePolicyResult = (params: any) => {
  const result = useQuery([RQ_POLICY, params], async () => {
    return getPolicy(params);
  });
  return result;
};
