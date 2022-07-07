export interface IGetSearchResultReq {
  key: any
}

export interface ISearchResult {
  key: any
}

export const getSearchResult = async (params: IGetSearchResultReq) => {
  // TODO
  // const res = await fetch('https://search.yahooapis.com/api/search')
  const res = {
    code: 200,
    data: {
      key: 'value'
    }
  }
  return res?.data as ISearchResult | undefined;
}

