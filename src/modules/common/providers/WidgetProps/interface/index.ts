import {DocumentApi, WidgetApi} from "creo-widgets-lib";

export interface IApiContext{
  isInitialized: boolean
  isLoading: boolean
  isFailed: boolean
  api: null | {widgetApi: WidgetApi, documentApi: DocumentApi}
}
