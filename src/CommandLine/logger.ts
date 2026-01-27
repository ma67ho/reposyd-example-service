import { Logger } from "@reposyd/service-core";
import { isUndefined } from "lodash";

export default function (options?) {
  if (!isUndefined(options.logger)) {
    return options.logger
  }
  return Logger.console(options)
}