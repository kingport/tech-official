import { useQuery } from "react-query";
import { isNil ,isEmpty} from 'lodash'
import { getFieldForm, IGetFormResultReq } from "../apis";
import { RQ_FIELD_FORM } from '../apis/key'

export const useFieldFormResult = (params: IGetFormResultReq) => {
  const result = useQuery([RQ_FIELD_FORM, params], async() => {
    return getFieldForm(params)
  },
  {
    enabled: !!params?.companyId,
  })
  return result
}
