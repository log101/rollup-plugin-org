import type { FilterPattern } from "@rollup/pluginutils"
import type { Plugin } from "rollup"

export interface RollupGraphqlOptions {
  include?: FilterPattern
  exclude?: FilterPattern
}

export default function org(options?: RollupGraphqlOptions): Plugin
